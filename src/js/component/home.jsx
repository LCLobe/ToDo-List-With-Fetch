import React, { useState } from "react"

import Task from "./Task.jsx";
import HeadInput from "./HeadInput.jsx";

const randomNumber = () =>{
	return Math.random()*20;
}

const Home = () => {

	const [todos, setTodos] = useState([{text: "task1", done: false, id:3.455454545 }, {text: "task2", done: false, id:5.455454545}]);

	return (
		<div className="container text-center">
			<h1 className="header-title">Todos</h1>
			<div>
				<HeadInput onSet={setTodos} onRandom={randomNumber}/>
				
				{
					todos.map((element, index)=>{
						return <Task task={element} todos={todos} onSet={setTodos} key={element.id}/>
					})
				}

			</div>
			<br></br>
			<div className="footer">
				<p className="footer-items">{todos.length ==0 ? "No tasks pending." : todos.length + " task"+ (todos.length >1 ? "s" : "") +" left."}</p>
			</div>



		</div>
	);
};

export default Home;
