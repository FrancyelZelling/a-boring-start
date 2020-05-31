import React from "react";
import ListItem from "./ListItem";
import { useAppContext } from "../context/AppContext/appContext";

const List: React.FC = () => {
  const { list } = useAppContext();

  return (
    <React.Fragment>
      {list.map((item) => (
        <ul className="list" key={item.name}>
          <p className="list-title">{item.name}</p>
          {item.items.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ul>
      ))}
    </React.Fragment>
  );
};

export default List;
