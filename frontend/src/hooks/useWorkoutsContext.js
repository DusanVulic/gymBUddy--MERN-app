import { WorkoutsContext } from "../context/WorkoutsContext";
import { useContext } from "react";

export const useWorkoutsontext = () => {
    const context = useContext(WorkoutsContext);

    if (!context) {
        throw Error(
            "USe workoutContext must be use inside WorkoutContextProvider "
        );
    }

    return context;
};