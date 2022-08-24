import React, { useEffect } from "react";
import WorkoutDetail from "../components/WorkoutDetail";
import WorkoutForm from "../components/WorkoutForm";

//importing useWorkoutContext
import { useWorkoutsontext } from "./../hooks/useWorkoutsContext";

const Home = () => {
  // const [workouts, setWorkouts] = useState([]);

  const { workouts, loading, dispatch } = useWorkoutsontext();

  //const [loading, setloading] = useState(true);

  useEffect(() => {
    const fetchWorkouts = async () => {
      // before proxy set up :
      //const response = await fetch("http://localhost:4000/api/workouts");
      //after proxy :
      const response = await fetch("/api/workouts");
      const data = await response.json();

      if (response.ok) {
        dispatch({ type: "SET_WORKOUTS", payload: data });
      }
    };

    fetchWorkouts();
  }, [dispatch]);

  return (
    <div className="home">
      {loading && <p>...Loading</p>}
      <div className="workouts">
        {workouts &&
          workouts.map((workout) => {
            const { _id } = workout;
            return <WorkoutDetail key={_id} {...workout} />;
          })}
      </div>
      <WorkoutForm />
    </div>
  );
};

export default Home;
