import React from "react";
import Button from "./Button";
import Switch from "./Switch";

const Header = ({ show, showState, dateUpdate,currentDay ,darkMode,darkModeHandler }) => {

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
    <Switch isOn={darkMode} handelToggle={darkModeHandler}/>
    </header>
  ); 
};

export default Header;
