import Chart from 'react-google-charts';
import React, { useEffect, useState } from 'react';

const EntriesChart = props => {
	const [chartData, setChartData] = useState([]);

	useEffect(() => {
		const tempChartData = props.parentEntries.map(({ date, weight }) => [date, weight]);
		setChartData(tempChartData);
	}, [props.parentEntries]);

	return (
		<Chart
			chartType='LineChart'
			data={[['Date', 'Weight'], ...chartData]}
			width='100%'
			height='400px'
		/>
	);
};

export default EntriesChart;
