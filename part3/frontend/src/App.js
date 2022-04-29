import React, { useState, useEffect } from 'react'
import Person from './components/Person'
import Filter from './components/Filter'
import PersonForm from './components/PersonForm'
import Notification from './components/Notification'
import ErrorNotification from './components/ErrorNotification'
import personService from './services/Persons'



const App = () => {
  const [ persons, setPersons ] = useState([ ]) 
  const [ newName, setNewName ] = useState('Big Potato')
  const [ newNumber, setNewNumber ] = useState('678054356')
  const [ personsToShow, setPersonstoshow] = useState(persons)
  const [ notificationMessage, setNotificationMessage ] = useState(null)
  const [ errorMessage, setErrorMessage ] = useState(null)


  useEffect(() => {

    personService
    .getAll()
    .then(initialPersons => {
      setPersons(initialPersons)
      setPersonstoshow(initialPersons)
    })

  }, [])




  const addPerson = (event) => {
    event.preventDefault()
    let included = false
    for (const value of persons) {
      if (value.name === newName) {
        included = true
      }
    }

    
    
    if (included) {

      const person = persons.find(person => person.name === newName)

      const personObject = {
        name: newName,
        number: newNumber,
        id: person.id,
      }
      
      personService
      .update(personObject.id,personObject)
      .then(returnedPerson => {
        setPersons(persons.filter(persons => persons.id !== personObject.id).concat(returnedPerson))
        setPersonstoshow(personsToShow.filter(persons => persons.id !== personObject.id).concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(
          `${newName} updated`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(
          `Error: ${error.response.data.error}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }

      )

    } else {
      const personObject = {
        name: newName,
        number: newNumber,
      }
      
      
      personService
      .create(personObject)
      .then(returnedPerson => {
        setPersons(persons.concat(returnedPerson))
        setPersonstoshow(personsToShow.concat(returnedPerson))
        setNewName('')
        setNewNumber('')
        setNotificationMessage(
          `Added ${newName}`
        )
        setTimeout(() => {
          setNotificationMessage(null)
        }, 5000)
      })
      .catch(error => {
        setErrorMessage(
          `Error: ${error.response.data.error}`
        )
        setTimeout(() => {
          setErrorMessage(null)
        }, 5000)
      }

      )



      

    }
  }
  const handleNameChange = (event) => {
    setNewName(event.target.value)
  }

  const handleNumberChange = (event) => {
    setNewNumber(event.target.value)
  }
  const handleNameFilter = (event) =>{

    setPersonstoshow((event.target.value==='')
    ? persons
    : persons.filter(persons => persons.name.toLocaleLowerCase().includes(event.target.value.toLocaleLowerCase())))
  }

  const handleDelete = id =>{

    const tempperson = persons.filter(person=> person.id === id)
    if(window.confirm(`Delete ${tempperson[0].name}?`))
    {
      personService.deleteperson(id)
      setPersons(persons.filter(person=> person.id !== id))
      setPersonstoshow(personsToShow.filter(person=> person.id !== id))
    }
  }

  return (
    <div>
      <h2>Phonebook</h2>
      <Notification message={notificationMessage} />
      <ErrorNotification message={errorMessage} />

      <Filter namehandler={handleNameFilter}/>

      <h2>add a new</h2>

      <PersonForm namehandler={handleNameChange} numberhandler={handleNumberChange} namevalue={newName} numbervalue={newNumber} personadder={addPerson}/>

      
      <h2>Numbers</h2>
      {personsToShow.map(element => <Person person={element} key={element.id} deletehandler={() => handleDelete(element.id)}/>)}
    </div>
  )
}

export default App