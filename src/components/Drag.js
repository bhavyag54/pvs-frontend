import { useEffect, useState } from "react";
import { 
    Box, 
    Flex, 
    Grid, 
    GridItem, 
    Text,
    SimpleGrid,
    Menu, MenuButton, MenuList, MenuItem,
    Button,
    useToast
} from "@chakra-ui/react";
import { CSSTransition, TransitionGroup, Transition } from 'react-transition-group';
import useApi from "../context/AppContext";

const Drag = () => {

    // const {} = useApi()
    const toast = useToast()
    
    const n = 3;
    const arr = Array.from({length: n}, (_, index) => index+1);
    
    const [data, setData] = useState([
        {
            id: 1,
            name: "Nwnpdw",
            rank: 'NaN',
        },
        {
            id: 2,
            name: "something",
            rank: 'NaN',
        },
        {
            id: 3,
            name: "Nww",
            rank: 'NaN',
        },
    ])
    

    arr.push('NaN')
    
    const Select = (item, id) => {

        const canChange = data.filter(d => d.rank === item)
        
        if(item !== 'NaN')
        if(canChange.length)
        {
            toast({
                title: 'Rank already assigned',
                status: 'error',
                duration: 2000,
                isClosable: true,
              })
            return
        }

        const updatedList = data.map(d => {
            if(d.id === id)
                return {...d, rank: item}
            
            return d;
        }).sort((a,b) => {
            
            console.log(a.rank, b.rank)
            console.log(a.rank === 'NaN')
            if(a.rank === 'NaN' || b.rank === 'NaN')
                return 1;
            else
            return (a.rank - b.rank)
        
        })

        setData(updatedList)
    }

    useEffect(() => {
        console.log(data)
    }, [data])

    return (

        <Flex className="flex-col gap-3 items-center">
            <TransitionGroup className={'p-2'}>
                
                {data.map(d => {

                    return (
                        <CSSTransition key={d.id} timeout={500} classNames="item" className=" p-3">
                            <Flex 
                                justifyContent={'space-around'}
                                // borderBottom={1}
                                borderBottom={"1px solid white"}
                                borderColor={"white"}
                                alignItems={'center'}
                                w={"90vw"}
                                // borderEndWidth={10}
                            >
                                <Text width={"40%"}>
                                {d.name}
                                </Text>
                                <Menu>
                                    <MenuButton as={Button} colorScheme="blue">
                                        {d.rank}
                                    </MenuButton>
                                    <MenuList maxH={64} overflowY="auto">
                                        {arr.map(item => (
                                            <MenuItem key={item} onClick={() => Select(item, d.id)} _hover={{ bg: "gray.600" }}>
                                                {item}
                                        </MenuItem>
                                        ))}
                                    </MenuList>
                                </Menu>
                            </Flex>
                        </CSSTransition>
                    )
                })}
            </TransitionGroup>

            <Button className="w-80"
                // onClick={() => ()}
                
            >Submit</Button>

        </Flex>

    );
    
};


export default Drag