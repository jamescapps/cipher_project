import React, { useState, useEffect } from 'react'
import '../App.css'

//Create a new board with password.
//Threads and replies are in code.

const CreateThread = () => {
  const [boardName, setBoardName] = useState('')
  const [threadName, setThreadName] = useState('')
  const [password, setPassword] = useState('')


  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value)
  }

  const handleThreadNameChange = (e) => {
    setThreadName(e.target.value) 
  }

  const handlePasswordChange= (e) => {
    setPassword(e.target.value)
  }

  const onSubmit =(e) => {
    e.preventDefault()
    const thread = {
      boardName: boardName,
      threadName: threadName,
      password: password,
    }
    console.log(thread)
    console.log("Submitted")
  }

  useEffect(() => {
    const getData = async () => {
        const response = await fetch('http://localhost:4000/test')
        const body = await response.json()
        console.log(body)
    }
    
    getData()
    }, [])

      return (
        <div className = "create">
        <h1>Create A New Thread</h1>
          <form onSubmit={onSubmit}>
            <input 
              className = "boardName" 
              type = "text" 
              name = "boardName" 
              placeholder = "Name of Board" 
              onChange={handleBoardNameChange} 
              value={boardName}
            /><br />
            <input 
              className = "threadName" 
              type = "text" 
              name = "threadName" 
              placeholder = "Name of thread" 
              onChange={handleThreadNameChange} 
              value={threadName}
            /><br />
            <input 
              className = "boardPassword" 
              type = "password" 
              name = "password" 
              placeholder = "Password" 
              onChange={handlePasswordChange} 
              value={password}
            /><br />
            <input 
              type = "submit" 
              value = "Create Thread" 
            />
          </form>
        </div>
      )
}


export default CreateThread