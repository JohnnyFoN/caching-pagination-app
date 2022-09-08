const pageNumberReducer = (state = 1, action) => {
	switch (action.type) {
		case 'NEXT_PAGE':
			return state + 1;
		case 'PREVIOUS_PAGE':
			return state - 1;
		case 'GO_TO_PAGE':
			return action.payload;
		default:
			return state;
	}
}

export default pageNumberReducer;