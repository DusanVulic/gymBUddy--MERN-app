import React, { useEffect, useState } from "react";
import WorkoutDetail from "../components/WorkoutDetail";

const Home = () => {
  const [workouts, setWorkouts] = useState([]);

  useEffect(() => {
    const fetchWorkouts = async () => {
      // before proxy set up :
      //const response = await fetch("http://localhost:4000/api/workouts");
      //after proxy :
      const response = await fetch("/api/workouts");
      const data = await response.json();

      if (response.ok) {
        setWorkouts(data);
      }
    };

    fetchWorkouts();
  }, []);

  return (
    <div className="home">
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            const { _id } = workout;
            return <WorkoutDetail key={_id} {...workout} />;
          })}
      </div>
    </div>
  );
};

export default Home;
