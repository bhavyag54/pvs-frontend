import {
    Box,
    Button,
    ButtonGroup,
    Container,
    Flex,
    HStack,
    IconButton,
    Text,
    useBreakpointValue,
} from '@chakra-ui/react'
import { FiMenu } from 'react-icons/fi'
  
const Navbar = () => {

    
    return (
        <Flex
            // position={'fixed'}
            top={0}
            // h={10}
            // bg={'red'}
            w={"100vw"}
            boxShadow={'2xl'}
        >

            <Flex
                w={'100vw'}
                justifyContent={'space-between'}
                alignItems={'center'}
                px={5}
                py={2}
            >
                
                <Text>PVS</Text>
                <Flex

                >
                    <Button>Connet Wallet</Button>
                </Flex>

            </Flex>

        </Flex>
    )
}

export default Navbar