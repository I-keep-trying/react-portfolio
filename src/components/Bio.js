import React, { useEffect } from 'react'
import { useHistory } from 'react-router-dom'
import styled from 'styled-components'

const Bio = ({ shevy }) => {
  console.log('Bio shevy', shevy)
  let history = useHistory()

  useEffect(() => {
    history.push('/bio')
  }, [history])
  /* 
  const {
    baseSpacing: bs,
    h1: { fontSize, lineHeight, marginBottom }

  } = shevy
 */
  const Wrap = styled.div`
    padding: ${shevy.baseSpacing()};
    margin-bottom: ${shevy.baseSpacing(2)};
  `

  const Heading = styled.h1`
    font-size: ${shevy.h1.fontSize};
    line-height: ${shevy.h1.lineHeight};
    margin-bottom: ${shevy.h1.marginBottom};
  `
  const Content = styled.p`
    font-size: ${shevy.content.fontSize};
    line-height: ${shevy.content.lineHeight};
    margin-bottom: ${shevy.content.marginBottom};
  `

  return (
    <div>
      <Wrap>
        <Heading>Shevy with Styled Components!</Heading>
        <Heading>My Bio</Heading>
        <Content>Bio content goes here.</Content>
      </Wrap>
      <p style={shevy.content}>
        If I had anything to say for myself, this is where I would put it.
      </p>
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer elit
        felis, fermentum auctor tortor et, faucibus fringilla elit. Ut maximus
        felis id ante facilisis tincidunt. Pellentesque vestibulum, eros vel
        rhoncus rhoncus, leo erat ultrices nisl, at finibus justo orci ac nibh.
        Sed posuere porta libero, sit amet scelerisque eros placerat quis. Fusce
        semper neque vel ligula dictum, sed mattis urna aliquet. In sit amet
        odio non nunc pharetra bibendum. Suspendisse ac turpis ultricies, ornare
        elit in, tristique nunc. Praesent faucibus arcu eu lobortis consectetur.
        Cras nec quam bibendum, dignissim urna quis, pellentesque ipsum. Morbi
        ac ex eget nisl fringilla egestas. Sed volutpat lacinia odio tincidunt
        volutpat. Praesent eget consectetur tellus, eu maximus quam. Sed
        vehicula felis sit amet enim aliquam, ac mollis purus viverra. Vivamus
        in augue ut nisl sagittis gravida. Mauris dictum quam vitae metus ornare
        maximus. Aliquam viverra bibendum nisl, a consectetur felis varius sed.
        Sed ultricies tortor ut felis tincidunt, ornare feugiat nibh pharetra.
        Vestibulum mi nibh, blandit dapibus nibh vel, egestas vulputate quam.
        Fusce tempor nisi et magna rhoncus mattis. Pellentesque sollicitudin
        nisl ut nisi pharetra, at vehicula quam facilisis. Aenean finibus
        ultrices nulla ut blandit. Aliquam eget enim nunc. Aliquam erat
        volutpat. Pellentesque hendrerit turpis a metus ullamcorper sodales eget
        in nisi. Donec sagittis ultrices tellus vel vestibulum. Aenean
        condimentum dignissim faucibus. Class aptent taciti sociosqu ad litora
        torquent per conubia nostra, per inceptos himenaeos. Cras pharetra
        pulvinar risus, vel varius sapien malesuada in. Praesent ornare urna at
        leo ultrices, a suscipit arcu posuere. Aenean et velit vehicula, tempor
        sem tempor, viverra massa. In pharetra est sed felis fermentum, a
        vehicula velit luctus. Sed quis commodo nisl, non scelerisque metus.
        Proin ultricies, dui ut efficitur hendrerit, metus est rutrum elit, quis
        sagittis est diam eget diam. Proin ultricies, arcu id lacinia bibendum,
        elit justo rutrum ligula, et finibus tellus sem in erat. Phasellus ut
        consequat eros, vel tempor tellus. Sed sollicitudin nibh ligula, commodo
        dictum felis venenatis id. Vivamus ullamcorper bibendum libero in porta.
        Suspendisse dignissim molestie neque, quis condimentum leo commodo
        accumsan. Vivamus euismod bibendum augue id porta. Curabitur fermentum,
        sapien ut tincidunt auctor, justo est maximus lectus, ut auctor erat dui
        vitae dui. Fusce vitae posuere nisi. Etiam feugiat lectus tellus, a
        rutrum magna cursus nec. Fusce arcu orci, finibus id maximus at, laoreet
        vitae orci. Aenean nibh orci, varius eget blandit at, vestibulum vitae
        sem. Praesent efficitur malesuada orci nec egestas. Pellentesque sed
        interdum magna, a placerat nisi. Suspendisse accumsan fringilla risus.
        Phasellus a lorem tortor. Sed egestas, eros ac condimentum finibus,
        mauris nisi luctus libero, vitae consectetur lectus nulla eget quam.
        Etiam pretium sagittis libero eu porttitor. Phasellus interdum porta
        neque, ut ultricies enim. Vestibulum id sodales mauris. Ut ut felis id
        tellus maximus aliquam sed a velit. Sed tincidunt bibendum dolor vitae
        tempor. Integer at velit semper, placerat libero a, euismod nulla. Morbi
        efficitur feugiat feugiat. Donec dignissim metus arcu. Proin facilisis
        lorem nec odio varius ultricies. Aenean sed convallis ante. Cras egestas
        est sit amet sapien tristique, vitae hendrerit est finibus. Cras blandit
        nibh id tortor blandit, vitae semper mauris varius.
      </p>
    </div>
  )
}

export default Bio
