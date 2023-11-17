import React from "react";
import Button from "../Button/Button";
import { useParams, useNavigate } from "react-router-dom";

import "./TaskDetails.css";

const TaskDetails = () => {
  const params = useParams();

  const navigate = useNavigate();

  return (
    <>
      <div className="back-button-container">
        <Button onClick={() => navigate(-1)}>Return</Button>
      </div>
      <div className="task-details-container">
        <h2>{params.taskTitle}</h2>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          placeat explicabo quas aut saepe nulla!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
