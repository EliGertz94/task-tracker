import { createContext, useState } from "react";

const TaskContext = createContext();
const [tasks, setTasksList] = useState([]);
export const TaskProvider = ({ children }) => {
  return <TaskContext.Provider value={{
    tasks,

  }}>
      
      {children}
      
      </TaskContext.Provider>;
};
