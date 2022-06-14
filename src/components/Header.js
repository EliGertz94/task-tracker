import React from "react";
import Button from "./Button";

const Header = ({ show, showState }) => {
  return (
    <header className="header">
      <Button
        text={!showState?"Add Task or Search Day":"close"}
        Boolean={showState}
        onClick={() => show(!showState)}
        
      /> 
  
      <h3 style={{alignitems: 'center'}}>Tasks To Do Today!</h3>
    </header>
  ); 
};

export default Header;
