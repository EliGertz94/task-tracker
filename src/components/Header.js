import React from 'react'
import { useState } from 'react'
import Button from './Button'

const Header = () => {


        const [bool, setBool] = useState(true)

       
    

        const onclick = ()=>{
           // setTask("new task")
            if (bool) {
    
                setBool(false)
            } else {
                setBool(true)
            }
        }

        
    return (

        <header className='header'>
            <Button text='click' Boolean={bool} onClick={onclick}/>
            <h4>task</h4>
        </header>
    )
}




export default Header