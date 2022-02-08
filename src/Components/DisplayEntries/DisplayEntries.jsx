const DisplayEntries = props => {
	const { parentEntries } = props;

	return (
		<table className='table'>
			<thead>
				<tr>
					<th>Entry No.</th>
					<th>Weight</th>
					<th>Date</th>
				</tr>
			</thead>
			<tbody>
				{parentEntries.map(({ weight, date }, i) => {
					return (
						<tr key={i}>
							<td>{i + 1}</td>
							<td>{weight}</td>
							<td>{date}</td>
						</tr>
					);
				})}
			</tbody>
		</table>
	);
};

export default DisplayEntries;
