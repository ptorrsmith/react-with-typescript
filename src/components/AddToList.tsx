import React, { useState } from "react";
import { IState as Props} from "../App"

interface IProps {
  people: Props["people"] // exported interface from App.tsx
  setPeople: React.Dispatch<React.SetStateAction<Props["people"]>>
}


const AddToList: React.FC<IProps> = ({ people, setPeople }) => {

  const [input, setInput] = useState({
    name: "",
    age: "",
    note: "",
    url: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>): void => {
    setInput({
      ...input, // sread the current state, then overwrite the value of the input that was changed
      [e.target.name]: e.target.value
    });
  }

  const handleClick = (): void => {
    if(
      !input.name || !input.age || !input.url
    ) {
      return
    }

    setPeople([
      ...people,
      {
        name: input.name,
        age: parseInt(input.age),
        url: input.url,
        note: input.note
      }

    ])

    setInput({
      name: "",
      age: "",
      note: "",
      url: ""
    })

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
        type="number"
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
      <button
        className="AddToList-btn"
        onClick={handleClick}
        >
        Add them now!
      </button>
    </div>
  )
}

export default AddToList;