import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { useForm } from 'react-hook-form';
import { Box, Button, Card, CardBody, Text, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Badge, HStack } from '@chakra-ui/react';

function App() {
  // const { handleSubmit, control } = useForm<{ amountInputs: number }>({
  //   shouldFocusError: true,
  //   delayError: 500,
  // });
  // const [numInputs, setNumInputs] = useState<number>(0);

  const [values, setValues] = useState<number[]>([]);
  const [orderlyArray, setOrderlyArray] = useState<number[]>([]);
  const [ showArray, setShowArray] = useState<boolean>(false);


  const clickOrdenation = () => {
    setOrderlyArray(quickSort([...values]));
  };

  const newValue = (index: number, value: string) => {
    const newValues = [...values];
    newValues[index] = parseInt(value);
    setValues(newValues);
  };

  const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArray: number[] = [];
    const rightArray: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] < pivot) {
        leftArray.push(arr[i]);
      } else {
        rightArray.push(arr[i]);
      }
    }

    console.log('leftArray', leftArray);
    console.log('pivot', pivot);
    console.log('rightArray', rightArray);

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  };

  return (

  <Flex align={'center'} justify={'center'} minH={'100vh'}>
    <Card alignItems={'center'} alignContent={'center'} >
      <CardBody>
        
      {/* <Text mb={4}>Digite a quantidade de inputs:</Text>
      <Flex>
        <Input
          value={numInputs}
          type="number"
          onChange={handleInputChange}
          placeholder="Quantidade de Inputs"
          mr={2}
        />
        <Button onClick={
          () => {setNumInputs(numInputs)}
        }>Definir</Button>
      </Flex> */}

        <VStack spacing={5}>
          {/* {[0, 1, 2, 3, 4].map((index) => (
            <Input
              key={index}
              value={values[index] || ''}
              onChange={(e) => newValue(index, e.target.value)}
              type="number"
              placeholder={`Valor ${index + 1}`}
              mr={2}
            />
          ))} */}


          <HStack spacing={5}>
            <VStack spacing={2}>
              {[0, 1, 2, 3, 4].map((index) => (
                <NumberInput
                  min={0} max={100}
                  key={index}
                  value={values[index] || ''}
                  onChange={(valueString) => newValue(index, valueString)}
                  placeholder={`Valor ${index + 1}`}
                  mr={2}>
                  <NumberInputField />
                  <NumberInputStepper>
                    <NumberIncrementStepper />
                    <NumberDecrementStepper />
                  </NumberInputStepper>
                </NumberInput>
              ))}
            </VStack>
            <VStack spacing={2}>
            {[5, 6, 7, 8, 9].map((index) => (
              <NumberInput
                min={0} max={100}
                key={index}
                value={values[index] || ''}
                onChange={(valueString) => newValue(index, valueString)}
                placeholder={`Valor ${index + 1}`}
                mr={2}>
                <NumberInputField />
                <NumberInputStepper>
                  <NumberIncrementStepper />
                  <NumberDecrementStepper />
                </NumberInputStepper>
              </NumberInput>
            ))}
           </VStack>
          </HStack>

          <Button
            mt={5}
            onClick={() => {
              setShowArray(true)
              clickOrdenation()
            }}>
            Ordenar
          </Button>

          {showArray && (
          <Card bgColor={'purple.500'}>
            <CardBody >
            <HStack spacing={2}>
              {orderlyArray.map((index) => (
                <Badge colorScheme='white'>{index}</Badge>
              ))}
            </HStack>
            </CardBody>
          </Card>
          )}

        </VStack>
      </CardBody>
    </Card>
  </Flex>
  );
}

export default App;
