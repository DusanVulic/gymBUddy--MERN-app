import { useState } from "react";
import { useWorkoutsontext } from "./useAuthContext";

export const useSignup = () => {
    const [isError, SetIsError] = useState(null);
    const [isLoading, setIsLoading] = useState(null);

    const { dispatch } = useWorkoutsontext();

    const signup = async(email, password) => {
        setIsLoading(true);
        SetIsError(null);

        const response = await fetch("/api/user/signup", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ email, password }),
        });
        const json = await response.json();

        if (!response.ok) {
            setIsLoading(false);
            SetIsError(json.error);
        }
        if (response) {
            //save the user to local storage
            localStorage.setItem("user", JSON.stringify(json));

            //update auth context
            dispatch({ type: "LOGIN", payload: json });
            setIsLoading(false);
        }
    };

    return { signup, isLoading, isError };
};