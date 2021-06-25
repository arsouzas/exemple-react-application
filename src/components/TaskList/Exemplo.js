import React, { useState } from "react";
import "./taskList.css";
import PropTypes from "prop-types";

export default function Exemplo({ title }) {
  const increment = () => {
    setCount((currentCount) => {
      return currentCount + 1;
    });
  };

  const [count, setCount] = useState(0);
  return (
    <div className="tasklist">
      <div className="title">{title}</div>
      <div className="content">
        {count}
        <button onClick={increment}>clique aqui</button>
      </div>
    </div>
  );
}

Exemplo.propTypes = {
  title: PropTypes.string.isRequired
};
