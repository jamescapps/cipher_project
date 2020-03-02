import React from 'react'
import '../App.css'

const ThankYou = () => {
    return (
        <div className = "outer">
            <div className= "thankyou">
                <h1>Your message has been sent.</h1>
                <form action="/create">
                    <input 
                    type = "submit" 
                    value = "Create" 
                    />
                </form>
            </div>
        </div>
    )
}

export default ThankYou