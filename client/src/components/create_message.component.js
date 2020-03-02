import React, { useState } from 'react'
import '../App.css'
import Popup from 'reactjs-popup'

const CreateMessage = () => {
  const [message, setMessage] = useState('')
  const [password1, setPassword1] = useState('')
  const [password2, setPassword2] = useState('')
  const [password3, setPassword3] = useState('')
  const [result, setResult] = useState('Your encrypted message will show here.  It will self-destruct after 1 hour or after it has been viewed.')
  const [email, setEmail] = useState('')
  const [sendRes, setSendRes] = useState('')

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

  const handleEmailChange = (e) => {
    setEmail(e.target.value)
  }

  const handleSendPassword = (e) => {
    setPassword3(e.target.value)
  }

  const onShare = (e) => {
    e.preventDefault()
  }

  const onSend = (e) => {
    e.preventDefault()
    fetch('http://localhost:4000/share_message/share', {
            method: 'POST',
            headers: {
              Accept: 'application/json',
              'Content-Type': 'application/json',
            },
            body: JSON.stringify({
              result: result,
              email: email,
              password2: password2,
              password3: password3
            })
        }).then((response) => {
            return response.json()
        }).then((data) => {
            setSendRes(data)
            if (data === 'Sending....') {
              setTimeout(function(){
                window.location.href = 'http://localhost:3000/thankyou'
              }, 1000)
       
            }
        })
  }
  
      return (
        <div className="createOuter">
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
                autoComplete="off"
              /><br />
              <input 
                className = "password1" 
                type = "password" 
                name = "password1" 
                placeholder = "Password" 
                onChange={handlePassword1Change} 
                value={password1}
                autoComplete="off"
              /><br />
              <input 
                className = "password2" 
                type = "password" 
                name = "password2" 
                placeholder = "Password" 
                onChange={handlePassword2Change} 
                value={password2}
                autoComplete="off"
              /><br />
              <input 
                type = "submit" 
                value = "Create" 
              />
            </form><br />
            <h3>{result}</h3>
          </div><br />
          <div className="decode">
            <form target="_blank" action="http://localhost:3000/decode">
                <input 
                  type = "submit" 
                  value = "Decode" 
                />
              </form>
          </div>
          <br />
          <div className="share">
            <h3>For added security share encrypted message and password in two seperate forms of communication.</h3><br />
            <Popup trigger={
              <form onSubmit={onShare}>
                  <input 
                      type = "submit" 
                      value = "Share" 
                  />
              </form>
              } modal>
              {close => (
                <div className="modal">
                  <button className="close" onClick={close}>
                    &times;
                  </button>
                  <div className="header"> Share Encrypted Message </div>
                  <div className="content">
                    {" "}
                    Enter the email address of the person you would like to share this message with.  They will have 1 hour to view it before it self-destructs.
                    <br /><br />
                    <form onSubmit={onSend}>
                        <input 
                          className = "email" 
                          type = "text" 
                          name = "email" 
                          placeholder = "Email" 
                          onChange={handleEmailChange} 
                          value={email}
                          autoComplete="off"
                        /><br />
                        <input 
                          className = "password3" 
                          type = "password" 
                          name = "password3" 
                          placeholder = "Password (Optional)" 
                          onChange={handleSendPassword} 
                          value={password3}
                          autoComplete="off"
                        /><br />
                        <br />
                        It is advised to share the password in an alternate form of communication so that message and password are not bundled together.<br />
                        <br />
                        {sendRes}
                        <br />
                        <input 
                          type = "submit" 
                          value = "Send" 
                        />
                      </form>
                  </div>
                </div>
              )}
            </Popup>
            <br />
          </div>
        </div>
      )
}

export default CreateMessage