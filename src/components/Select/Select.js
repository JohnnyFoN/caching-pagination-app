import React from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { show_rows } from '../../actions/tableActions';
import { goToPage } from '../../actions/pageNumberActions';
import './Select.css';

export default function Select() {	
	
	const dispatch = useDispatch();
	
	const users = useSelector(state => state.users);
	const pageNumber = useSelector(state => state.pageNumber);

	function handleChange(e){
		e.preventDefault();
		const rowsPerPage = parseInt(e.target.value);
		const lastPageAvailable = Math.round(users.length / rowsPerPage);
		if(pageNumber > lastPageAvailable){
			dispatch(goToPage(lastPageAvailable));
		}
		dispatch(show_rows(rowsPerPage));
	}

	return (
		<div className='dropdown'>
			<label>Choose rows per page: </label>
			<select name="tableRows" id="rows" onChange={(e)=>handleChange(e)}>
				<option value="2">2</option>
				<option value="5">5</option>
				<option value="10">10</option>
			</select>
		</div>
	)
}
