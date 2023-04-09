import React, { useState, useEffect } from "react"

import Task from "./Task.jsx";
import HeadInput from "./HeadInput.jsx";

const randomNumber = () =>{
	return Math.random()*20;
}

const Home = () => {


	const USER = 'LCLobe';
	const [todos, setTodos] = useState([]);

	useEffect(()=>{
		if (!todos.length) return
		fetch('http://assets.breatheco.de/apis/fake/todos/user/'+USER, {
			method: 'PUT',
			headers: {"Content-Type": "application/json"},
			body: JSON.stringify(todos)
		})
		.catch(e=>console.log(e))
	},[todos])

	useEffect(()=>{

		fetch('http://assets.breatheco.de/apis/fake/todos/user/'+USER)
		.then(res=>{
			if (res.status ==  404 ) throw new Error(res.status)
			console.log(res);
			return res.json() })
		.then(res=>{
			setTodos(res)
			console.log(res)
		})
		.catch(err=>console.log(err))
	},[])

	return (
		<div className="container text-center">
			<h1 className="header-title">Todos</h1>
			<div>
				<HeadInput onSet={setTodos} onRandom={randomNumber}/>
				
				{todos.length ?
					todos.map((element, index)=>{
						return <Task task={element} todos={todos} onSet={setTodos} key={element.id}/>
					})
					: null
				}

			</div>
			<br></br>
			<div className="footer">
				<p className="footer-text">{todos.length ==0 ? "No tasks pending." : todos.length + " task"+ (todos.length >1 ? "s" : "") +" left."}</p>
			</div>



		</div>
	);
};

export default Home;
