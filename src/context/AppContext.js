import React, {createContext, useMemo, useContext, useState, useEffect} from 'react';
import Web3 from 'web3';
import PVSContract from '../contracts/PVS.json'
import { useNavigate } from 'react-router-dom';

const ApiContext = createContext({})

export const ApiProvider = ({children}) => {

    let navigate = useNavigate()
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');

    const [polls, setPolls] = useState({

    })

    const [isExecuted, setIsExecuted] = useState(false)

    const [accountData, setAccountData] = useState({
        accountNo: "",
        balance: ""
    })

    const connect = async () => {
        await window.ethereum.enable();

        const account = await window.ethereum.request({method: 'eth_accounts'})
        const accountNo = account[0];

        const balance = await web3.eth.getBalance(accountNo)
        const balanceInEther = web3.utils.fromWei(balance, 'ether');

        setAccountData({
            accountNo: accountNo,
            balance: balanceInEther
        })
    }

    useEffect(() => {
        connect()
    }, [])

    useEffect(() => {
        if(accountData?.accountNo)
            navigate('/dashboard')
    }, [accountData])

    const contractAddress = '0xD81c06E299Ee20533E6072298f36A2893cCc8a94';
    const contractAbi = PVSContract.abi;

    const pvsContract = new web3.eth.Contract(contractAbi, contractAddress);

    async function createPoll(data) {
        setIsExecuted(false)
        console.log(data)
        const candidates = data.options;
        console.log(candidates)

        const receipt = await pvsContract.methods.createPoll(data.owner.name, candidates).send({from: `${accountData?.accountNo}`});
        console.log(receipt)
        const pollid = await receipt.events.PollCreated.returnValues.pollIndex

        setIsExecuted(true)
        return pollid
    }

    async function vote(votes, id) {
        votes = votes.map(v => parseInt(v));
        const pollIndex = parseInt(id);
        console.log(votes, pollIndex)
        const receipt = await pvsContract.methods.vote(votes, pollIndex).send({from: `${accountData?.accountNo}`});
        console.log(receipt);

    }

    async function closePoll() {
        const pollIndex = 1;
        const receipt = await pvsContract.methods.closePoll(pollIndex).send({from: web3.eth.accounts[0]});
        console.log(receipt);
    }


    useEffect(() => {

        const func = async () => {

            const filterOptions = {
                filter: {
                  owner: accountData?.accountNo
                },
                fromBlock: 0,
                toBlock: 'latest'
              };


            await pvsContract.events.PollCreated(filterOptions, (error, event) => {
            })
            .on('data', (event) => {
                setPolls(p => ({
                    ...p,
                    [event.returnValues.pollIndex]: event.returnValues.owner
                }))
            })
            .on('error', console.error)

            await pvsContract.events.VoteCast().on('data', (event) => {
            }).on('error', (error) => {
                console.error(error);
            });

        }

        if(accountData?.accountNo || isExecuted)
            func()

    }, [accountData, isExecuted])

    const pollData = async (id) => {
        
        const pollOwner = await pvsContract.methods.polls(id).call();
        const data  = await pvsContract.methods.pollData(id).call();
        return {
            name:pollOwner.name,
            owner: pollOwner.owner,
            options: data[0]
        }
    }

    useEffect(() => {
        console.log("polls: ", polls)

        const func = async () => {
            const data  = await pollData(polls.pollIndex)
            console.log(data)
        }

        if(polls)
            func()

    }, [polls])


    const pollCount = async () => {
        const result = await pvsContract.methods.pollCount().call();
        return result
    }

    const memo = useMemo(() => ({
        pollCount,
        createPoll,
        connect,
        pollData,
        vote,
        accountData
    }), [accountData])

    return <ApiContext.Provider value={memo}>
        {children}
    </ApiContext.Provider>
}

export default function useApi() {
    return useContext(ApiContext)
}