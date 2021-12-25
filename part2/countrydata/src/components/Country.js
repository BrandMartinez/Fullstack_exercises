import React, { useState } from 'react'
import Language from './Language'

const Country = (props) => {

    const [ buttonpressed, setbuttonpressed ] = useState(false)


    if (props.bigcountry || buttonpressed)
    {
        
        return (
            <div>
            <h1>
                {props.country.name.common}
            </h1>
            <p>
                capital {props.country.capital}
            </p>
            <p>
                population {props.country.population}
            </p>

            

            <h3>languages</h3>

            <ul>
                {Object.values(props.country.languages).map((element,i) => <Language language={element} key={i} />)}
            </ul>


            


            <img src={props.country.flags.png} alt="flag"></img>
            
            </div>  
        )
    }
    else
    {
        const showcountry = (event) => {
            event.preventDefault()
            console.log('button clicked', event.target)
            setbuttonpressed(true)
          }
            return (
                <div>
                    {props.country.name.common}
                    <button type="button" onClick={showcountry}>Show</button>
                
                </div>  
                )
    }
        
    
  }

export default Country