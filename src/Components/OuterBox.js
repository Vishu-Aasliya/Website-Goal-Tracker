import { useState } from 'react';
import './OuterBox.css'

function OuterBox(props) {
    const [initialText, setText] = useState('');

    const inputChangeHandler = (event) => {
        setText(event.target.value);
    }

    const submitHandler = (event) => {
        event.preventDefault();

        const taskNew = {
            title: initialText
        }

        props.onSaveTask(taskNew);
        setText('');
    }

    return (
        <form onSubmit={submitHandler}>
            <div className='bigBox'>
                <div className='outerBox'>
                    <p className='courseGoal'>Course Goal</p>
                    <input type='text' onChange={inputChangeHandler} value = {initialText}></input>
                    <br />
                    <button className='addGoal' type='submit'>Add Goal</button>
                </div>
            </div>
        </form>
    );
};

export default OuterBox;