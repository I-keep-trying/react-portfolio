import React from 'react'
import { Button } from 'semantic-ui-react'

const Resume = () => {
  return (
    <div>
      <Button
        color="teal"
        size="large"
        as="a"
        href="https://docs.google.com/document/d/11g4Rjr6Pguz2MVFf81_A8X4rokyZMo2PGLpFBlNo-tM/preview"
        target="_blank"
        rel="noopener noreferrer"
      >
        View Resume
      </Button>
      <iframe
        src="https://docs.google.com/document/d/11g4Rjr6Pguz2MVFf81_A8X4rokyZMo2PGLpFBlNo-tM/preview"
        title="Andrea Crego Resume"
        className="resume"
      />
    </div>
  )
}

export default Resume
