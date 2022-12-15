import { useState } from 'react';
import MainComponent from './Components/MainComponent';
import './App.css';

const DUMMY_TASKS = [{
  id : 1,
  title : 'Start Practising'
},
{
  id: 2,
  title: 'Finish Course'
},
{
  id: 3,
  title: 'Help Me with React :)'
}  
]

function App() {
  const [tasks, setTasks] = useState(DUMMY_TASKS);

  const addItemHandler = (task)=>{
    setTasks(prevTasks =>{
      return [task, ...prevTasks];
    })
  }

  const deleteTaskHandler = (task)=>{
    let newText = task.text;
    setTasks(prevTasks =>{
      return prevTasks.filter((net)=> net.id !== newText);
    })
  }
  
  return (
    <div>
      <MainComponent item = {tasks} onAddItem = {addItemHandler} onDeleteTask = {deleteTaskHandler}/>
    </div>
  );
}

export default App;
