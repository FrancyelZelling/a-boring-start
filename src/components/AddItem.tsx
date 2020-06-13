import React, { useState, ChangeEvent, useEffect } from "react";
import Modal from "react-modal";
import {
  useAppContext,
  ItemInterface,
  CategoryInterface,
} from "../context/AppContext/appContext";

interface Props {
  listName: string;
}

const AddItem = ({ listName }: Props) => {
  const [filteredList, setFielteredList] = useState<CategoryInterface[]>([
    {
      id: "",
      name: "",
      items: [],
    },
  ]);

  const [item, setItem] = useState<ItemInterface>({
    id: "",
    name: "",
    link: "",
    color: "",
  });

  const [editing, setEditing] = useState(false);

  const {
    addItem,
    editItem,
    removeItem,
    closeModal,
    listToEdit,
    modalIsOpen,
    list,
  } = useAppContext();

  useEffect(() => {
    const newList = list.filter((list) => list.name === listToEdit);
    console.log(newList);
    setFielteredList(newList);
  }, [listToEdit]);

  const setEditItem = (item: ItemInterface) => {
    setItem(item);
  };

  /**
   * @param e is an htmlEvent
   */
  const onChange = (e: ChangeEvent<HTMLInputElement>) =>
    setItem({ ...item, [e.target.name]: e.target.value });

  const handleEditItem = (item: ItemInterface) => {
    setEditing(true);
    setEditItem(item);
  };

  const onSubmit = (e: any) => {
    e.preventDefault();
    if (editing === true) {
      editItem(item, listToEdit!);
    } else {
      addItem(item, listToEdit!);
    }
    setEditing(false);
    setItem({ id: "", name: "", link: "", color: "" });
  };

  const handleCloseModal = () => {
    closeModal();
    setEditing(false);
    setItem({ id: "", name: "", link: "", color: "" });
  };

  Modal.setAppElement("#root");

  return (
    <Modal
      isOpen={modalIsOpen}
      onRequestClose={handleCloseModal}
      className={"modal addItemModal"}
    >
      <form onSubmit={onSubmit}>
        <h2>{listToEdit}</h2>
        <input
          onChange={onChange}
          type="text"
          name="name"
          value={item.name}
          id=""
          placeholder="Item Name..."
        />
        <input
          onChange={onChange}
          type="url"
          value={item.link}
          name="link"
          id=""
          placeholder="Item Link..."
        />
        <input
          onChange={onChange}
          type="text"
          name="color"
          id=""
          value={item.color}
          placeholder="Item Color(optional)..."
        />
        <div className="addItemsBtn">
          <button type="submit">{editing ? "Edit" : "Add"}</button>
          <button onClick={handleCloseModal}>Close</button>
        </div>
      </form>
      <div>
        {filteredList.map((list) => (
          <div key={list.id} className="listedItems">
            {list.items.map((listItem) => (
              <li key={listItem.id}>
                <p>{listItem.name}</p>
                <button onClick={() => handleEditItem(listItem)}>Edit</button>
                <button onClick={() => removeItem(listItem, list.name)}>
                  Remove
                </button>
              </li>
            ))}
          </div>
        ))}
      </div>
    </Modal>
  );
};

export default AddItem;
