import React from "react";

import { useDispatch } from "react-redux";
import { nextPage, previousPage, goToPage } from "../../actions/pageNumberActions";

import './Pagination.css';

export default function Pagination({ pageNumber, arrayLength }) {

	const dispatch = useDispatch();

	function handleInputChange(e) {
		e.preventDefault();
		const exactPage = parseInt(e.target.value);
		dispatch(goToPage(exactPage));
	}

	return (
		<div>
			{pageNumber <= 1 ? null : <button className="paginationBtn" onClick={() => dispatch(previousPage())}>{'<'}</button>}
			{arrayLength > 0 ? <input onChange={(e) => handleInputChange(e)} type="text"
				value={pageNumber} /> : null}
			{(arrayLength / pageNumber <= 2 ? null : <button className="paginationBtn" onClick={() => dispatch(nextPage())}>{'>'}</button>)}
		</div>
	)
}
