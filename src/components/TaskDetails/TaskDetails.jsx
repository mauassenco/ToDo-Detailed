import React from "react";
import Button from "../Button/Button";
import { useParams } from "react-router-dom";

const TaskDetails = () => {
  const params = useParams();

  return (
    <>
      <div className="back-button-container">
        <Button>Return</Button>
      </div>
      <div className="task-details-container">
        <p></p>
        <p>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Delectus
          placeat explicabo quas aut saepe nulla!
        </p>
      </div>
    </>
  );
};

export default TaskDetails;
