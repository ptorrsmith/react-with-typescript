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

  return (
    <ul>
      {people.map(person => {
        return (
          <div key={person.name}>{person.name}, {person.age}</div>
        )
      })}
    </ul>
  )
}

export default List