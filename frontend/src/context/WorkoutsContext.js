import { createContext } from "react";

const WorkoutsContext = createContext();

const WorkoutsContextProvider = ({ children }) => {
  return <WorkoutsContext.Provider>{children}</WorkoutsContext.Provider>;
};

export { WorkoutsContext, WorkoutsContextProvider };
