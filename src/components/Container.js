import React from "react";


const Container = (props,{ Click,onToggle}) => {
  return (
  <div onClick={Click}>{props.children}</div>
  );
};

export default Container;