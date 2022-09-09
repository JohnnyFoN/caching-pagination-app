import React from 'react';
import { useDispatch } from 'react-redux';
import { show_rows } from '../../actions/tableActions';
import './Select.css';

export default function Select() {	
	const dispatch = useDispatch();

	function handleChange(e){
		e.preventDefault();
		const rowsPerPage = parseInt(e.target.value);
		console.log(rowsPerPage)
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
