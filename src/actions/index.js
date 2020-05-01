export const fetch = (search) => {
    return {
        type: 'FETCH',
        payload: search
    };
}

export const remove = (movie) => {
    return {
        type: 'REMOVE',
        payload: movie
    };
}