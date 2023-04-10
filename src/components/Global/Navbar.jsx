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
} from '@chakra-ui/react';
import { AiOutlineWallet } from 'react-icons/ai';
import Logo from './Logo';



export default function Navbar() {
    const [isLogged, setIsLogged] = useState(false);
    return (
        <>

            <Flex w="100%" position={'fixed'} backgroundColor="rgba(0, 
 0, 0, 0.8)" backdropFilter="saturate(180%) blur(5px)" h={16} px={4} alignItems={'center'} justifyContent={'space-between'}>
                <Logo />

                <Flex alignItems={'center'}>
                    <Stack direction={'row'} spacing={7}>
                        {!isLogged ? (
                            <Button variant={"solid"} colorScheme={"teal"} leftIcon={<AiOutlineWallet />}>Connect With Meta Mask</Button>
                        ) : (
                            <Menu>
                                <MenuButton
                                    as={Button}
                                    rounded={'full'}
                                    variant={'link'}
                                    cursor={'pointer'}
                                    minW={0}>
                                    <Avatar
                                        size={'sm'}
                                        src={'https://avatars.dicebear.com/api/male/username.svg'}
                                    />
                                </MenuButton>
                                <MenuList alignItems={'center'}>
                                    <br />
                                    <Center>
                                        <Avatar
                                            size={'2xl'}
                                            src={'https://avatars.dicebear.com/api/male/username.svg'}
                                        />
                                    </Center>
                                    <br />
                                    <Center>
                                        <p>Username</p>
                                    </Center>
                                    <br />
                                    <MenuDivider />
                                    <MenuItem>Your Servers</MenuItem>
                                    <MenuItem>Account Settings</MenuItem>
                                    <MenuItem>Logout</MenuItem>
                                </MenuList>
                            </Menu>
                        )}
                    </Stack>
                </Flex>
            </Flex>

        </>
    );
}
