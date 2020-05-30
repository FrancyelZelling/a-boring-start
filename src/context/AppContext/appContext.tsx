import React, { createContext, ReactNode, useContext, useReducer } from "react";
import { ADD_ITEM } from "../types";

import AppReducer from "./appReducer";

export interface ContextInterface {
  list: CategoryInterface[];
  addItem: (item: ItemInterface, category: string) => void;
}

export interface StateInterface {
  list: CategoryInterface[];
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
const AppContext = createContext<ContextInterface | null>(null);

/**
 * Initializing Provider
 */

const initialState: StateInterface = {
  list: [
    {
      name: "fun",
      items: [{ name: "Youtube", link: "https://www.youtube.com" }],
    },
  ],
};

export function AppContextProvider(props: Props) {
  const { children } = props;

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
  return useContext(AppContext)!;
}
