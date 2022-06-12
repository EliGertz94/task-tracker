import React from "react";
import { FaTimes } from "react-icons/fa";
export const Task = ({ task, onDelete, onToggle }) => {
  return (
    <div
      className={`task ${task.reminder && "reminder"}`}
      onDoubleClick={() => onToggle(task.id)}
    >
     
      <div onClick={() => onToggle(task.id)}>
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
          onClick={() => onDelete(task.id)}
        />
      </h3>
    </div>
  );
};

export default Task;
