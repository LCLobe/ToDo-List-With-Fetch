import React, { useState } from "react";

const HeadInput = ({onSet, onRandom})=>{

    const [inputValue, setInputValue] = useState("")

    const pressEnter =(event)=>{
        if(event.key === 'Enter'){
            const myNewTask = {
                text: inputValue,
                done: false,
                id: onRandom()
            };
            onSet(prev=>prev.concat(myNewTask));
            setInputValue("");
          }
    }

    const handleChange = (e)=>{
        setInputValue(e.target.value);
    }

    return (
        <div className="task-wrapper">
            <input className="input" type="text" value={inputValue} placeholder={"What needs to be done?"} onChange={handleChange} onKeyDown={pressEnter}/>
        </div>
    )
}

export default HeadInput;