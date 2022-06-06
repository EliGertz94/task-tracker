import React from 'react'


const Button = ({text ,onClick,Boolean}) => {

   
    
    return (
        <div>
            <button className='btn'  onClick={onClick}
                style={{ backgroundColor: Boolean ? 'green' : 'red' }}>
                {text} </button>

        </div>
    )


}



export default Button