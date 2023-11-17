import "./Task.css";
import { CgClose, CgInfo } from "react-icons/cg";
import { useNavigate } from "react-router-dom";

const Task = ({ task, handleTaskCompleted, handleTaskRemove }) => {
  const navigate = useNavigate();

  const handleTaskDetailsClick = () => {
    navigate(`/${task.title}`);
  };

  return (
    <div
      className="task-container"
      style={task.completed ? { borderLeft: "6px solid chartreuse" } : {}}
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
        <button className="detail-task-btn" onClick={handleTaskDetailsClick}>
          <CgInfo />
        </button>
      </div>
    </div>
  );
};

export default Task;
