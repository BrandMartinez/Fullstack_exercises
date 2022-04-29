

const PersonForm =(props) => {

    return(
        <form onSubmit={props.personadder}>
        <div>
          name: <input 
                value={props.namevalue}
                onChange={props.namehandler}/>
        </div>
        <div>number: <input 
                value={props.numbervalue}
                onChange={props.numberhandler}/></div>
        <div>
          <button type="submit">add</button>
        </div>
      </form>
    )
}



export default PersonForm