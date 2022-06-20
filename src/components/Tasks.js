import React from "react";
import Task from "./Task";
import { motion, AnimatePresence } from "framer-motion";

const Tasks = ({ tasks, onDelete, onToggle, darkMode }) => {
  console.log(darkMode);
  return (
 
      <AnimatePresence  initial={false}>
        {tasks.map((task) => (
          <motion.div 
          key={task.id}
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          exit={{opacity: 0}} 
          >
         
              <Task
                 key={task.id}
                task={task}
                onDelete={onDelete}
                onToggle={onToggle}
                darkMode={darkMode}
              />
          
          </motion.div>
        ))}
      </AnimatePresence>
  
  );
};

export default Tasks;
