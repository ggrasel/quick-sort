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
      if (!isNaN(arr[i]) && arr[i] > 0 && arr[i] <= 100) {
        if (arr[i] < pivot) {
          leftArray.push(arr[i]);
        } else {
          rightArray.push(arr[i]);
        }
      }
    }

    console.log('leftArray', leftArray);
    console.log('pivot', pivot);
    console.log('rightArray', rightArray);

    return [...quickSort(leftArray), pivot, ...quickSort(rightArray)];
  };

  return (
    <>
      <Flex
        bgColor={'gray.800'}
        align={'center'}
        justify={'center'}
        minH={'100vh'}
      >
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
                      mr={2}
                    >
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
                      min={1}
                      max={100}
                      key={index}
                      value={values[index] || ''}
                      onChange={(valueString) => newValue(index, valueString)}
                      placeholder={`Valor ${index + 1}`}
                      mr={2}
                    >
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
                colorScheme="purple"
                onClick={() => {
                  clickOrdenation();
                }}
              >
                Ordenar
              </Button>

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
      </Flex>

      <Flex bgColor={'gray.800'} justify={'center'}>
        <Link
          bgColor={'gray.800'}
          textColor={'white'}
          href="https://github.com/ggrasel/quick-sort"
          isExternal
        >
          Acesse o repositório <ExternalLinkIcon mb={1} />
        </Link>
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
