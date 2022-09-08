import './App.css';
import React from "react";

import { useSelector, useDispatch } from 'react-redux';
import { fetch_users } from './actions/usersActions';

import Pagination from './components/Pagination/Pagination';
import Table from './components/Table/Table';

function App() {
	const dispatch = useDispatch();
	const pageNumber = useSelector(state => state.pageNumber);
	const users = useSelector(state => state.users);

	async function getUsers() {
		const response = await fetch(`https://jsonplaceholder.typicode.com/users`);
		if (response.status === 200) {
			let result = await response.json();
			dispatch(fetch_users(result));
		} else {
			throw Error('Error while fetching.');
		}
	};
	
	return (
		<div className="App">
			{users.length === 0 ? <button onClick={getUsers} style={{ marginTop: '30px' }}>Fetch</button> : null}
			{users.length > 0 ? <Table users={users} pageNumber={pageNumber} /> : null}
			<Pagination pageNumber={pageNumber} arrayLength={users.length} />
		</div>
	);
}

export default App;
