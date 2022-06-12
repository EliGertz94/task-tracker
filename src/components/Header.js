import React from "react";
import Button from "./Button";

const Header = ({ show, showState }) => {
  return (
    <header className="header">
      <Button
        text={!showState?"Add Task":"close"}
        Boolean={showState}
        onClick={() => show(!showState)}
        
      /> 
  
      <h3 style={{alignitems: 'center'}}>Tasks To Do!</h3>
    </header>
  ); 
};

export default Header;
