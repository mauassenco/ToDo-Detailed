import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";

const Task = ({ task, handleTaskCompleted, handleTaskRemove }) => {
  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
      // onClick={() => handleTaskRemove(task.id)}
    >
      <div className="task-title" onClick={() => handleTaskCompleted(task.id)}>
        {task.title}
      </div>
      <div
        className="buttons-container"
        onClick={() => handleTaskRemove(task.id)}
      >
        <button className="remove-task-btn">
          <CgClose />
        </button>
        <button className="detail-task-btn">
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
