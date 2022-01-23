import Badge from "react-bootstrap/Badge";
import React, {useContext, useState} from "react";
import TodoContext from "./../store/TodoContext";

function TodoList(props) {
	const contextValue = useContext(TodoContext);

	const [clicked, setClicked] = useState(false);
	// const selectedTodo = localStorage.getItem("selectedTodo");

	const title = contextValue?.todo?.todo?.updatedTodo?.title;
	const description = contextValue?.todo?.todo?.updatedTodo?.description;
	const author = contextValue?.todo?.todo?.updatedTodo?.author;
	const complete = contextValue?.todo?.todo?.updatedTodo?.complete;
	const todo = {
		id: props.id,
		title: props.todo.title,
		description: props.todo.description,
		author: props.todo.author,
		complete: props.todo.complete,
	};
	const addTodoHandler = () => {
		contextValue.todoAddDispatch(todo);
		contextValue.todoSelectDispatch(todo);
	};

	const removeTodoHandler = () => {
		contextValue.todoRemoveDispatch(props.id);
	};

	const todoSelectHandler = () => {
		setClicked(true);
		contextValue.todoSelectDispatch(todo);
	};

	const cssClass = clicked ? " m-3 border bg-white p-4 border border-success " : "border bg-white p-4 ";

	const defaultTodo = (
		<div>
			<div className='mb-4 '>
				<Badge onClick={removeTodoHandler} bg='danger'>
					Delete
				</Badge>

				<h6>{title ? title : props.todo.title}</h6>
				<p>{description ? description : props.todo.description}</p>
				<p> Author: {author ? author : props.todo.author}</p>

				<Badge bg='danger'>Completed</Badge>
			</div>
			<button type='button' className='mx-auto btn btn-success btn-sm' onClick={addTodoHandler}>
				+Add
			</button>
		</div>
	);
	return (
		<>
			<div className={cssClass} onClick={todoSelectHandler}>
				{defaultTodo}

				{/* <div className='m-5 bg-white px-5 py-2'>
					<h3>New Task tile</h3>
					<p>task description</p>
					<p> Author: Shakib</p>

					<Badge bg='success'>Completed</Badge>
				</div> */}
			</div>
		</>
	);
}

export default TodoList;
