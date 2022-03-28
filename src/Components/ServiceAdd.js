import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { addService, changeServiceField, removeService, clearServiceFields } from '../actions/actionService';

function ServiceAdd() {
	const item = useSelector((state) => state.serviceAdd);
	const dispatch = useDispatch();

	const handleChange = (event) => {
		const { name, value } = event.target;
		dispatch(changeServiceField(name, value));
	}

	const handleSubmit = (event) => {
		event.preventDefault();
		if (!item.editId) {
			dispatch(addService(item.name, item.price));
			return;
		}
		dispatch(removeService(item.editId));
		dispatch(addService(item.name, item.price))
	}

	const handleCancel = (event) => {
		event.preventDefault();
		dispatch(clearServiceFields());
	}

	return (
		<form onSubmit={handleSubmit}>
			<input name='name' onChange={handleChange} value={item.name} />
			<input name='price' onChange={handleChange} type='number' value={item.price} />
			<button type='submit'>Save</button>
			{item.editId && <button onClick={handleCancel}>Cancel</button>}
		</form>
	);
}

export default ServiceAdd;