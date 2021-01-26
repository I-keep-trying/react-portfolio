import React, { useState, useEffect } from 'react'
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
  Input,
  InputGroup,
  InputLeftAddon,
  InputRightElement,
  Button,
  ButtonGroup,
  Flex,
  List,
  ListItem,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
  IconButton,
  Text,
  Tooltip,
  HStack,
} from '@chakra-ui/react'
import { CloseIcon } from '@chakra-ui/icons'
import { CopyToClipboard } from 'react-copy-to-clipboard'
import { nanoid } from 'nanoid'
import { stringDiff } from '../services/stringDiff'
import { getWords } from '../services/dictionary'

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

  const { isOpen, onOpen, onClose } = useDisclosure()

  const handleKeyDown = (event) => {
    if (event.keyCode === 13) {
      handleSubmit(event)
    }
  }

  useEffect(() => {
    window.addEventListener('keydown', handleKeyDown)
    return () => {
      window.removeEventListener('keydown', handleKeyDown)
    }
  })

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
        setNotify({ msg: `Error: ${newArr.error}; Param: ${obj.word}` })
      } else if (newArr.results.length > 0) {
        setResults((state) => [...state, ...newArr.results])
      } else {
        return results
      }
    })
  }
  console.log('userInput', userInput)

  const handleSubmit = async (e) => {
    console.log('submit e', e)
    /* without event listener:
    SyntheticBaseEvent {
    bubbles: true
    cancelable: true
    currentTarget: null
    defaultPrevented: true
    eventPhase: 3
    isDefaultPrevented: ƒ functionThatReturnsTrue()
    isPropagationStopped: ƒ functionThatReturnsFalse()
    isTrusted: true
    nativeEvent: SubmitEvent {
      isTrusted: true, submitter: button.chakra-button.css-1w5m1dh, 
      type: "submit", target: form, currentTarget: null, …}
    target: form
    timeStamp: 14703.689999994822
    type: "submit"
    _reactName: "onSubmit"
    _targetInst: null
}
    */
    e.preventDefault()
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
    } else if (userInput.length > 10) {
      onOpen()
      setNotify({
        title: 'Whoa hang on a minute',
        msg:
          'Word search is limited to 30 characters or less. Please adjust search accordingly.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
    } else if (exclusions.length > 25) {
      onOpen()
      setNotify({
        title: 'Dont be crazy',
        msg: 'Exclusions are limited to 25 characters or less.',
      })
      setTimeout(() => {
        onClose()
      }, 3000)
    } else if (!exclusions) {
      if (wildcards1.length > 0 || numeric === null) {
        r = await getWords(userInput)
        setResults((state) => [...state, ...r])
      } else if (numeric !== null) {
        r = await getWords(numUserInput)
        return filterStrings(userInput, r)
      } else {
        setNotify({
          msg: 'something weird happened...',
        })
      }
    } else {
      if (wildcards1.length > 0) {
        r = await getWords(userInput)
        return filterExclusions(r, wildcards1)
      } else {
        r = await getWords(numUserInput)
        return filterExclusions(r, wildcards2)
      }
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
        <Heading bgClip="text" bgGradient="linear(to-l, orange.500,#FF0080)">
          Word Search
        </Heading>
      </Center>

      <Flex width="Full" align="center" justifyContent="center">
        <Box textAlign="left" w="90%" maxWidth="500px">
          <Accordion allowMultiple>
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
                For example, if a word has more than one set of repeating
                letters, you can use different numbers for different sets of
                letters. For example, 'balloon' could be 'ba1122n', or
                'excellence' could be: 1xc1221nc1.
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
                Any letters entered into the 'exclusions' filter will eliminate
                any results containing the excluded letter(s) in the wildcard
                "?" position(s). The provided known letters are ignored, i.e.,
                if your query is 'ba?y', and you exclude the letter 'b', the
                word 'baby' will NOT be included in the returned list.
              </AccordionPanel>
            </AccordionItem>
          </Accordion>

          <form onSubmit={handleSubmit}>
            <Box my={4} textAlign="left">
              <Tooltip
                label="Enter letters a-z, numbers 1-9, or ?"
                aria-label="Enter letters a-z, numbers 1-9, or ?"
              >
                <FormControl isRequired>
                  <InputGroup>
                    <InputLeftAddon
                      children={
                        <>
                          <Text>Search </Text>
                          <Text color="tomato">*</Text>
                        </>
                      }
                    />
                    <Input
                      id="userinput"
                      className="search-input"
                      type="text"
                      placeholder="ba??"
                      maxLength="30"
                      value={userInput}
                      onChange={(e) => {
                        console.log('e.key', e)
                        return setUserInput(e.target.value.toLowerCase())
                      }}
                    />
                    {userInput.length > 0 ? (
                      <InputRightElement
                        children={
                          <IconButton
                            isRound
                            aria-label="reset field"
                            size="sm"
                            icon={<CloseIcon />}
                            onClick={resetInputField}
                          />
                        }
                      />
                    ) : (
                      <></>
                    )}
                  </InputGroup>
                </FormControl>
              </Tooltip>
              <Tooltip
                label="Enter any letters you do not want included in search results."
                aria-label="Enter any letters you do not want included in search results."
              >
                <FormControl mt={6}>
                  <InputGroup>
                    <InputLeftAddon children="Exclude" />
                    <Input
                      className="search-input"
                      type="text"
                      maxLength="25"
                      value={exclusions}
                      placeholder="xyz"
                      onChange={({ target }) =>
                        setExclusions(target.value.toLowerCase())
                      }
                    />
                    {exclusions.length > 0 ? (
                      <InputRightElement
                        children={
                          <IconButton
                            isRound
                            aria-label="reset field"
                            size="sm"
                            icon={<CloseIcon />}
                            onClick={resetExclusionsField}
                          />
                        }
                      />
                    ) : (
                      <></>
                    )}
                  </InputGroup>
                </FormControl>
              </Tooltip>
            </Box>
            <Box my={8} textAlign="left">
              <ButtonGroup spacing="2">
                <Button size="sm" type="submit">
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
                    <Button size="sm" onClick={handleSort}>
                      {buttonText}
                    </Button>
                    <CopyToClipboard
                      className="CopyToClipboard"
                      text={copyResults()}
                      onCopy={handleCopy}
                    >
                      <Button size="sm">{copiedButton} </Button>
                    </CopyToClipboard>
                    <Button size="sm" onClick={resetForm}>
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
