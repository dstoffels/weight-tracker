import { useState } from 'react';

const AddEntryForm = props => {
	const [weight, setWeight] = useState(0);
	const [date, setDate] = useState('');

	function handleWeight(e) {
		const weightNum = parseFloat(e.target.value);
		setWeight(weightNum);
	}

	function handleDate(e) {
		setDate(e.target.value);
	}

	function handleSubmit(e) {
		e.preventDefault();
		let newEntry = { weight: weight, date: date };
		props.addEntry(newEntry);
	}

	return (
		<form onSubmit={handleSubmit}>
			<label htmlFor=''>Weight</label>
			<input value={weight} onChange={handleWeight} type='number' />
			<label htmlFor=''>Date</label>
			<input value={date} onChange={handleDate} type='date' />
			<button type='submit'>Add</button>
		</form>
	);
};

export default AddEntryForm;
