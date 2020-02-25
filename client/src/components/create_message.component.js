import React, { useState, useEffect } from 'react'
import '../App.css'


const CreateMessage = () => {
  const [message, setMessage] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [result, setResult] = useState('')

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
    fetch('http://localhost:4000/boards/add', {
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
    }).then(function(response) {
        return response.json()
    }).then(function(data) {
        console.log(data)
        setResult(data)
    })


  }

  useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:4000/boards/test')
        const body = await response.json()
        console.log(body)
    }
    
    getData()
    }, [])

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
            /><br />
            <input 
              className = "password1" 
              type = "password" 
              name = "password1" 
              placeholder = "Password" 
              onChange={handlePassword1Change} 
              value={password1}
            /><br />
            <input 
              className = "password2" 
              type = "password" 
              name = "password2" 
              placeholder = "Password" 
              onChange={handlePassword2Change} 
              value={password2}
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