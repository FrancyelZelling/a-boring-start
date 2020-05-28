import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { ADD_ITEM } from "../types";

import AppReducer from "./appReducer";

export interface ContextInterface {
  list: CategoryInterface[];
  addItem?(item: ItemInterface, category: string): void;
}

export interface CategoryInterface {
  name: string;
  items: ItemInterface[];
}

export interface ItemInterface {
  name: string;
  link: string;
  category?: string;
  color?: string;
}

interface Props {
  children: ReactNode;
}

/**
 * Initializing Context
 */
const AppContext = createContext<ContextInterface>({
  list: [],
});

/**
 * Initializing Provider
 */

export function AppContextProvider(props: Props) {
  const { children } = props;

  const initialState: ContextInterface = {
    list: [
      {
        name: "fun",
        items: [{ name: "Youtube", link: "https://www.youtube.com" }],
      },
    ],
  };

  const [state, dispatch] = useReducer(AppReducer, initialState);

  const addItem = (item: ItemInterface, category: string) => {
    dispatch({ type: ADD_ITEM, payload: { category, item } });
  };

  return (
    <AppContext.Provider value={{ list: state.list, addItem }}>
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

/**
 * Initializing Hooks for ease of use in our code
 */
export function useAppContext() {
  const context = useContext(AppContext);

  if (typeof context === undefined) {
    throw new Error("AppContext not initialized");
  }

  return context;
}
