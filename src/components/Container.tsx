import React from "react";
import List from "./List";

const Container: React.FC = () => {
  return (
    <React.Fragment>
      <div className="container">
        <form action="https://www.duckduckgo.com" method="get">
          <input
            className="searchbar"
            type="text"
            name="q"
            id=""
            autoFocus={true}
            placeholder="Duck Duck Go..."
          />
        </form>
        <div className="lists">
          <List />
        </div>
      </div>
    </React.Fragment>
  );
};

export default Container;
