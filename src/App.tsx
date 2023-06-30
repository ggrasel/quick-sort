import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, CardBody, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack } from '@chakra-ui/react';

function App() {
  const [values, setValues] = useState<number[]>([]);
  const [sortedValues, setSortedValues] = useState<number[]>([]);

  const handleSortClick = () => {
    const sortedArray = quickSort([...values]);
    setSortedValues(sortedArray);
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
      
      <NumberInput name='n1' defaultValue={2} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <NumberInput name='n2' defaultValue={1} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <NumberInput name='n3' defaultValue={4} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>

      <NumberInput name='n4' defaultValue={3} min={0} max={10}>
        <NumberInputField />
        <NumberInputStepper>
          <NumberIncrementStepper />
          <NumberDecrementStepper />
        </NumberInputStepper>
      </NumberInput>
      </VStack>

        <Button
        mt={5}
        onClick={() => {
          //quickSort()
        }}>
          Teste Pai
        </Button>

      </CardBody>
    </Card>
  </Flex>
    
  );
}

export default App;
