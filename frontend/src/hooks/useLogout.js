//import aut context
import { useAuthContext } from "./useAuthContext";
//import use workouts

import { useWorkoutsontext } from "./useWorkoutsContext";

export const useLogout = () => {
    const { dispatch } = useAuthContext();

    const { dispatch: workoutsDispatch } = useWorkoutsontext();

    const logout = () => {
        //remove user from storage

        localStorage.removeItem("user");

        //dispatch logout

        dispatch({ type: "LOGOUT" });
        workoutsDispatch({ type: "SET_WORKOUTS", payload: null });
    };

    return { logout };
};