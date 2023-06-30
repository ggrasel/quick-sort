import { ExternalLinkIcon } from '@chakra-ui/icons';
import {
  Badge,
  Button,
  Card,
  CardBody,
  Flex,
  HStack,
  Link,
  Modal,
  ModalBody,
  ModalContent,
  ModalFooter,
  ModalHeader,
  ModalOverlay,
  NumberDecrementStepper,
  NumberIncrementStepper,
  NumberInput,
  NumberInputField,
  NumberInputStepper,
  Text,
  VStack,
} from '@chakra-ui/react';
import { useState } from 'react';
import './App.css';

function App() {
  const [values, setValues] = useState<number[]>([]);
  const [orderlyArray, setOrderlyArray] = useState<number[]>([]);
  const [showArray, setShowArray] = useState<boolean>(false);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);
  // const [arrayChanges, setArrayChanges] = useState<string>('');

  const validateInputs = () => {
    console.log('values', values);
    if (values.length === 0) {
      return true;
    }

    if (
      (values.length === 1 && isNaN(values[0])) ||
      (values.length === 1 && values[0] === 0)
    ) {
      return true;
    }

    for (let i = 0; i < values.length; i++) {
      if (values[i] > 0 && values[i] <= 100) {
        return false;
      }
    }
    return true;
  };

  const clickOrdenation = () => {
    if (validateInputs()) {
      setIsModalOpen(true);
      return;
    }

    setShowArray(true);
    setOrderlyArray(quickSort([...values]));
  };

  const clearFields = () => {
    setValues(Array(10).fill(0));
    setOrderlyArray([]);
    setShowArray(false);
    // setArrayChanges('');
  };

  const newValue = (index: number, value: string) => {
    const parsedValue = parseInt(value);
    if (isNaN(parsedValue) || parsedValue === 0 || value === '') {
      const newValues = [...values];
      newValues[index] = 0;
      setValues(newValues);
    } else {
      const newValues = [...values];
      newValues[index] = parsedValue;
      setValues(newValues);
    }
  };

  const quickSort = (arr: number[]): number[] => {
    if (arr.length <= 1) {
      return arr;
    }

    const pivot = arr[arr.length - 1];
    const leftArray: number[] = [];
    const rightArray: number[] = [];

    for (let i = 0; i < arr.length - 1; i++) {
      if (!isNaN(arr[i]) && arr[i] > 0 && arr[i] <= 100) {
        if (arr[i] < pivot) {
          leftArray.push(arr[i]);
        } else {
          rightArray.push(arr[i]);
        }

        // setArrayChanges(
        //   (prevChanges) => prevChanges + 'Chamada ' + JSON.stringify(i) + '<br>'
        // );
        // setArrayChanges(
        //   (prevChanges) =>
        //     prevChanges + 'Esq = ' + JSON.stringify(leftArray) + '<br>'
        // );
        // setArrayChanges(
        //   (prevChanges) =>
        //     prevChanges + 'Pivo = ' + JSON.stringify(pivot) + '<br>'
        // );
        // setArrayChanges(
        //   (prevChanges) =>
        //     prevChanges + 'Dir = ' + JSON.stringify(rightArray) + '<br>'
        // );
      }
    }

    console.log('leftArray', leftArray);
    console.log('pivot', pivot);
    console.log('rightArray', rightArray);

    const finalArray = [
      ...quickSort(leftArray),
      pivot,
      ...quickSort(rightArray),
    ];
    const finalArray2 = finalArray.filter((valor) => valor !== 0);

    return finalArray2;
  };

  return (
    <>
      <Flex
        bgColor={'gray.800'}
        align={'center'}
        justify={'center'}
        minH={'100vh'}
      >
        <VStack>
          <Card bgColor={'white'}>
            <CardBody>
              <Text
                color={'purple.500'}
                fontWeight={'bold'}
                textAlign={'center'}
                fontSize={50}
              >
                Quick Sort
              </Text>

              <VStack spacing={5} mt={5}>
                <HStack spacing={5}>
                  <VStack spacing={2}>
                    {[0, 1, 2, 3, 4].map((index) => (
                      <NumberInput
                        min={1}
                        max={100}
                        key={index}
                        value={values[index] || ''}
                        onChange={(valueString) => newValue(index, valueString)}
                        placeholder={`Valor ${index + 1}`}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    ))}
                    <Button
                      w={'full'}
                      mt={5}
                      colorScheme="gray"
                      onClick={() => {
                        clearFields();
                      }}
                    >
                      Limpar
                    </Button>
                  </VStack>
                  <VStack spacing={2}>
                    {[5, 6, 7, 8, 9].map((index) => (
                      <NumberInput
                        min={1}
                        max={100}
                        key={index}
                        value={values[index] || ''}
                        onChange={(valueString) => newValue(index, valueString)}
                        placeholder={`Valor ${index + 1}`}
                      >
                        <NumberInputField />
                        <NumberInputStepper>
                          <NumberIncrementStepper />
                          <NumberDecrementStepper />
                        </NumberInputStepper>
                      </NumberInput>
                    ))}
                    <Button
                      w={'full'}
                      mt={5}
                      colorScheme="purple"
                      onClick={() => {
                        // setArrayChanges('');
                        clickOrdenation();
                      }}
                    >
                      Ordenar
                    </Button>
                  </VStack>
                </HStack>

                <HStack w={'full'} spacing={7}></HStack>

                {showArray && (
                  <Card bgColor={'purple.500'}>
                    <CardBody>
                      <HStack spacing={2}>
                        {orderlyArray.map((index) => (
                          <Badge
                            fontWeight={'bold'}
                            fontSize={24}
                            bgColor={'purple.500'}
                            textColor={'white'}
                          >
                            {index}
                          </Badge>
                        ))}
                      </HStack>
                    </CardBody>
                  </Card>
                )}
              </VStack>
            </CardBody>
          </Card>

          <Link
            mt={5}
            bgColor={'gray.800'}
            textColor={'white'}
            href="https://github.com/ggrasel/quick-sort"
            isExternal
          >
            Acesse o repositório <ExternalLinkIcon mb={1} />
          </Link>
        </VStack>
      </Flex>

      <Modal isOpen={isModalOpen} onClose={() => setIsModalOpen(false)}>
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>Erro</ModalHeader>
          <ModalBody>
            <Text>Por favor, preencha ao menos um valor.</Text>
          </ModalBody>
          <ModalFooter>
            <Button colorScheme="purple" onClick={() => setIsModalOpen(false)}>
              Fechar
            </Button>
          </ModalFooter>
        </ModalContent>
      </Modal>
    </>
  );
}

export default App;
