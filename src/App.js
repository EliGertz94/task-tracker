import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState } from "react";
import AddTask from "./components/AddTask";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasksList] = useState([
    {
      id: 1,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30",
      reminder: false,
    },
    {
      id: 2,
      text: "Football",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: "eating cake",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 4,
      text: "Doctors Appointment",
      day: "Feb 5th at 2:30",
      reminder: true,
    },
  ]);

  //delete task
  const deleteTask = (id) => {
    setTasksList(tasks.filter((task) => task.id !== id));
  };

  //toToggele
  const toggelReminder = (id) => {
    console.log(id);
    setTasksList(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: !task.reminder } : task
      )
    );
  };

  //add Task
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1;
    const newTask = { id, ...task };
    setTasksList([newTask, ...tasks]);
  };

  return (
    <div className="container">
      <Header show={setShowForm} showState={showForm} />
      {showForm && <AddTask addT={addTask} />}
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggelReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
