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
      <div className="buttons-container">
        <button
          className="remove-task-btn"
          onClick={() => handleTaskRemove(task.id)}
        >
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
