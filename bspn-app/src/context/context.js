import { createContext, useEffect, useReducer } from "react";
import Reducer from "./reducer";

const initial_state = {
  user: JSON.parse(localStorage.getItem("user")) || null,
  isFetching: false,
  error: false,
};

export const Context = createContext(initial_state);

export const ContextProvider = ({ children }) => {
  const [state, dispatch] = useReducer(Reducer, initial_state);

  useEffect(() => {
    localStorage.setItem("user", JSON.stringify(state.user));
  }, [state.user]);

  return (
    <Context.Provider
      value={{
        user: state.user,
        isFetching: state.isFetching,
        error: state.error,
        dispatch,
      }}
    >
      {children}
    </Context.Provider>
  );
};
