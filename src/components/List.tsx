import React from "react";
import ListItem from "./ListItem";
import { useAppContext } from "../context/AppContext/appContext";

const List: React.FC = () => {
  const { list } = useAppContext();

  return (
    <React.Fragment>
      {list.map((item) => (
        <ul key={item.name}>
          <p>{item.name}</p>
          {item.items.map((item) => (
            <ListItem key={item.name} item={item} />
          ))}
        </ul>
      ))}
    </React.Fragment>
  );
};

export default List;
