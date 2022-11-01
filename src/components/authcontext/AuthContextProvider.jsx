import React from "react";



import { createContext, useReducer } from "react";
import reducer from "./reducer";

let initialState = {
  isAuth: false,
  token: null,
  isError: false,
  isLoading: false,
  data: [],
  isDataLoading: false,
};

export let AppContext = createContext();

function AppContextProvider({ children }) {
  let [state, dispatch] = useReducer(reducer, initialState);

  return (
    <AppContext.Provider value={{ state, dispatch }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContextProvider;