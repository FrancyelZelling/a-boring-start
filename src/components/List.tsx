import React from "react";
import { useAppContext } from "../context/AppContext/appContext";

import AddItem from "./AddItem";
import ListItem from "./ListItem";

const List: React.FC = () => {
  const { list, openModal, setEditItem, removeList } = useAppContext();

  const handleItemEdit = (itemName: string) => {
    openModal();
    setEditItem(itemName);
  };

  return (
    <React.Fragment>
      {list.map((item) => (
        <ul className="list" key={item.name}>
          <div className="list-title">
            <p>{item.name}</p>
            <div className="">
              <button onClick={() => handleItemEdit(item.name)}>+</button>
              <button
                onClick={() =>
                  window.confirm("Delete list?") && removeList(item.name)
                }
              >
                x
              </button>
            </div>
          </div>
          <AddItem listName={item.id} />
          {item.items.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ul>
      ))}
    </React.Fragment>
  );
};

export default List;
