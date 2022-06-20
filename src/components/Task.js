import React from "react";
import { FaTimes } from "react-icons/fa";
export const Task = ({ task, onDelete, onToggle ,darkMode}) => {

  return (
    //add a state to the bool type 
    //add action to change state 
    <div
      className={(!darkMode)?`task ${task.reminder && "reminder"}`:`task-darkmode task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
     
      <div >
        <h3>{task.text} </h3>
        <p>{task.day}</p>
      </div>
      <h3>
        {" "}
        <FaTimes
          style={{
            color: "red",
            cursor: "pointer",
            display: "flex",
            alignitems: "center",
            justifycontent: "space-between",
          }}
          onClick={() => onDelete(task.id,task.text)}
        />
      </h3>
    </div>
  );
};

export default Task;
