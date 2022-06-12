import React from 'react'


const Button = ({text ,onClick,Boolean}) => {

   
    
    return (
        <div>
            <button className='btn'  onClick={onClick}
                style={{ backgroundColor: Boolean ? 'red' : 'green' }}>
                {text} </button>

        </div>
    )


}



export default Button