import React, { useEffect } from "react";
import { useAppContext } from "../context/AppContext/appContext";

import AddList from "./AddList";
import List from "./List";

const Container: React.FC = () => {
  const { loadItems } = useAppContext();

  useEffect(() => {
    loadItems();
  }, []);

  return (
    <React.Fragment>
      <div className="container">
        <form action="https://www.duckduckgo.com" method="get">
          <input
            className="searchbar"
            type="text"
            name="q"
            autoFocus={true}
            placeholder="Duck Duck Go..."
          />
        </form>
        <div className="lists">
          <List />
        </div>
      </div>
      <AddList />
    </React.Fragment>
  );
};

export default Container;
