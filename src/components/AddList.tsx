import React, { useState, ChangeEvent } from "react";
import Modal from "react-modal";

import { useAppContext } from "../context/AppContext/appContext";

const AddList = () => {
  const [modalState, setModalState] = useState(false);
  const [textField, setTextField] = useState("");

  const { addList } = useAppContext();

  const onChange = (event: ChangeEvent<HTMLInputElement>) => {
    setTextField(event.target.value);
    console.log(textField);
  };

  const changeModal = (value: boolean) => {
    setModalState(value);
  };

  const onSubmit = (event: ChangeEvent<HTMLFormElement>) => {
    event.preventDefault();
    addList(textField);
  };

  return (
    <div>
      <button onClick={() => changeModal(true)}>Add List</button>
      <Modal
        className={"modal"}
        isOpen={modalState}
        onRequestClose={() => changeModal(false)}
      >
        <form onSubmit={onSubmit}>
          <label htmlFor="listName">List Name</label>
          <input onChange={onChange} type="text" name="listName" id="" />

          <button type="submit">Add List</button>
          <button onClick={() => changeModal(false)}> Close </button>
        </form>
      </Modal>
    </div>
  );
};

export default AddList;
