
import React from 'react';
import Header from './components/Header';
import Tasks from './components/Tasks';
import "./App.css"
import { useState } from 'react'


const App = () => {
  const [tasks, setTasksList] = useState([

    {
      id: 1,
      text: 'Doctors Appointment',
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 2,
      text: 'Football',
      day: "Feb 5th at 2:30",
      reminder: true,
    },
    {
      id: 3,
      text: 'eating cake',
      day: "Feb 5th at 2:30",
      reminder: true,
    }, {
      id: 4,
      text: 'Doctors Appointment',
      day: "Feb 5th at 2:30",
      reminder: true,
    },]
  )

  //delete task
  const deleteTask = () => {

    console.log("id")

  }

  return (
    <div className='container'>
      <Header />
      <Tasks tasks={tasks} onDelete={deleteTask} />
    </div>
  );

}

export default App;
