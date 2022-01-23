import React, {useContext,useState} from "react";
import TodoContext from "./../store/TodoContext";

function TodoForm() {
	const contextValue = useContext(TodoContext);
	const selectedTodo = contextValue?.todo?.todo?.clickedTodo;
	const [description, setDescription] = useState(selectedTodo?.description);
	const [title, setTitle] = useState("");


	const inputChangeHandler = (e) => {
		setTitle({title: e.target.value}, () => {
			contextValue.todoUpdateDispatch(title);
		});
	};
	const ChangeHandler = (e) => {
		setDescription(e.target.value);
	};

	return (
		<form className=' bg-white p-2 sticky-top m-3'>
			<div className='mb-3'>
				<label htmlFor='title' className='htmlF-label'>
					Title
				</label>
				<input
					value={selectedTodo?.title}
					type='text'
					name='title'
					className='form-control'
					id='titleID'
					onChange={inputChangeHandler}
				/>
			</div>
			<div className='mb-3'>
				<label htmlFor='description' className='form-label'>
					Description
				</label>
				<textarea
					onChange={ChangeHandler}
					defaultValue={selectedTodo?.description}
					value={description}
					className='form-control'
					id='description'
					name='description'
					rows='3'></textarea>
			</div>
			<div className='mb-3'>
				<label htmlFor='author' className='htmlF-label'>
					Author
				</label>
				<input
					type='text'
					// onChange={inputChangeHandler}
					value={selectedTodo?.author}
					className='form-control'
					id='author'
					name='author'
				/>
			</div>
			<div className='mb-3 form-check'>
				<input
					type='checkbox'
					className='form-check-input'
					id='complete'
					name='complete'
					value={selectedTodo?.complete}
					// onChange={inputChangeHandler}
				/>
				<label className='form-check-label' htmlFor='exampleCheck1'>
					Complete
				</label>
			</div>
		</form>
	);
}

export default TodoForm;
