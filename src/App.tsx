import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Box, Button, Card, CardBody, Text, Flex, Input, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack, Slider, SliderTrack, SliderFilledTrack, SliderThumb, Badge, HStack } from '@chakra-ui/react';

function App() {
  const [values, setValues] = useState<number[]>([]);
  const [orderlyArray, setOrderlyArray] = useState<number[]>([]);

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

        <VStack spacing={5}>
          {[0, 1, 2, 3, 4].map((index) => (
            <Input
              key={index}
              value={values[index] || ''}
              onChange={(e) => newValue(index, e.target.value)}
              type="number"
              placeholder={`Valor ${index + 1}`}
              mr={2}
            />
          ))}

          <Button
            mt={5}
            onClick={() => {
              clickOrdenation()
            }}>
            Ordenar
          </Button>

          <Card bgColor={'purple.500'}>
            <CardBody >
            <HStack spacing={2}>
              {orderlyArray.map((index) => (
                <Badge colorScheme='white'>{index}</Badge>
              ))}
            </HStack>
            </CardBody>
          </Card>

          {/* <NumberInput name='n4' defaultValue={3} min={0} max={10}>
            <NumberInputField />
            <NumberInputStepper>
              <NumberIncrementStepper />
              <NumberDecrementStepper />
            </NumberInputStepper>
          </NumberInput> */}
        </VStack>
      </CardBody>
    </Card>
  </Flex>
  );
}

export default App;
