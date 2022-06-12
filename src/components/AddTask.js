import React from "react";
import { useState } from "react";

const AddTask = ({ addT }) => {
  const [text, setText] = useState("");
  const [day, setDate] = useState("");
  const [reminder, setChecked] = useState(false);

  const onSubmit = (e) => {
    e.preventDefault();
    if (text.length === 0 || day.length === 0) {
      alert("please enter missing information ");
      return
    }


    console.log(day)
    addT({ text, day, reminder });

    setText("");
    setDate("");
    setChecked(false);
  };
  return (
    <form className="add-form" onSubmit={onSubmit}>
      <div className="form-control">
        <label>Task :</label>
        <input
          type="text"
          placeholder="Add Task"
          value={text}
          onChange={(e) => setText(e.target.value)}
        />
      </div>

      <div className="form-control">
        <label>Date :</label>
        <input
          type="date"
          
          value={day}
          onChange={(e) => setDate(e.target.value)}
        />
      </div>
      <div className="form-control form-control-check">
        <label>Reminder :</label>
        <input
          type="checkbox"
          value={reminder}
          onChange={(e) => setChecked(e.currentTarget.checked)}
          checked={reminder}
        />
      </div>
      <input type="submit" value="Add Task" className="btn btn-block" />
    </form>
  );
};

export default AddTask;
