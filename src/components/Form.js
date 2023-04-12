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
  useColorModeValue
} from '@chakra-ui/react';

const Modal = () => {
  const [options, setOptions] = useState(['', '']);

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
                <Input type="text" />
              </FormControl>
            </Box>
            <FormControl id="description" isRequired>
              <FormLabel>Description of the Poll</FormLabel>
              <Input type="text" />
            </FormControl>
            <FormControl id="description" isRequired>
              <FormLabel>Contract Number of the Poll</FormLabel>
              <Input type="text" />
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
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
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
                bg={'teal.400'}
                color={'white'}
                _hover={{
                  bg: 'teal.500',
                }}>
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
