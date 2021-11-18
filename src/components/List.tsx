import React from 'react';

interface iProps {
  people: {
    name: string
    age: number
    url: string
    note?: string
  }[]
}

const List: React.FC<iProps> = ({ people }) => {

  const renderList = ():JSX.Element[] => { // define the type of the return value for this function
    return people.map((person) => {
      return (
        <li className="List">
        <div className="List-header">
          <img src={person.url} alt={person.name} className="List-img" />
          <h2>{person.name}</h2>
        </div>
        <p>{person.age} years old</p>
        <p className="List-note">{person.note}</p>
      </li>
      )
    })
  }

  return (
    <ul>
      {renderList()}
      {/* {people.map(person => {
        return (
          <div key={person.name}>{person.name}, {person.age}</div>
        )
      })} */}
    </ul>
  )
}

export default List