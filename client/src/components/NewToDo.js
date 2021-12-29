import React from "react";
import axios from "axios";
import { useGlobalContext } from "../context/GlobalContext";

const NewToDo = () => {
  const { addToDo } = useGlobalContext();
  const [content, setContent] = React.useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    axios.post("/api/todos/new", { content }).then((res) => {
      setContent("");
      addToDo(res.data);
    });
  };

  return (
    <form className="new" onSubmit={onSubmit}>
      <input
        type="text"
        value={content}
        onChange={(e) => setContent(e.target.value)}
      />

      <button className="btn" type="submit" disabled={content.length === 0}>
        Add
      </button>
    </form>
  );
};

export default NewToDo;
