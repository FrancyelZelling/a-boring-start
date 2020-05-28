import React from "react";
import { ItemInterface } from "../context/AppContext/appContext";

interface Props {
  item: ItemInterface;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <li>
      {item.name}: {item.link}
    </li>
  );
};

export default ListItem;
