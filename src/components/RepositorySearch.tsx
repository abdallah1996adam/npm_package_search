import * as React from "react";
import RepositoryList from "./RepositoryList";

const RepositorySearch: React.FC = () => {
  return (
    <div>
      <h1>Search for a package</h1>
      <RepositoryList />
    </div>
  );
};

export default RepositorySearch;
