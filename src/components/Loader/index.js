import React from 'react'
import {Loader as SemanticLoader, Dimmer} from 'semantic-ui-react'

export const Loader = () => {
  return (
    <Dimmer active>
        <SemanticLoader/>
    </Dimmer>
  )
}
