import React from "react";
import { ItemInterface } from "../context/AppContext/appContext";

interface Props {
  item: ItemInterface;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
      <a href={item.link}>{item.name}</a>
    </li>
  );
};

export default ListItem;
