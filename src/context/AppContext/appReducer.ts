import { v4 } from "uuid";
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
import { ItemInterface, StateInterface, CategoryInterface } from "./appContext";

export interface ActionInterface {
  type: string;
  payload: {
    item?: ItemInterface;
    listName?: string;
    category?: string;
  };
}

export default (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case ADD_ITEM:
      state.list.filter((item) => {
        console.log(item);
        if (item.name === action.payload.category) {
          action.payload.item!.id = v4();
          item.items.push(action.payload.item!);
        }
        return item;
      });
      return {
        ...state,
        list: [...state.list],
        modalIsOpen: false,
      };

    case EDIT_ITEM:
      state.list.filter((item) => {
        console.log(item);
        if (item.name === action.payload.category) {
          item.items.filter((listItem) => {
            const { item } = action.payload;
            if (listItem.id === action.payload.item!.id) {
              listItem.name = item!.name;
              listItem.link = item!.link;
              listItem.color = item!.color;
            }
            console.log(listItem);
            return listItem;
          });
        }
        console.log(item);
        return item;
      });
      return {
        ...state,
        list: [...state.list],
        modalIsOpen: false,
      };

    case REMOVE_ITEM:
      let filteredItems;
      let filteredList: CategoryInterface | undefined = undefined;
      let filteredState = state.list.filter((list) => {
        if (list.name === action.payload.category!) {
          filteredList = list;
          filteredItems = list.items.filter(
            (item) => item !== action.payload.item
          );
          filteredList.items = filteredItems;
          return list;
        } else {
          return list;
        }
      });

      console.table(filteredItems);
      console.table(filteredList);
      console.table(filteredState);
      return {
        ...state,
      };

    case ADD_LIST:
      const newList: CategoryInterface = {
        id: v4(),
        name: action.payload.listName!,
        items: [],
      };
      console.log(newList);
      return {
        ...state,
        list: [...state.list, newList],
      };

    case REMOVE_LIST:
      let filteredLists = state.list.filter(
        (list) => list && list.name !== action.payload.listName
      );
      console.log(filteredLists);
      return {
        ...state,
        list: filteredLists,
      };

    case OPEN_MODAL:
      return { ...state, modalIsOpen: true };

    case CLOSE_MODAL: {
      return { ...state, modalIsOpen: false, listToEdit: null };
    }

    case SET_EDIT_ITEM: {
      return { ...state, listToEdit: action.payload.category! };
    }

    case SAVE_ITEMS:
      const stringItems = JSON.stringify(state.list);
      localStorage.setItem("items", stringItems);
      return state;

    case LOAD_ITEMS:
      let localStorageItems;
      if (localStorage.getItem("items")) {
        localStorageItems = localStorage.getItem("items");
      } else {
        localStorageItems = JSON.stringify(state.list);
      }
      const parsedItems = JSON.parse(localStorageItems!);
      return { ...state, list: parsedItems };

    default:
      return state;
  }
};
