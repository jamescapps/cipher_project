import React, { useState, useEffect } from 'react'
import '../App.css'

//Create a new board with password.
//Threads and replies are in code.

const DecodeMessage = () => {
  const [message, setMessage] = useState('')
  const [password, setPassword] = useState('')


  const handleMessageChange = (e) => {
    setMessage(e.target.value)
  }

  const handlePasswordChange= (e) => {
    setPassword(e.target.value)
  }

  const onSubmit =(e) => {
    e.preventDefault()
    const thread = {
      message: message,
      password: password,
    }
    console.log(thread)
    console.log("Submitted")
  }

  useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:4000/threads/test')
        const body = await response.json()
        console.log(body)
    }
    
    getData()
    }, [])

      return (
        <div className = "create">
        <h1>Decode Message</h1>
          <form onSubmit={onSubmit}>
            <input 
              className = "message" 
              type = "text" 
              name = "message" 
              placeholder = "Message" 
              onChange={handleMessageChange} 
              value={message}
            /><br />
            <input 
              className = "password" 
              type = "password" 
              name = "password" 
              placeholder = "Password" 
              onChange={handlePasswordChange} 
              value={password}
            /><br />
            <input 
              type = "submit" 
              value = "Decode" 
            />
          </form>
        </div>
      )
}


export default DecodeMessage