import {useState} from 'react'

const SampleUseState = () => {

    //o setContador serve para alterar o contador.
    const[counter, setcounter] = useState(0)
    const[name, setName] = useState("Fulano")

  return (
    <div>
        <h2>Contador: {counter}</h2>
        <button onClick={() => setcounter(counter+1)}>+</button>
        <button onClick={() => setcounter(counter-1)}>-</button>
        <hr />

        <h2>Olá {name}</h2>
        <button onClick={() => setName("Renan")}>Renan</button>
        <button onClick={() => setName("Pedro")}>Pedro</button>
    </div>

    
  )
}


export default SampleUseState