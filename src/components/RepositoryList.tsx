import * as React from "react";
import { useActions } from "../hooks/useAction";
import { useTypedSelector } from "../hooks/useTypedSelector";

const RepositoryList: React.FC = () => {
  const [term, setTerm] = React.useState("");

  const { searchRepository } = useActions();

  const { data, error, loading } = useTypedSelector(
    (state) => state.repository
  );

  const onSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    searchRepository(term);
  };
  return (
    <div>
      <form onSubmit={onSubmit}>
        <input type="text" onChange={(e) => setTerm(e.target.value)} />
        <button>Search</button>
      </form>
      {error && <h3>{error}</h3>}
      {loading && <h3>loading....</h3>}
      {!error && !loading && data.map((name, i) => <div key={i}>{name}</div>)}
    </div>
  );
};

export default RepositoryList;
