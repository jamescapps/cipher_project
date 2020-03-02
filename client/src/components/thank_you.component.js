import React from 'react'
import '../App.css'

const ThankYou = () => {
    return (
        <div className = "outer">
            <div className= "thankyou">
                <h1>Your message has been sent.</h1>
                <form action="http://localhost:3000/create">
                    <input 
                    type = "submit" 
                    value = "Create Another" 
                    />
                </form>
            </div>
        </div>
    )
}

export default ThankYou