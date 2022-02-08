import { useState } from 'react';

const AddEntryForm = props => {
	const [weight, setWeight] = useState(0);
	const [date, setDate] = useState(new Date().toLocaleDateString());

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
			<div className='form-group mb-3'>
				<label>Weight</label>
				<input className='form-control' value={weight} onChange={handleWeight} type='number' />
			</div>
			<div className='form-group mb-3'>
				<label htmlFor=''>Date</label>
				<input className='form-control' value={date} onChange={handleDate} type='date' />
			</div>
			<button className='btn btn-primary' type='submit'>
				Log Weight
			</button>
		</form>
	);
};

export default AddEntryForm;
