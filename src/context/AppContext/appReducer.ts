import { ADD_ITEM } from "../types";
import { ItemInterface, StateInterface } from "./appContext";

export interface ActionInterface {
  type: string;
  payload: {
    item: ItemInterface;
    category?: string;
  };
}

export default (state: StateInterface, action: ActionInterface) => {
  switch (action.type) {
    case ADD_ITEM:
      state.list.filter((item) => item.items.push(action.payload?.item));
      return {
        ...state,
        list: [...state.list],
      };
    default:
      return state;
  }
};
