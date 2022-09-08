export const nextPage = () => {
    return {
        type: 'NEXT_PAGE'
    }
}

export const previousPage = () => {
    return {
        type: 'PREVIOUS_PAGE'
    }
}

export const goToPage = (pageNumber) => {
    return{
        type: 'GO_TO_PAGE',
        payload: pageNumber
    }
}