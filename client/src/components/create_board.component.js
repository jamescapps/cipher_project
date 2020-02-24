import React, { useState, useEffect } from 'react'
import '../App.css'

//Create a new board with password.
//Threads and replies are in code.

const CreateBoard = () => {
  const [boardName, setBoardName] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')

  const handleBoardNameChange = (e) => {
    setBoardName(e.target.value)
  }

  const handlePassword1Change = (e) => {
    setPassword1(e.target.value) 
  }

  const handlePassword2Change= (e) => {
    setPassword2(e.target.value)
  }

  const onSubmit =(e) => {
    e.preventDefault()
    const board = {
      boardName: boardName,
      password1: password1,
      password2: password2
    }
    console.log(board)
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
        <h1>Create A New Message Board</h1>
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
              className = "boardPassword1" 
              type = "password" 
              name = "password1" 
              placeholder = "Password" 
              onChange={handlePassword1Change} 
              value={password1}
            /><br />
            <input 
              className = "boardPassword2" 
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
        </div>
      )
}


export default CreateBoard