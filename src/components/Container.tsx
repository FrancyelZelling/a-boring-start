import React from "react";
import List from "./List";
import AddItem from "./AddItem";

const Container: React.FC = () => {
  return (
    <React.Fragment>
      <div>
        <form action="https://www.duckduckgo.com" method="get">
          <input type="text" name="q" id="" placeholder="Duck Duck Go..." />
        </form>
        <List />
      </div>
      <AddItem />
    </React.Fragment>
  );
};

export default Container;
