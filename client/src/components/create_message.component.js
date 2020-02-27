import React, { useState } from 'react'
import '../App.css'

const CreateMessage = () => {
  const [message, setMessage] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [result, setResult] = useState('Your encrypted message will show here.  It will self-destruct after 1 hour.')

  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handlePassword1Change = (e) => {
    setPassword1(e.target.value) 
  }

  const handlePassword2Change= (e) => {
    setPassword2(e.target.value)
  }

  const onSubmit =(e) => {
    e.preventDefault()
    fetch('http://localhost:4000/create_message/add', {
        method: 'POST',
        headers: {
            Accept: 'application/json',
            'Content-Type': 'application/json',
        },
        body: JSON.stringify({
            message: message,
            password1: password1,
            password2: password2
        })
    }).then((response) => {
        return response.json()
    }).then((data) => {
        setResult(data)
    })
  }

      return (
        <div className = "create">
        <h1>Create A New Message</h1>
          <form onSubmit={onSubmit}>
            <input 
              className = "message" 
              type = "text" 
              name = "message" 
              placeholder = "Message" 
              onChange={handleMessageChange} 
              value={message}
              autocomplete="off"
            /><br />
            <input 
              className = "password1" 
              type = "password" 
              name = "password1" 
              placeholder = "Password" 
              onChange={handlePassword1Change} 
              value={password1}
              autocomplete="off"
            /><br />
            <input 
              className = "password2" 
              type = "password" 
              name = "password2" 
              placeholder = "Password" 
              onChange={handlePassword2Change} 
              value={password2}
              autocomplete="off"
            /><br />
            <input 
              type = "submit" 
              value = "Create" 
            />
          </form>
          <h3>{result}</h3>
        </div>
      )
}

export default CreateMessage