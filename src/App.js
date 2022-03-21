import React, { useState, useEffect } from 'react';
import './App.css';
import Person from './Person';
import useFetch from './useFetch';


function App() {

  const [swloading, swData, setSwData] = useFetch('https://swapi.dev/api/people')

  function handleRemove(name) {
    console.log('removeing', name)

    const nextResults = swData.results.filter((person) => {
      return person.name !== name;
    })

    const nextPeople = {
      ...swData,
      results: nextResults
    }

    setSwData(nextPeople)
  }

  if(swloading) return "Loading... "

  // console.log(people)

  return (
    <div className="App">
      {swData?.results.map(person => (
      <Person name={person.name} hairColor={person.hair_color} onRemove={handleRemove} />
      ))}
    </div>
  );
}

export default App;
