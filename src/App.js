import {useState} from 'react';
import './App.css';

function App() {
  let[todolist,setTodolist]=useState([]);

  let saveToDoList=(event)=>{
    let toname=event.target.toname.value;
  if(!todolist.includes(toname)){
      let finaltodolist=[...todolist,toname];
      setTodolist(finaltodolist);
  }
  else{
    alert(`${toname} name already exist`)
  }    
    event.preventDefault();
  }

  let list=todolist.map((value,index)=>{
    return(
      <ToDoListItems value={value} key={index} indexNumber={index} todolist={todolist} setTodolist={setTodolist} />
    )
  })
  
  return (
    <div className="App">
      <h1>Todo List</h1>
      <form onSubmit={saveToDoList}>
      <input type="text" name="toname" /><button>Save</button>
      </form>
      <div className="outerDiv">
        <ul>
          {list}
        </ul>
      </div>
      <p><b>Remaining items : {todolist.length} </b></p>
      
    </div>
  );
}

export default App;

function ToDoListItems({value,indexNumber,todolist,setTodolist,count}){
  let[status,setstatus]=useState(false);
  let deleteRow=()=>{
    let finalData=todolist.filter((v,i)=>i!==indexNumber)
    setTodolist(finalData);
   
  }

  function checkStatus(){
    setstatus(!status);
  }
  return (
    <li className={(status)?'completetodo':''}  onClick={checkStatus}>{indexNumber+1}.{value}<span onClick={deleteRow}>&times;</span></li>
  
     )

}
