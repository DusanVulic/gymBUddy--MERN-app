import { createContext, useReducer } from "react";

const WorkoutsContext = createContext();

export const workoutsReducer = (state, action) => {
  if (action.type === "SET_WORKOUTS") {
    return { workouts: action.payload, loading: false };
  }

  if (action.type === "CREATE_WORKOUT") {
    return { workouts: [action.payload, ...state.workouts], loading: false };
  }

  if (action.type === "DELETE_WORKOUT") {
    return {
      workouts: state.workouts.filter(
        (workout) => workout._id !== action.payload._id
      ),
      loading: false,
    };
  }
  return state;
};

const WorkoutsContextProvider = ({ children }) => {
  const initialState = {
    workouts: null,
    loading: true,
  };

  const [state, dispatch] = useReducer(workoutsReducer, initialState);

  return (
    <WorkoutsContext.Provider value={{ ...state, dispatch }}>
      {children}
    </WorkoutsContext.Provider>
  );
};

export { WorkoutsContext, WorkoutsContextProvider };
