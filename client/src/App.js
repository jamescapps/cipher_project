import React from 'react'


import CreateMessage from './components/create_message.component'
import DecodeMessage from './components/decode_message.component'

const App = () => {
  return (
    <div>
      <CreateMessage />
      <DecodeMessage />
    </div>
  )
}

export default App