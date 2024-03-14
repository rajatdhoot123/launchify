"use client";

import { useContext, createContext, useMemo, useReducer } from "react";

export const SET_USER = "SET_USER";

export const initialState = {
  is_active: false,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state, preferredLang: action.lang };
    default:
      return state;
  }
};

const ConfigContext = createContext({});

const ConfigProvider = ({ children, initialState }) => {
  const [state, dispatch] = useReducer(reducer, initialState);

  const value = useMemo(
    () => ({
      ...state,
      dispatch,
    }),
    [state]
  );

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

function useConfig() {
  return useContext(ConfigContext);
}

export { ConfigProvider, useConfig };
