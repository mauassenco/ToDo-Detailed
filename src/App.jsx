import { useState } from "react";
import "./App.css";
import Tasks from "./components/Tasks/Tasks";
import AddTask from "./components/AddTask/AddTask";

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

  return (
    <div className="container">
      <AddTask/>
      <Tasks tasks={tasks}/>      
    </div>
  );
}

export default App;
