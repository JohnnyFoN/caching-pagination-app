import React from 'react'
import './Table.css';

export default function Table({ users, pageNumber }) {

	// Two rows per page
	let slicedUsers = users.slice((pageNumber * 2) - 2, pageNumber * 2);
	
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
