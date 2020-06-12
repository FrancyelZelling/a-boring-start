import React from "react";
import { Link } from "react-router-dom";
import { ItemInterface } from "../context/AppContext/appContext";

interface Props {
  item: ItemInterface;
}

const ListItem: React.FC<Props> = ({ item }) => {
  return (
    <li className="list-item" style={{ borderColor: item.color }}>
      <a href={item.link}>{item.name}</a>
    </li>
  );
};

export default ListItem;
