import React, { useState } from "react";

const AddToList = () => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setInput({
      ...input, // sread the current state, then overwrite the value of the input that was changed
      [e.target.name]: e.target.value
    });
  }

  return (
    <div className="AddToList">
      <h2>Add to List</h2>
      <input
        type="text"
        placeholder="Name"
        className="AddToList-input"
        value={input.name}
        onChange={handleChange}
        name="name"
      />
      <input
        type="text"
        placeholder="Age"
        className="AddToList-input"
        value={input.age}
        onChange={handleChange}
        name="age"
      />
      <input
        type="text"
        placeholder="Image URL"
        className="AddToList-input"
        value={input.url}
        onChange={handleChange}
        name="url"
      />
      <textarea
        placeholder="Notes"
        className="AddToList-input"
        value={input.note}
        onChange={handleChange}
        name="note"
      />
    </div>
  )
}

export default AddToList;