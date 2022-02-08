import Chart from 'react-google-charts';
import React, { useEffect, useState } from 'react';

const EntriesChart = props => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const tempChartData = props.parentEntries.map(({ date, weight }) => [date, weight]);
		setChartData(tempChartData);
	}, [props.parentEntries]);

	let chart = (
		<Chart
			chartType='LineChart'
			data={[['Date', 'Weight'], ...chartData]}
			height='500px'
			options={{ legend: { position: 'bottom' } }}
		/>
	);
	return chartData.length ? chart : 'No data yet.';
};

export default EntriesChart;
