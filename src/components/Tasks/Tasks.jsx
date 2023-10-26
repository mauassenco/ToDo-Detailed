import Task from "../Task/Task";

const Tasks = ({ tasks }) => {
  return (
    <div>
      <h1>TASKS</h1>
      {tasks.map((task) => (
        <Task task={task}/>
      ))}
    </div>
  );
};

export default Tasks;
