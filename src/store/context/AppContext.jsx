import React, { createContext, useContext, useReducer } from "react";
import { reducer } from "../reducer/Reducer";

const Context = createContext();
const initalState = {
  name: "chika",
};

const AppContext = ({ children }) => {
  const [state, dispatch] = useReducer(reducer, initalState);

  return <Context.Provider value={{ ...state }}>{children}</Context.Provider>;
};

export const Store = () => useContext(Context);

export default AppContext;
