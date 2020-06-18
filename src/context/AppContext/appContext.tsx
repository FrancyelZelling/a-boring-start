import React, { createContext, ReactNode, useContext, useReducer } from "react";
import {
  ADD_ITEM,
  EDIT_ITEM,
  OPEN_MODAL,
  CLOSE_MODAL,
  SET_EDIT_ITEM,
  SAVE_ITEMS,
  LOAD_ITEMS,
  ADD_LIST,
  REMOVE_LIST,
  REMOVE_ITEM,
} from "../types";

import InitialState from "./AppState";
import AppReducer from "./appReducer";

export interface ContextInterface {
  list: CategoryInterface[];
  modalIsOpen: boolean;
  listToEdit: string | null;
  addItem: (item: ItemInterface, category: string) => void;
  editItem: (item: ItemInterface, category: string) => void;
  removeItem: (item: ItemInterface, category: string) => void;
  openModal: () => void;
  closeModal: () => void;
  setEditItem: (itemName: string) => void;
  saveItems: () => void;
  loadItems: () => void;
  addList: (listName: string) => void;
  removeList: (listName: string) => void;
}

export interface StateInterface {
  list: CategoryInterface[];
  modalIsOpen: boolean;
  listToEdit: string | null;
}

export interface CategoryInterface {
  id: string;
  name: string;
  items: ItemInterface[];
}

export interface ItemInterface {
  id: string;
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

export function AppContextProvider(props: Props) {
  const { children } = props;

  const [state, dispatch] = useReducer(AppReducer, InitialState);

  const addItem = (item: ItemInterface, category: string) => {
    dispatch({ type: ADD_ITEM, payload: { category, item } });
    dispatch({ type: SAVE_ITEMS, payload: {} });
  };
  
  const editItem = (item: ItemInterface, category: string) => {
    dispatch({ type: EDIT_ITEM, payload: { category, item } });
    dispatch({ type: SAVE_ITEMS, payload: {} });
  };
  
  const removeItem = (item: ItemInterface, category: string) => {
    dispatch({ type: REMOVE_ITEM, payload: { item, category } });
    dispatch({ type: SAVE_ITEMS, payload: {} });
  };

  const addList = (listName: string) => {
    dispatch({ type: ADD_LIST, payload: { listName } });
  };

  const removeList = (listName: string) => {
    dispatch({ type: REMOVE_LIST, payload: { listName } });
  };

  const openModal = () => {
    dispatch({ type: OPEN_MODAL, payload: {} });
  };

  const closeModal = () => {
    dispatch({ type: CLOSE_MODAL, payload: {} });
  };

  const setEditItem = (itemName: string) => {
    dispatch({ type: SET_EDIT_ITEM, payload: { category: itemName } });
  };

  const saveItems = () => {
    dispatch({ type: SAVE_ITEMS, payload: {} });
  };

  const loadItems = () => {
    dispatch({ type: LOAD_ITEMS, payload: {} });
  };
  
  return (
    <AppContext.Provider
      value={{
        list: state.list,
        modalIsOpen: state.modalIsOpen,
        listToEdit: state.listToEdit,
        addItem,
        editItem,
        removeItem,
        addList,
        removeList,
        openModal,
        closeModal,
        setEditItem,
        saveItems,
        loadItems,
      }}
    >
      {children}
    </AppContext.Provider>
  );
}

export default AppContext;

/**
 * Initializing Hooks for ease of use
 */
export function useAppContext() {
  return useContext(AppContext)!;
}
