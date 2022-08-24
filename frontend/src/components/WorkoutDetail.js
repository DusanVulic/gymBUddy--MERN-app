import React from "react";

// date fns
import formatDistanceToNow from "date-fns/formatDistanceToNow";

import { useWorkoutsontext } from "./../hooks/useWorkoutsContext";

const WorkoutDetail = ({ _id, title, load, reps, createdAt }) => {
  const { dispatch } = useWorkoutsontext();

  const handleDelete = async () => {
    const response = await fetch("/api/workouts/" + _id, { method: "DELETE" });

    const json = await response.json();

    if (response.ok) {
      dispatch({ type: "DELETE_WORKOUT", payload: json });
    }
  };

  return (
    <div className="workout-details">
      <h4>{title}</h4>
      <p>
        <strong> load(kg):</strong> {load}
      </p>
      <p>
        <strong> reps :</strong> {reps}
      </p>
      <p>{formatDistanceToNow(new Date(createdAt), { addSuffix: true })}</p>
      <span className="material-symbols-outlined" onClick={handleDelete}>
        delete
      </span>
    </div>
  );
};

export default WorkoutDetail;
