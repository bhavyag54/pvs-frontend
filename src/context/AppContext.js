import React, {createContext, useMemo, useContext, useState, useEffect} from 'react';
import Web3 from 'web3';
import PVSContract from '../contracts/PVS.json'

const ApiContext = createContext({})

export const ApiProvider = ({children}) => {

    console.log(PVSContract)
    const web3 = new Web3(Web3.givenProvider || 'http://localhost:3000');

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

    const contractAddress = '0xf0E6DEa1Ade984bf6e31062E0ecf0fbd4F59FfBd';
    const contractAbi = PVSContract.abi;

    const pvsContract = new web3.eth.Contract(contractAbi, contractAddress);

    async function createPoll(data) {
        console.log(data)
        const candidates = data.options;

        return
        const owners = [web3.eth.accounts.create().address];
        const receipt = await pvsContract.methods.createPoll(candidates, owners).send({from: web3.eth.accounts[0]});
        console.log(receipt);
    }

    async function vote() {
        const votes = [];
        const pollIndex = 1;
        const receipt = await pvsContract.methods.vote(votes, pollIndex).send({from: web3.eth.accounts[0]});
        console.log(receipt);
    }

    async function closePoll() {
        const pollIndex = 1;
        const receipt = await pvsContract.methods.closePoll(pollIndex).send({from: web3.eth.accounts[0]});
        console.log(receipt);
    }

    pvsContract.events.PollCreated().on('data', (event) => {
        console.log(event.returnValues);
    }).on('error', (error) => {
        console.error(error);
    });
    
    pvsContract.events.VoteCast().on('data', (event) => {
        console.log(event.returnValues);
    }).on('error', (error) => {
        console.error(error);
    });
    
    pvsContract.events.PollClosed().on('data', (event) => {
        console.log(event.returnValues);
    }).on('error', (error) => {
        console.error(error);
    });


    const pollCount = async () => {
        const result = await pvsContract.methods.pollCount().call();
        return result
    }

    // pollCount()

    const memo = useMemo(() => ({
        pollCount,
        createPoll,
        connect,
        accountData
    }), [accountData])

    return <ApiContext.Provider value={memo}>
        {children}
    </ApiContext.Provider>
}

export default function useApi() {
    return useContext(ApiContext)
}