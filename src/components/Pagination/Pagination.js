import React from "react";
import { useSelector, useDispatch } from "react-redux";
import { nextPage, previousPage, goToPage } from "../../actions/pageNumberActions";
import './Pagination.css';

export default function Pagination() {

	const pageNumber = useSelector(state => state.pageNumber);
	const users = useSelector(state => state.users);
	const tableRows = useSelector(state => state.table);

	const dispatch = useDispatch();

	function handleInputChange(e) {
		e.preventDefault();
		const exactPage = parseInt(e.target.value);
		const lastPageAvailable = Math.round(users.length / tableRows);
		if(exactPage > lastPageAvailable){
			dispatch(goToPage(lastPageAvailable));
		}else{
			dispatch(goToPage(exactPage));
		}
	}

	return (
		<div>
			{pageNumber <= 1 ? null :
				<button className="paginationBtn" onClick={() => dispatch(previousPage())}>{'<'}</button>
			}
			{users.length <= 0 ? null :
				<input onChange={(e) => handleInputChange(e)} type="text" value={pageNumber} /> 
			}
			{(users.length / pageNumber <= tableRows ? null :
				<button className="paginationBtn" onClick={() => dispatch(nextPage())}>{'>'}</button>
			)}
		</div>
	)
}
