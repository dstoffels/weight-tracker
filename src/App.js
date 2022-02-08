import React, { useState, useEffect } from 'react';
import AddEntryForm from './Components/AddEntry/AddEntryForm.jsx';
import DisplayEntries from './Components/DisplayEntries/DisplayEntries.jsx';
import EntriesChart from './Components/EntriesChart/EntriesChart.jsx';

function App() {
	const [entries, setEntries] = useState([]);

	function addEntry(newEntry) {
		const newEntries = [...entries, newEntry];
		setEntries(newEntries);
	}

	return (
		<div>
			<DisplayEntries parentEntries={entries} />
			<AddEntryForm addEntry={addEntry} />
			<EntriesChart parentEntries={entries} />
		</div>
	);
}

export default App;
