import React, { useState } from 'react'


const Filter = ({onChange, filter}) => {
    return ( 
     <div>
        Filter : <input value={filter} onChange={onChange}/>
     </div> 
    )
}

const AddSomeone = ({onSubmit, newName, newNumber, onChange, onChange2}) => {
    return (  
      <form onSubmit={onSubmit}>
        <div>
          Name: <input value={newName} onChange={onChange}/>
          <br />
          Number: <input value={newNumber} onChange={onChange2}/>
        </div>
        <br />
        <div>
          <button type="submit">Add Name</button>
        </div>
      </form>   
    )
}

const Numbers = ({persons, filter}) => {
    return (
        <ul>
            {persons
            .filter((person) => person.name.toLowerCase().includes(filter))
            .map((person) => <li key={person.name}>{person.name}, {person.number}</li>)}
        </ul>
    )
}



const App = () => {

    // Variables
  const [ persons, setPersons ] = useState([
    { name: 'Arto Hellas', number: '040-123456' },
    { name: 'Ada Lovelace', number: '39-44-5323523' },
    { name: 'Dan Abramov', number: '12-43-234345' },
    { name: 'Mary Poppendieck', number: '39-23-6423122' }
  ]) 
  const [ newName, setNewName ] = useState('')
  const [ newNumber, setNewNumber ] = useState('')
  const [ filter, setFilter ] = useState('')


    // Methods
  const addSomeone = (event) => {
    event.preventDefault()

    console.log("already in array ? ", persons.map((person) => person.name).includes(newName))

    if (!persons.map((person) => person.name).includes(newName)) {
        const personObject = {
            name : newName,
            number : newNumber
        }
    
        setPersons(persons.concat(personObject))
        setNewName('')
        setNewNumber('')
    } else {
        alert(`${newName} is already added to phonebook`)
    }
  }

  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }

  const handleFilterChange = (event) => {
    setFilter(event.target.value)
  }

  //console.log("Persons array :", persons, 
  //" , newName variable :", newName,  
  //" , newNumber variable :", newNumber,
  //" , filter variable :", filter)

  return (
    <div>

      <h2>Phonebook</h2>
      <Filter 
        onChange={handleFilterChange}
        filter={filter}
      /> 

      <h2>Add someone</h2>
      <AddSomeone 
        onSubmit={addSomeone}
        newName={newName}
        newNumber={newNumber}
        onChange={handleNameChange}
        onChange2={handleNumberChange}
      /> 

      <h2>Numbers</h2>
      <Numbers 
        persons={persons}
        filter={filter}
      />

    </div>
  )
}

export default App