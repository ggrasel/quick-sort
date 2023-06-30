import React from 'react';
import logo from './logo.svg';
import './App.css';
import { Button, Card, CardBody, Flex, NumberDecrementStepper, NumberIncrementStepper, NumberInput, NumberInputField, NumberInputStepper, VStack } from '@chakra-ui/react';

function App() {

  // async function logicaQuick([n1, n2, n3, n4]) {
  //   console.log('logicaQuick');
  // }

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
          logicaQuick()
        }}>
          Teste Pai
        </Button>

      </CardBody>
    </Card>
  </Flex>
    
  );
}

export default App;
