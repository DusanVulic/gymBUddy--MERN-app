import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

export const useWorkoutsontext = () => {
    const context = useContext(AuthContext);

    if (!context) {
        throw Error(
            "USe workoutContext must be use inside WorkoutContextProvider "
        );
    }

    return context;
};