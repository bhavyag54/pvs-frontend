import React, { useState } from 'react';
import {
  Flex,
  Box,
  FormControl,
  FormLabel,
  Input,
  HStack,
  Stack,
  Button,
  Heading,
  Text,
  // Toast,
  useColorModeValue,
  useToast
} from '@chakra-ui/react';
import useApi from '../context/AppContext';

const Modal = () => {
  const [options, setOptions] = useState([]);
  const {createPoll} = useApi();

  const [pollData, setPollData] = useState({
    name: '',
    description: "",
    contact: ""
  })

  const handlePollData = (e) => {
    // console.log(e)

    setPollData({
      ...pollData, 
    [e.target.name]: e.target.value
    })
  }

  const toast = useToast()

  const handleOptionChange = (index, value) => {
    const newOptions = [...options];
    newOptions[index] = value;
    setOptions(newOptions);
  };

  const handleAddOption = () => {
    setOptions([...options, '']);
  };

  const handleDeleteOption = (index) => {
    const newOptions = [...options];
    newOptions.splice(index, 1);
    setOptions(newOptions);
  };

  const handleSubmit = async () => {

    // console.log(options.length)
    if(options.length < 2)
    {
      toast({
        title: 'Atleast 2 options required',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })
      return
    }
    if(!pollData.name || !pollData.contact || !pollData.description)
    {
      toast({
        title: 'Fill the required field',
        status: 'error',
        duration: 2000,
        isClosable: true,
      })

      return
    }

    await createPoll({

      options: options,
      owner: pollData

    })

  }

  useState(() => {
    console.log(options)
  }, [options])

  return (
    <Flex
      minH={'100vh'}
      align={'center'}
      justify={'center'}
      bg={useColorModeValue('gray.50', 'gray.800')}>
      <Stack spacing={8} mx={'auto'} maxW={'lg'} py={12} px={6}>
        <Stack align={'center'}>
          <Heading fontSize={'4xl'} textAlign={'center'}>
            Create Poll
          </Heading>
          <Text fontSize={'lg'} color={'white.600'}>
            to make great decisions for your organization
          </Text>
        </Stack>
        <Box
          rounded={'lg'}
          bg={useColorModeValue('white', 'gray.700')}
          boxShadow={'lg'}
          p={8}>
          <Stack spacing={4}>
            <Box>
              <FormControl id="Name" isRequired>
                <FormLabel>Name of the Poll</FormLabel>
                <Input type="text" onChange={e => handlePollData(e)} name='name' />
              </FormControl>
            </Box>
            <FormControl id="description" isRequired>
              <FormLabel>Description of the Poll</FormLabel>
              <Input type="text" onChange={e => handlePollData(e)} name="description" />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Contract Number of the Poll</FormLabel>
              <Input type="text" name="contact" onChange={e => handlePollData(e)}  />
            </FormControl>
            <Stack spacing={10} pt={2}>
              {options.map((option, index) => (
                <HStack key={index}>
                  <Input
                    type="text"
                    value={option}
                    onChange={(event) =>
                      handleOptionChange(index, event.target.value)
                    }
                  />
                  <Button
                    size="sm"
                    colorScheme="red"
                    onClick={() => handleDeleteOption(index)}
                  >
                    Delete
                  </Button>
                </HStack>
              ))}
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={handleAddOption}
              >
                Add Option
              </Button>
            </Stack>
            <Stack spacing={10} pt={2}>
              <Button
                loadingText="Submitting"
                size="lg"
                bg={'blue.400'}
                color={'white'}
                _hover={{
                  bg: 'blue.500',
                }}
                onClick={() => handleSubmit()}
                >
                Create the Poll
              </Button>
            </Stack>
          </Stack>
        </Box>
      </Stack>
    </Flex>
  );
};

export default Modal;
