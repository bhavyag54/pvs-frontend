import React from 'react'
import { Flex, Box, Heading } from '@chakra-ui/react'
import CreateForm from '../components/Dashboard/CreateForm'
import ElectionCard from '../components/Dashboard/ElectionCard'
const Dashboard = () => {
    const ElectionCards = [
        {
            title: 'Election 1',
            description: 'This is the first election',
        },
        {
            title: 'Election 2',
            description: 'This is the second election'
        },
        {
            title: 'Election 3',
            description: 'This is the third election'
        },
        {
            title: 'Election 4',
            description: 'This is the fourth election'
        },
    ]
    return (
        <Flex direction={'column'} bg={'black'} minH={"100vh"}>
            <Box px={8} mt={24} mb={12} mx="auto">
                <CreateForm />
            </Box>
            <Heading
                mt={2}
                fontSize={{
                    base: "3xl",
                    sm: "4xl",
                }}
                fontWeight="extrabold"
                letterSpacing="tight"
                _light={{
                    color: "gray.900",
                }}
                textAlign={'center'}
            >
                Things that require your attention!
            </Heading>
            <Flex direction={'row'} justifyContent={'space-evenly'} flexWrap={'wrap'} gap={10} my={10}>

                {ElectionCards.map((election, index) => {
                    return (
                        <ElectionCard title={election.title} description={election.description} />
                    )
                })}
            </Flex>

        </Flex>
    )
}

export default Dashboard