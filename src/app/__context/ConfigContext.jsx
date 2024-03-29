"use client";

import {
  useContext,
  createContext,
  useMemo,
  useReducer,
  useEffect,
} from "react";

export const SET_USER = "SET_USER";

export const initialState = {
  is_active: false,
  session: null,
};

const reducer = (state, action) => {
  switch (action.type) {
    case SET_USER:
      return { ...state };
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

  useEffect(() => {
    if (state?.session?.user) {
      window?.posthog?.identify(state.session.user.email, state.session.user);
    } else {
      window?.posthog?.reset();
    }
  }, [state.session]);

  return (
    <ConfigContext.Provider value={value}>{children}</ConfigContext.Provider>
  );
};

function useConfig() {
  return useContext(ConfigContext);
}

export { ConfigProvider, useConfig };
