import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import "./App.css";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import DateSelector from "./components/DateSelector";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [tasks, setTasksList] = useState([]);
  const [selectedDay, setSelectedDate] = useState("");


  const setYear= async(year)=>{
    setSelectedDate(year)

    const allTasks = await fetchTasks();

  


    setTasksList(allTasks.filter((task) => task.day === year));

  }

  useEffect(() => {
    const getTasks = async () => {
      const tasksFromServer = await fetchTasks();
      setTasksList(tasksFromServer);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();

    return data;
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //delete task
  const deleteTask = async (id) => {
    await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });

    setTasksList(tasks.filter((task) => task.id !== id));
  };

  // Toggle Reminder
  const toggleReminder = async (id) => {
    const taskToToggle = await fetchTask(id);
    const updTask = { ...taskToToggle, reminder: !taskToToggle.reminder };

    const res = await fetch(`http://localhost:5000/tasks/${id}`, {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();
    console.log(data)

    setTasksList(
      tasks.map((task) =>
        task.id === id ? { ...task, reminder: data.reminder } : task
      )
    );
  };

  //add Task
  const addTask = async (task) => {
    const res = await fetch("http://localhost:5000/tasks", {
      method: "POST",
      headers: { "content-type": "application/json" },
      body: JSON.stringify(task),
    });

    const data = await res.json();

    setTasksList([data,...tasks]);

    //const id = Math.floor(Math.random() * 10000) + 1;
    //const newTask = { id, ...task };
    //setTasksList([newTask, ...tasks])
  };

  return (
    <div className="container">
      <Header show={setShowForm} showState={showForm} />
      {showForm && <DateSelector selectedYear={selectedDay} setDate= {setYear}/>}
      {showForm && <AddTask addT={addTask} />}
      {tasks.length !== 0 ? (
        <Tasks tasks={tasks} onDelete={deleteTask} onToggle={toggleReminder} />
      ) : (
        "No Tasks To Show"
      )}
    </div>
  );
};

export default App;
