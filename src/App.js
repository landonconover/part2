import React, { useState, useEffect } from 'react';
import './App.css';
import Person from './Person';


function App() {

  const [people, setPeople] = useState([]);

  function handleRemove(name) {
    console.log('removeing', name)

    const nextPeople = people.filter((person) => {
      return person.name !== name;
    })

    setPeople(nextPeople)
  }

  useEffect(() => {
    async function getPeople(){
      const resp = await fetch('https://swapi.dev/api/people');
      const data = await resp.json()

      // console.log(data.results)

      setPeople(data.results)
    }

    getPeople()

  }, [])

  console.log(people)

  return (
    <div className="App">
      {people.map(person => (
      <Person name={person.name} hairColor={person.hair_color} onRemove={handleRemove} />
      ))}
    </div>
  );
}

export default App;
