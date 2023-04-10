import React from 'react'
import { MdHowToVote } from 'react-icons/md'
import { Box, Flex, Stack, chakra, SimpleGrid, Button, Text } from '@chakra-ui/react'

const ElectionCard = (props) => {
    return (
        <Flex
            direction={'column'}
            
            py={12}
            px={12}
            borderRadius="3xl"
            bg={'gray.800'}
            minW={'md'}
        >
            <Box>
                <chakra.h2
                    fontSize={{
                        base: "3xl",
                        sm: "4xl",
                    }}
                    fontWeight="extrabold"
                    letterSpacing="tight"
                    lineHeight="shorter"

                    mb={6}
                >
                    <chakra.span display="block" >{props.title}</chakra.span>
                </chakra.h2>
                <Text
                    mt={4}
                    maxW="2xl"
                    fontSize="xl"
                    mx={{
                        lg: "auto",
                    }}
                    color="gray.500"
                    _dark={{
                        color: "gray.400",
                    }}
                >
                    {props.description}
                </Text>
                <Stack
                    direction={{
                        base: "column",
                        sm: "row",
                    }}
                    justifyContent='flex-end'
                    mt={8}
                >
                    <Button size="lg" colorScheme={'teal'} leftIcon={<MdHowToVote />}>
                        Participate
                    </Button>
                </Stack>
            </Box>

        </Flex>
    )
}

export default ElectionCard