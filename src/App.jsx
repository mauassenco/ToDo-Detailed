import { useState, useEffect } from "react";
import { v4 as uuidv4 } from "uuid";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import axios from "axios";

import "./App.css";

import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";
import Header from "./components/Header/Header";
import TaskDetails from "./components/TaskDetails/TaskDetails";

function App() {
  const [tasks, setTasks] = useState([
    {
      id: "1",
      title: "Task A",
      completed: false,
    },
    {
      id: "2",
      title: "Task B",
      completed: true,
    },
    {
      id: "3",
      title: "Task C",
      completed: false,
    },
  ]);

  const handleTaskAddition = (taskTitle) => {
    if (taskTitle.length > 0) {
      const newTasks = [
        ...tasks,
        {
          id: uuidv4,
          title: taskTitle,
          completed: false,
        },
      ];
      setTasks(newTasks);
    }
  };

  const handleTaskCompleted = (taskId) => {
    const newTasks = tasks.map((task) => {
      if (task.id === taskId) {
        return {
          ...task,
          completed: !task.completed,
        };
      }
      return task;
    });

    setTasks(newTasks);
  };

  const handleTaskRemove = (taskId) => {
    const newTasks = tasks.filter((task) => task.id !== taskId);
    setTasks(newTasks);
  };

  return (
    <Router>
      <div className="container">
        <Header headerTitle="My tasks" />
        <Routes>
          <Route
            path="/"
            exact
            element={
              <>
                <AddTask handleTaskAddition={handleTaskAddition} />
                <Tasks
                  tasks={tasks}
                  handleTaskCompleted={handleTaskCompleted}
                  handleTaskRemove={handleTaskRemove}
                />
              </>
            }
          />
          <Route path="/:taskTitle" exact element={<TaskDetails />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
