const tableReducer = (state = 2, action) => {
	switch (action.type) {
		case 'SHOW_ROWS':
			return action.payload;
		default:
			return state;
	}
}

export default tableReducer;