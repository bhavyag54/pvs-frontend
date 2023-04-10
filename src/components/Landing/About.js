import { Flex, Heading, Text } from '@chakra-ui/react'
import React from 'react'

const About = () => {
    return (
        <Flex direction={['column', 'column', 'row', 'row']} w={'100%'} justifyContent={'space-evenly'} >
            <Flex direction={'column'} w={['80%', '80%', '40%', '40%']} p={10} bg={'gray.900'} borderRadius={'2xl'}  >
                <Heading color={'white'}>Traditional Voting System</Heading>
            </Flex>
            <Flex direction={'column'} w={['80%', '80%', '40%', '40%']} p={10} bg={'gray.900'} borderRadius={'2xl'} >
                <Heading color={'white'}>Preferrential Voting System</Heading>
            </Flex>
        </Flex>
    )
}

export default About