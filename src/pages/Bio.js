import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import { Text, Box, Center, Input } from '@chakra-ui/react'

const Bio = () => {
  let history = useHistory()

  useEffect(() => {
    history.push('/bio')
  }, [history])

  return (
    <Center>
      <Box w="80%">
        <Text>
          If I had anything to say for myself, this is where I would put it.
        </Text>
        <Text>
          Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
          felis, fermentum auctor tortor et, faucibus fringilla elit. Ut maximus
          felis id ante facilisis tincidunt. Pellentesque vestibulum, eros vel
          rhoncus rhoncus, leo erat ultrices nisl, at finibus justo orci ac
          nibh. Sed posuere porta libero, sit amet scelerisque eros placerat
          quis. Fusce semper neque vel ligula dictum, sed mattis urna aliquet.
          In sit amet odio non nunc pharetra bibendum. Suspendisse ac turpis
          ultricies, ornare elit in, tristique nunc. Praesent faucibus arcu eu
          lobortis consectetur. Cras nec quam bibendum, dignissim urna quis,
          pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas. Sed
          volutpat lacinia odio tincidunt volutpat. Praesent eget consectetur
          tellus, eu maximus quam. Sed vehicula felis sit amet enim aliquam, ac
          mollis purus viverra. Vivamus in augue ut nisl sagittis gravida.
          Mauris dictum quam vitae metus ornare maximus. Aliquam viverra
          bibendum nisl, a consectetur felis varius sed. Lorem ipsum dolor sit
          amet, consectetur adipiscing elit. Integer elit felis, fermentum
          auctor tortor et, faucibus fringilla elit. Ut maximus felis id ante
          facilisis tincidunt. Pellentesque vestibulum, eros vel rhoncus
          rhoncus, leo erat ultrices nisl, at finibus justo orci ac nibh. Sed
          posuere porta libero, sit amet scelerisque eros placerat quis. Fusce
          semper neque vel ligula dictum, sed mattis urna aliquet. In sit amet
          odio non nunc pharetra bibendum. Suspendisse ac turpis ultricies,
          ornare elit in, tristique nunc. Praesent faucibus arcu eu lobortis
          consectetur. Cras nec quam bibendum, dignissim urna quis, pellentesque
          ipsum. Morbi ac ex eget nisl fringilla egestas. Sed volutpat lacinia
          odio tincidunt volutpat. Praesent eget consectetur tellus, eu maximus
          quam. Sed vehicula felis sit amet enim aliquam, ac mollis purus
          viverra. Vivamus in augue ut nisl sagittis gravida. Mauris dictum quam
          vitae metus ornare maximus. Aliquam viverra bibendum nisl, a
          consectetur felis varius sed. Lorem ipsum dolor sit amet, consectetur
          adipiscing elit. Integer elit felis, fermentum auctor tortor et,
          faucibus fringilla elit. Ut maximus felis id ante facilisis tincidunt.
          Pellentesque vestibulum, eros vel rhoncus rhoncus, leo erat ultrices
          nisl, at finibus justo orci ac nibh. Sed posuere porta libero, sit
          amet scelerisque eros placerat quis. Fusce semper neque vel ligula
          dictum, sed mattis urna aliquet. In sit amet odio non nunc pharetra
          bibendum. Suspendisse ac turpis ultricies, ornare elit in, tristique
          nunc. Praesent faucibus arcu eu lobortis consectetur. Cras nec quam
          bibendum, dignissim urna quis, pellentesque ipsum. Morbi ac ex eget
          nisl fringilla egestas. Sed volutpat lacinia odio tincidunt volutpat.
          Praesent eget consectetur tellus, eu maximus quam. Sed vehicula felis
          sit amet enim aliquam, ac mollis purus viverra. Vivamus in augue ut
          nisl sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
          Aliquam viverra bibendum nisl, a consectetur felis varius sed.
        </Text>
        <Input size="xs" />
      </Box>
    </Center>
  )
}

export default Bio
