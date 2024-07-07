import React, { useState } from "react";

const AddTask = ({ addTask }) => {
  const [value, setValue] = useState("");
  const [warning, setWarning] = useState("");

  const addItem = () => {
    const trimmedValue = value.trim();

    if (trimmedValue === "") {

      setWarning("Type something!");

    }else {

      addTask(trimmedValue);
      setValue("");
      setWarning("");

    }
    
  };

  return (
    <>
      <div className="input-container">
        <input
          type="text"
          className="input"
          placeholder="add a new task"
          value={value}
          onChange={(e) => setValue(e.target.value)}
        />
        <button onClick={addItem} className="Add-btn">ADD</button>
      </div>
      {warning && <div className="warning text-danger mt-2">{warning}</div>}
    </>
  );
};

export default AddTask;
