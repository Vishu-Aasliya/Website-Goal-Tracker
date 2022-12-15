import './ListItems.css'

function ListItems(props) {

    const clickHandler = ()=>{
        const obj = {
            text: props.text.id
        }
        props.onDeleteItem(obj);
    }

    return (
        <div className='listBox'>
            <div className='listItem' onClick={clickHandler}>
                <h3>{props.text.title}</h3>
            </div>
        </div>
    );
}

export default ListItems;