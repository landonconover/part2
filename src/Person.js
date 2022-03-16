

function Person({name, hairColor, onRemove}) {

    return (
      <>
        <p>Name: {name}</p>
        <p>Hair: {hairColor}</p>

        <button onClick={() => {onRemove(name)}}>Remove</button>
      </>
    )
  }

  export default Person;