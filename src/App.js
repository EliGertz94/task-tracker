import React from "react";
import Header from "./components/Header";
import Tasks from "./components/Tasks";
import AboutPage from "./pages/AboutPage";
import "./App.css";
import { useState, useEffect } from "react";
import AddTask from "./components/AddTask";
import DateSelector from "./components/DateSelector";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";

const App = () => {
  const [showForm, setShowForm] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const [tasks, setTasksList] = useState([]);

  const current = new Date();

  const date =
    current.getFullYear() +
    "-" +
    String(current.getMonth() + 1).padStart(2, "0") +
    "-" +
    String(current.getDate()).padStart(2, "0");

  const [selectedDay, setSelectedDate] = useState(date);
  console.log(tasks);

  const setYear = async (year) => {
    setSelectedDate(year);

    const allTasks = await fetchTasks();

    setTasksList(allTasks.filter((task) => task.day === year));
  };

  useEffect(() => {
    const getTasks = async () => {
      const darkModeStatus = await fetchSettings();

      setYear(selectedDay);
      setDarkMode(darkModeStatus.darkMode);
    };

    getTasks();
  }, []);

  const fetchTasks = async () => {
    const res = await fetch("http://localhost:5000/tasks");
    const data = await res.json();
    console.log(data);
    return data;
  };

  const fetchSettings = async () => {
    const res = await fetch("http://localhost:5000/settings/1");
    const data = await res.json();
    return data;
  };

  const setSettings = async () => {
    const taskToToggle = await fetchSettings();
    console.log(taskToToggle, " set settings");
    const updTask = { darkMode: !taskToToggle.darkMode };

    const res = await fetch("http://localhost:5000/settings/1", {
      method: "PUT",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(updTask),
    });

    const data = await res.json();

    console.log();
    setDarkMode(data.darkMode);
  };

  const fetchTask = async (id) => {
    const res = await fetch(`http://localhost:5000/tasks/${id}`);
    const data = await res.json();

    return data;
  };

  //delete task
  const deleteTask = async (id, text) => {
    if (
      window.confirm(`Are you sure you want to Delete that Task:  ${text} ?  `)
    ) {
      await fetch(`http://localhost:5000/tasks/${id}`, { method: "DELETE" });
      setTasksList(tasks.filter((task) => task.id !== id));
    }
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

    setYear(selectedDay);
  };

  return (
    <Router>
      <div className={darkMode ? `container-darkmode` : `container`}>
        <Routes>
          <Route
            exact
            path="/"
            element={
              <div>
                <Header
                  show={setShowForm}
                  showState={showForm}
                  dateUpdate={setSelectedDate}
                  currentDay={date}
                  darkMode={darkMode}
                />
                {!showForm && (
                  <DateSelector selectedYear={selectedDay} setDate={setYear} />
                )}
                {showForm && (
                  <AddTask addT={addTask} currentDay={selectedDay} />
                )}
                {tasks.length !== 0 ? (
                  <h3>
                    {" "}
                    {tasks.filter((task) => task.reminder === true).length} Task
                    To Go Today! Yes You Can ! :){" "}
                  </h3>
                ) : (
                  ""
                )}

                {tasks.length !== 0 ? (
                  <Tasks
                    tasks={tasks}
                    onDelete={deleteTask}
                    onToggle={toggleReminder}
                    darkMode={darkMode}
                  />
                ) : (
                  <h3 className="header form-control-check">
                    No Tasks To Today? :0
                  </h3>
                )}
              </div>
            }
          ></Route>

          <Route
            path="/about"
            element={
              <AboutPage darkMode={darkMode} darkModeHandler={setSettings} />
            }
          />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
