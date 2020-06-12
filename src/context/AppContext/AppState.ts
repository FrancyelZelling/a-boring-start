import { v4 } from "uuid";
import { StateInterface } from "./appContext";
const initialState: StateInterface = {
  list: [
    {
      id: v4(),
      name: "Fun",
      items: [
        { id: v4(), name: "youtube.com", link: "http://www.youtube.com" },
      ],
    },
  ],
  modalIsOpen: false,
  listToEdit: null,
};
export default initialState;
