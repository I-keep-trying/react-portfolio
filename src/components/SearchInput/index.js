import React, { useRef, useState, Component } from 'react'
import {
  ChakraProvider,
  HStack,
  PinInput,
  PinInputField,
} from '@chakra-ui/react'

function CryptoWord({ target }) {
    const [value, setValue] = useState('')
    const fields = React.useMemo(
      () =>
        Array.from({ length: target }, (_, index) => (
          <PinInputField key={index} />
        )),
      [target]
    )
  
    return (
      <>
        <HStack>
          <PinInput
            placeholder=""
            value={value}
            onChange={setValue}
            type="alphanumeric"
          >
            {fields}
          </PinInput>
        </HStack>
        <pre>Value: {value}</pre>
        
      </>
    )
  }

const SearchInput = () => {
return <CryptoWord target={30} />
}

export default SearchInput