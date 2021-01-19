/* eslint-disable no-unused-vars */
import React, {
  useState,
  useMemo,
  useContext,
  createContext,
  useReducer,
  useRef,
  useImperativeHandle,
  forwardRef,
} from 'react'
import {
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  Box,
  Heading,
  Center,
  FormControl,
  FormLabel,
  FormErrorMessage,
  FormHelperText,
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Textarea,
  Button,
  ButtonGroup,
  Flex,
  List,
  ListItem,
  ListIcon,
  useToast,
  Stack,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalFooter,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Grid,
  useControllableState,
  PinInput,
  PinInputField,
  Text,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'

import { CopyToClipboard } from 'react-copy-to-clipboard'
import { nanoid } from 'nanoid'
import { stringDiff } from '../services/stringDiff'
import { getWords } from '../services/dictionary'
import SearchInput from '../components/SearchInput'

const SearchForm = () => {
  const [results, setResults] = useState([])
  const [userInput, setUserInput] = useState('')
  const [exclusions, setExclusions] = useState('')
  // eslint-disable-next-line no-unused-vars
  const [copied, setCopied] = useState(false)
  const [toggle, setToggle] = useState(false)
  const [buttonText, setButtonText] = useState('Sort a-z')
  const [copiedButton, setCopiedButton] = useState('Copy List')
  const [notify, setNotify] = useState({ title: '', msg: '' })
  const [loading, setLoading] = useState('false')

  const toast = useToast()
  const { isOpen, onOpen, onClose } = useDisclosure()

  const fields = useMemo(
    () =>
      Array.from({ length: 30 }, (_, index) => {
        if (index % 2 === 0) {
          return <PinInputField className="pin-input" key={nanoid()} />
        } else {
          return <PinInputField className="pin-input-alt" key={nanoid()} />
        }
      }),
    []
  )

  const handleSort = () => {
    const newResults = [...results]
    const sort1 = results.sort((a, b) => (a.word < b.word ? 1 : -1))
    const sort1tog = () => {
      setToggle(false)
      setButtonText('Sort a - z')

      setResults(sort1)
    }
    const sort2 = newResults.sort((a, b) => (a.word < b.word ? -1 : 1))

    const sort2tog = () => {
      setToggle(true)
      setButtonText('Sort z - a')

      setResults(sort2)
    }
    toggle === false ? sort2tog() : sort1tog()
  }

  const filterExclusions = async (arr, reg) => {
    const exArr = exclusions.split('').join('|')
    const regx = new RegExp(`${exArr}`, 'g')
    const reduceArr = arr.reduce((acc, item) => {
      for (let i in reg) {
        let currChar = item.word.charAt(reg[i].index)
        let matchedItem = [...currChar.matchAll(regx)]
        if (matchedItem.length > 0) {
          acc.push(item.word)
        }
      }
      return acc
    }, [])

    const filterArr = arr.filter((obj) => {
      return reduceArr.includes(obj.word) ? null : obj.word
    })
    if (reg[0][0] !== '?') {
      filterStrings(userInput, filterArr)
    } else {
      setResults((state) => [...state, ...filterArr])
    }
  }

  const filterStrings = (arr1, arr2) => {
    return arr2.forEach((obj) => {
      const newArr = stringDiff(arr1, obj.word)

      if (newArr.error) {
        toast(`Error: ${newArr.error}; Param: ${obj.word}`)
      } else if (newArr.results.length > 0) {
        setResults((state) => [...state, ...newArr.results])
      } else {
        return results
      }
    })
  }

  const handleSubmit = async (e) => {
    e.preventDefault()
    console.log('userInput', userInput)
    setResults([])
    let wildcards1 = [...userInput.matchAll(/\?/g)]
    let numeric = userInput.match(/\d/g)
    let wildcards2 = [...userInput.matchAll(/\d/g)]
    const regx = /\d/g
    const numUserInput = userInput.replace(regx, '?')
    let r
    if (userInput.length === 0) {
      onOpen()
      setNotify({
        title: 'Form Incomplete',
        msg: 'Please enter some letters.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
    }
    if (wildcards1.length > 0 || numeric === null) {
      r = await getWords(userInput)
      setResults((state) => [...state, ...r])
    } else if (numeric !== null) {
      r = await getWords(numUserInput)
      return filterStrings(userInput, r)
    } else {
      toast({
        position: 'top',
        duration: 2000,
        isClosable: true,
        status: 'error',
        description: 'something weird happened...',
      })
    }
  }

  const copyResults = () => {
    return results?.map((obj) => obj.word)
  }

  const handleCopy = () => {
    setCopied(true)
    setCopiedButton('List copied!')
    setTimeout(() => {
      setCopiedButton('Copy List')
    }, 3000)
  }

  const resetInputField = () => {
    setUserInput('')
  }

  const resetExclusionsField = () => {
    setExclusions('')
  }

  const resetForm = () => {
    setResults([])
    setUserInput('')
    setExclusions('')
    setCopied(false)
  }

  return (
    <>
          <Center h="100px">
        <Heading>Word Search</Heading>
      </Center>

      <Accordion defaultIndex={[0]} allowMultiple>
        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Box flex="1" textAlign="left">
              Use one ? for each individual unknown letter.
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            Example: b?ar might return bear, or boar.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Box flex="1" textAlign="left">
              Use numeric digits 1 - 9 for two or more of the same letter.
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            For example, if a word has more than one set of repeating letters,
            you can use different numbers for different sets of letters. For
            example, 'balloon' could be 'ba1122n', or 'excellence' could be:
            1xc1221nc1.
          </AccordionPanel>
        </AccordionItem>

        <AccordionItem>
          <AccordionButton>
            <AccordionIcon />
            <Box flex="1" textAlign="left">
              (Optional) Exclude or filter specific letters from results.
            </Box>
          </AccordionButton>
          <AccordionPanel pb={4}>
            Any letters entered into the 'exclusions' filter will eliminate any
            results containing the excluded letter(s) in the wildcard "?"
            position(s). The provided known letters are ignored, i.e., if your
            query is 'ba?y', and you exclude the letter 'b', the word 'baby'
            will NOT be included in the returned list.
          </AccordionPanel>
        </AccordionItem>
      </Accordion>
      <Flex width="Full" align="center" justifyContent="center">
        <Box w="90%" maxWidth="720px">
          <form onSubmit={handleSubmit}>
            <Box borderWidth="1px" my={3} textAlign="left">
              <Text>Search:</Text>
              <PinInput
                size="xs"
                placeholder=""
                value={userInput}
                onChange={setUserInput}
                type="alphanumeric"
                variant="filled"
              >
                {fields}
              </PinInput>
            </Box>
            <Box borderWidth="1px" my={3} textAlign="left">
              <Text>Exclude:</Text>
              <PinInput
                size="xs"
                placeholder=""
                value={exclusions}
                onChange={setExclusions}
                type="alphanumeric"
                variant="filled"
              >
                {fields}
              </PinInput>
            </Box>
            <Box my={4} textAlign="left">
              <ButtonGroup spacing="4">
                <Button size="xs" type="submit" onClick={handleSubmit}>
                  Search
                </Button>
                <Modal isOpen={isOpen} onClose={onClose} isCentered>
                  <ModalOverlay />
                  <ModalContent>
                    <ModalHeader>{notify.title} </ModalHeader>
                    <ModalCloseButton />
                    <ModalBody>{notify.msg} </ModalBody>
                  </ModalContent>
                </Modal>

                {results.length > 0 ? (
                  <>
                    <Button size="xs" onClick={handleSort}>
                      {buttonText}
                    </Button>
                    <CopyToClipboard
                      className="CopyToClipboard"
                      text={copyResults()}
                      onCopy={handleCopy}
                    >
                      <Button size="xs">{copiedButton} </Button>
                    </CopyToClipboard>
                    <Button size="xs" onClick={resetForm}>
                      Reset Form
                    </Button>
                  </>
                ) : (
                  <></>
                )}
              </ButtonGroup>
              <List
                verticalAlign="middle"
                value={results}
                onChange={() => setCopied(false)}
              >
                {results?.map((obj) => (
                  <ListItem key={nanoid()}>{obj.word}</ListItem>
                ))}
              </List>
            </Box>
          </form>
        </Box>
      </Flex>
    </>
  )
}

export default SearchForm
