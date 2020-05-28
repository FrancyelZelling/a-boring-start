import React, { useState } from "react";
import { useAppContext, ItemInterface } from "../context/AppContext/appContext";

const AddItem = () => {
  const [item, setItem] = useState<ItemInterface>({
    name: "",
    link: "",
    color: "",
  });
  const { addItem } = useAppContext();

  /**
   * Using any as type because i dont know a proper interface
   * @param e is an htmlEvent
   */
  const onChange = (e: any) =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const onSubmit = (e: any) => {
    e.preventDefault();
    addItem!(item, "fun");
  };

  return (
    <form onSubmit={onSubmit}>
      <input
        onChange={onChange}
        type="text"
        name="name"
        id=""
        placeholder="Item Name..."
      />
      <input
        onChange={onChange}
        type="text"
        name="link"
        id=""
        placeholder="Item Link..."
      />
      <input
        onChange={onChange}
        type="text"
        name="color"
        id=""
        placeholder="Item Color(optional)..."
      />
      <button type="submit">Submit</button>
    </form>
  );
};

export default AddItem;
