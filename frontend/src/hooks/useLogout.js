import { useWorkoutsontext } from "./useAuthContext";

export const useLogout = () => {
    const { dispatch } = useWorkoutsontext();
    const logout = () => {
        //remove user from storage
        localStorage.removeItem("user");

        // dispatch logout function

        dispatch({ type: "LOGOUT" });
    };
    return logout;
};