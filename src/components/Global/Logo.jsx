import { HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdHowToVote } from 'react-icons/md'


const Logo = () => {
    return (
        <HStack>
            <MdHowToVote size={'40'} color='#68D391' />
            <Heading display={['none', 'none', 'block', 'block']} fontSize='2xl' fontWeight='bold' fontFamily={`'Raleway',sans-serif`}>Preferential Voting System</Heading>
        </HStack>
    )
}

export default Logo