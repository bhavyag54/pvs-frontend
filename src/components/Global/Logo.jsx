import { HStack, Heading, Text } from '@chakra-ui/react'
import React from 'react'
import { MdHowToVote } from 'react-icons/md'


const Logo = () => {
    return (
        <HStack>
            <MdHowToVote size={'40'} color='#68D391' />
            <Heading display={['none', 'none', 'block', 'block']} mt={2}
                fontSize={{
                    base: "xl",
                    sm: "2xl",
                }}
                lineHeight="8"
                fontWeight="extrabold"
                // letterSpacing="tight"
                _light={{
                    color: "gray.900",
                }} >Preferential Voting System</Heading>
        </HStack>
    )
}

export default Logo