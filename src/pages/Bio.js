import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import {
  Text,
  Heading,
  Box,
  Center,
} from '@chakra-ui/react'

const Bio = () => {
  let history = useHistory()

  useEffect(() => {
    history.push('/bio')
  }, [history])

  return (
    <>
      <Center h="100px">
        <Heading variant="with-gradient">
          About Me
        </Heading>
      </Center>
      <Center>
        <Box align="left" w="80%">
          <Text>Almost before we knew it, we had left the ground.</Text>
          <Text>
            I know the pieces fit cuz I watched them fall away Mildewed and
            smoldering. Fundamental differing. Pure intention juxtaposed will
            set two lovers souls in motion Disintegrating as it goes testing our
            communication The light that fueled our fire then has burned a hole
            between us so We cannot see to reach an end crippling our
            communication. I know the pieces fit cuz I watched them tumble down
            No fault, none to blame it doesn't mean I don't desire to Point the
            finger, blame the other, watch the temple topple over. To bring the
            pieces back together, rediscover communication The poetry that comes
            from the squaring off between, And the circling is worth it. Finding
            beauty in the dissonance. There was a time that the pieces fit, but
            I watched them fall away. Mildewed and smoldering, strangled by our
            coveting I've done the math enough to know the dangers of our second
            guessing Doomed to crumble unless we grow, and strengthen our
            communication. Cold silence has a tendency to atrophy any Sense of
            compassion Between supposed lovers/brothers
          </Text>
          <Text>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer
            elit felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
            felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed. Lorem
            ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
            felis, fermentum auctor tortor et, faucibus fringilla elit. Ut
            maximus felis id ante facilisis tincidunt. Pellentesque vestibulum,
            eros vel rhoncus rhoncus, leo erat ultrices nisl, at finibus justo
            orci ac nibh. Sed posuere porta libero, sit amet scelerisque eros
            placerat quis. Fusce semper neque vel ligula dictum, sed mattis urna
            aliquet. In sit amet odio non nunc pharetra bibendum. Suspendisse ac
            turpis ultricies, ornare elit in, tristique nunc. Praesent faucibus
            arcu eu lobortis consectetur. Cras nec quam bibendum, dignissim urna
            quis, pellentesque ipsum. Morbi ac ex eget nisl fringilla egestas.
            Sed volutpat lacinia odio tincidunt volutpat. Praesent eget
            consectetur tellus, eu maximus quam. Sed vehicula felis sit amet
            enim aliquam, ac mollis purus viverra. Vivamus in augue ut nisl
            sagittis gravida. Mauris dictum quam vitae metus ornare maximus.
            Aliquam viverra bibendum nisl, a consectetur felis varius sed.
          </Text>
        </Box>
      </Center>
    </>
  )
}

export default Bio
