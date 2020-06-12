import React from "react";
import { useAppContext } from "../context/AppContext/appContext";

import AddItem from "./AddItem";
import ListItem from "./ListItem";

const List: React.FC = () => {
  const { list, openModal, setEditItem } = useAppContext();

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

            <button onClick={() => handleItemEdit(item.name)}>+</button>
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
