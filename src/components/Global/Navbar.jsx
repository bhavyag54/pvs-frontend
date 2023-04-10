import { ReactNode, useState } from 'react';
import {
    Box,
    Flex,
    Avatar,
    Link,
    Button,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    MenuDivider,
    useDisclosure,
    useColorModeValue,
    Stack,
    useColorMode,
    Center,
    IconButton,
    Text,
} from '@chakra-ui/react';
import { AiOutlineWallet } from 'react-icons/ai';
import Logo from './Logo';
import useApi from '../../context/AppContext';



export default function Navbar() {

    const {accountData, connect} = useApi()

    return (
        <>

            <Flex w="100%" position={'fixed'} backgroundColor="rgba(0, 
 0, 0, 0.8)" backdropFilter="saturate(180%) blur(5px)" h={16} px={4} alignItems={'center'} justifyContent={'space-between'}>
                <Logo />

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        
                        <Button variant={"solid"} colorScheme={"green"} leftIcon={<AiOutlineWallet />} onClick={connect}
                            transition={"all"}
                        >

                        {accountData.accountNo?
                            <Flex
                                flexDirection={'column'}
                                justifyContent={'center'}
                            >
                                <Text
                                    color={'rgba(0,0,0, 0.3)'}
                                >
                                    {accountData?.accountNo.substring(1,8)+"..."+accountData?.accountNo.substring(accountData?.accountNo.length - 4)}
                                </Text>
                                <Text
                                    fontSize={14}
                                >
                                    {parseFloat(accountData?.balance).toPrecision(3)} eth
                                </Text>
                            </Flex>:
                            "Connect with Meta Mask Wallet"
                        }
                        </Button>
                        
                    </Stack>
                </Flex>
            </Flex>

        </>
    );
}
