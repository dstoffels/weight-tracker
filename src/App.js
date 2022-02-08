import React, { useState, useEffect } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm.jsx';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx';

function App() {
	const [entries, setEntries] = useState([{ weight: 175, date: '11-23-2021' }]);

	function addEntry(newEntry) {
		const newEntries = [...entries, newEntry];
		setEntries(newEntries);
	}

	return (
		<div>
			<DisplayEntries parentEntries={entries} />
			<AddEntryForm addEntry={addEntry} />
		</div>
	);
}

export default App;
