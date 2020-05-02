//action to fetch list of movies from API
export const fetch = (search) => {
    return {
        type: 'FETCH',
        payload: search
    };
}

//action to remove the particular movie deleted from redux state
export const remove = (movie) => {
    return {
        type: 'REMOVE',
        payload: movie
    };
}