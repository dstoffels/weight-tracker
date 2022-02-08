import React, { useState, useEffect } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm.jsx';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx';
import EntriesChart from './Components/EntriesChart/EntriesChart.jsx';

import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';

function App() {
	const [entries, setEntries] = useState([]);

	function addEntry(newEntry) {
		const newEntries = [...entries, newEntry];
		setEntries(newEntries);
	}

	return (
		<div className='container-fluid'>
			<h3>
				Weight<small className='text-muted'>Tracker</small>
			</h3>
			<div className='row'>
				<div className='col-md-6'>
					<div className='border-box display-entries'>
						<DisplayEntries parentEntries={entries} />
					</div>
					<div className='border-box'>
						<AddEntryForm addEntry={addEntry} />
					</div>
				</div>
				<div className='col-md-6'>
					<div className='border-box'>
						<EntriesChart parentEntries={entries} />
					</div>
				</div>
			</div>
		</div>
	);
}

export default App;
