import React from "react";

const Switch = ({ isOn, handelToggle }) => {
  console.log(isOn);
  const darkModeHandler = () => {
    handelToggle(!isOn);
    // add to app.js 
    //change the json darkmode 
  };
  return (
    <div>
      <input
        checked={isOn}
        onChange={darkModeHandler}
        className="react-switch-checkbox"
        id={`react-switch-new`}
        type="checkbox"
      />
      <label
        style={{ background: isOn && "#DF9843" }}
        className="react-switch-label"
        htmlFor={`react-switch-new`}
      >
        <span className={`react-switch-button`} />
      </label>
    </div>
  );
};

export default Switch;
