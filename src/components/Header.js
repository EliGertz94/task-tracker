import React from "react";
import Button from "./Button";
import SettingsIcon from "./SettingsIcon";

const Header = ({ show, showState, dateUpdate,currentDay,darkMode  }) => {

  const buttonFunction=()=>{
    show(!showState)
    dateUpdate(currentDay)
  }
  return (
    <header className="header">
      <Button
        text={!showState?"Add Task":"close"}
        Boolean={showState}
        onClick={() => buttonFunction()}
      /> 
   
  
    <SettingsIcon darkMode={darkMode}/>
    </header>
  ); 
};

export default Header;
