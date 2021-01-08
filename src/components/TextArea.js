import React, { useState } from 'react'
import TextareaAutosize from 'react-textarea-autosize'
import {
  Divider,
  Container,
  Form,
  Header,
  Message,
  Segment,
} from 'semantic-ui-react'

const TextArea1 = () => {
  const [state, setState] = useState({ value: '' })
  console.log('state', state)

  return (
    <Container>
      <Divider hidden />
      <Message info>
        <Message.Header>
          Usage with <code>react-textarea-autosize</code>
        </Message.Header>
        {/*         <Message.Content>
          This CodeSandbox replicates usage examples{' '}
          <a href="https://andreypopp.github.io/react-textarea-autosize/">
            react-textarea-autosize
          </a>{' '}
          and shows how you can use it with Semantic UI React.
        </Message.Content> */}
      </Message>

      <Segment>
        <Header as="h3">
          Controlled mode with <code>{`<Form />`}</code>
        </Header>
        <Segment secondary>State: {JSON.stringify(state, null, 2)}</Segment>
        {/*         <Form>
          <Form.Field
            control={TextareaAutosize}
            label="About"
            placeholder="Tell us more about you..."
            onChange={(e) => setState(e.target.value)}
            value={state.value}
          />

          <Form.Button
            content="Clear"
            onClick={() => setState({ value: '' })}
          />
        </Form> */}
      </Segment>

      <Segment.Group>
        <Segment as={Form}>
          <Header as="h3">
            Textarea with <code>maxRows</code> and <code>minRows</code>
          </Header>
          <TextareaAutosize
            minRows={3}
            maxRows={6}
            defaultValue="Just a single line..."
          />
        </Segment>
        <Segment as={Form}>
          <Header as="h3">
            Textarea with <code>maxRows</code> and <code>minRows</code> (
            <code>box-sizing: border-box</code>)
          </Header>
          <TextareaAutosize
            defaultValue="Just a single line..."
            minRows={3}
            maxRows={6}
            style={{ boxSizing: 'border-box' }}
          />
        </Segment>
        <Segment as={Form}>
          <Header as="h3">
            Textarea with <code>maxRows</code>
          </Header>
          <TextareaAutosize defaultValue="Just a single line..." maxRows={5} />
        </Segment>
        {/*         <Segment as={Form}>
          <Header as="h3">
            Textarea with <code>maxHeight</code>
          </Header>
          <TextareaAutosize
            defaultValue="Just a single line..."
            style={{ maxHeight: 300 }}
          />
        </Segment>
 */}{' '}
        <Segment as={Form}>
          <Header as="h3">
            Component with <code>rows</code> set
          </Header>
          <TextareaAutosize defaultValue="Just a single line..." rows={4} />
        </Segment>
        <Segment as={Form}>
          <Header as="h3">Receive message on height change</Header>

          <TextareaAutosize
            defaultValue="Just a single line..."
            onHeightChange={(height, instance) =>
              console.log(height, instance.rowCount)
            }
          />
        </Segment>
      </Segment.Group>
    </Container>
  )
}

export default TextArea1
