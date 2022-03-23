import { useContext } from "react";
import {Context} from './Context';


function Person({name, hairColor, onRemove}) {

  const value = useContext(Context)

  console.log(value)

    return (
      <>
        <p>Name: {name}</p>
        <p>Hair: {hairColor}</p>

        <button onClick={() => {onRemove(name)}}>Remove</button>
      </>
    )
  }

  export default Person;