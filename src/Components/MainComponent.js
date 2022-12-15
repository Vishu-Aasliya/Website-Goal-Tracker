import OuterBox from "./OuterBox";
import ListItems from "./ListItems";

function MainComponent(props){
    const saveTaskHandler = (enteredTask)=>{
        const newTask ={
            ...enteredTask,
            id: Math.random().toString()
        } 

        props.onAddItem(newTask)
    }
    
    const deleteHandler = (deleteText)=>{
        props.onDeleteTask(deleteText);
    }

    return (
        <div>
            <OuterBox onSaveTask = {saveTaskHandler}/>

            {props.item.map((todo)=>{
                return <ListItems key = {todo.id} text = {todo} onDeleteItem = {deleteHandler}/>
            })}
        </div>
    );

}

export default MainComponent;