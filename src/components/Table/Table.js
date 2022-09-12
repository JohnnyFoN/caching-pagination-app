import React from 'react';
import { useSelector } from 'react-redux';
import './Table.css';

export default function Table() {

	const pageNumber = useSelector(state => state.pageNumber);
	const users = useSelector(state => state.users);
	const tableRows = useSelector(state => state.table);
	
	let slicedUsers = users.slice((pageNumber * tableRows) - tableRows, pageNumber * tableRows);
	
	return (
		<div>
			<table>
				<thead>
					<tr>
						<th>Name</th>
						<th>Email</th>
					</tr>
				</thead>
				<tbody>
					{slicedUsers.map((u, i) => {
						return (
							<tr key={i}>
								<td>{u.name}</td>
								<td>{u.email}</td>
							</tr>
						)
					})}
				</tbody>
			</table>
		</div>
	)
}
