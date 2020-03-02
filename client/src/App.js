import React from 'react'
import { BrowserRouter as Router, Route } from "react-router-dom"

import CreateMessage from './components/create_message.component'
import DecodeMessage from './components/decode_message.component'
import ThankYou from './components/thank_you.component'

const App = () => {
  return (
    <Router>
      <Route path = "/create" component={CreateMessage} />
      <Route path = "/decode" component={DecodeMessage} />
      <Route path = "/thankyou" component={ThankYou} />
    </Router>
  )
}

export default App