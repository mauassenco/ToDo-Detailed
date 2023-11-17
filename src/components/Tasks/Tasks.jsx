import Task from "../Task/Task";

const Tasks = ({ tasks, handleTaskCompleted, handleTaskRemove }) => {
  return (
    <div>
      {tasks.map((task) => (
        <Task
          key={task.id}
          task={task}
          handleTaskCompleted={handleTaskCompleted}
          handleTaskRemove={handleTaskRemove}
        />
      ))}
    </div>
  );
};

export default Tasks;
