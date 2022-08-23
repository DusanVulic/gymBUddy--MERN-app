import React from "react";

const WorkoutDetail = ({ _id, title, load, reps, createdAt }) => {
  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong> load(kg):</strong> {load}
      </p>
      <p>
        <strong> reps :</strong> {reps}
      </p>
      <p>{createdAt}</p>
    </div>
  );
};

export default WorkoutDetail;
