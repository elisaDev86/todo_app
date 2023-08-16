import React from "react";
import { useState } from "react";

//istruzioni per inserire ed aggiungere task alla lista
const Format=props =>{

  function handleInputChange(event) {
    props.setInputFun(event.target.value);
 }

  return (
<>
  <input id="taskInput" type="text" value={props.inputVal}
    placeholder="Aggiungi task...!"
    onChange={handleInputChange}
    onKeyDown={(e) => {
     if (e.key === 'Enter') 
     {props.func({ id: props.contatore, title: props.inputVal });}
                      }
                    } />
  <button id="addBtn" onClick={() => props.addFun({ id: props.contatore, title: props.inputVal })}>Add!</button> 
</> 
  );
}


function TodoList() {
//creo un'array di oggetti indicizzati, contenenti gli oggetti della lista
  const initialList = [
    {id:0, title:'Colazione con gli amici'},
    {id:1, title:'Portare fuori il cane'},
    {id:2, title:'Andare in palestra'},
    {id:3, title:'Comprare il latte'},
    {id:4, title:'Lezione di musica'},
    {id:5, title:'Aperitivo'}, 
];

  const [todoWrap, setTodoWrap] = useState(initialList);
  const [contatore, setContatore] = useState (todoWrap.length);
  const [input, setInput] = useState ('');
  function addItem(newItem){
    if (input !== '' ){
      setContatore(contatore +1 );
      setTodoWrap([...todoWrap,newItem ]);
      setInput('');
    }
  }

  const listItems = todoWrap.map((item)=>{
    return(
      <div key={item.id}>
      <li>{item.id}-{item.title}-{item.AiFillDelete}
      </li>
      </div>
     
    )
  }
  )

    return (
<>
      <Format addFun={addItem}
            setInputFun={setInput}
            inputVal={input}
            contatore={contatore}/>

  {/*restituzione list*/}
      <div>
        <ul id="myUL">
          {listItems}
        </ul>
      </div>

{/*richiamo"setTodoWrap" e tramite questa sintassi ordino all'onClick di restituire l'array allo stato iniziale*/}
    <button className='btn-reset' onClick={() => {setTodoWrap(initialList)}}>Reload</button>
    {/*richiamo"setTodoWrap" e tramite questa sintassi ordino all'onClick di restituire un array vuoto*/}
    <button className='btn-delete' onClick={() => {setTodoWrap([])}}>Delete</button>
 
</>
    );
  };
  
  export default TodoList;