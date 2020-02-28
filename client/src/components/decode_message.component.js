import React, { useState } from 'react'
import '../App.css'

const DecodeMessage = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')
  const [result, setResult] = useState('Your decrypted message will show here.  It will self-destruct after it has been viewed.')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handlePasswordChange= (e) => {
    setPassword(e.target.value)
  }

  const onSubmit =(e) => {
    e.preventDefault()
    fetch('http://localhost:4000/decode_message/decode', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            password: password
        })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        setResult(data)
    })
  }

      return (
        <div className = "decode">
          <h1>Decode Message</h1>
            <form onSubmit={onSubmit}>
              <input 
                className = "message" 
                type = "text" 
                name = "message" 
                placeholder = "Message Data" 
                onChange={handleMessageChange} 
                value={message}
                autoComplete="off"
              /><br />
              <input 
                className = "password" 
                type = "password" 
                name = "password" 
                placeholder = "Password" 
                onChange={handlePasswordChange} 
                value={password}
                autoComplete="off"
              /><br />
              <input 
                type = "submit" 
                value = "Decode" 
              />
            </form>
            <h3>{result}</h3>
        </div>
      )
}

export default DecodeMessage