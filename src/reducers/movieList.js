//represents the movie list reducer
//if 'FETCH' => update the redux state to the given returned API data
//if 'REMOVE' => update the redux state to remove the given movie
const movieListReducer = (state=[], action) => {
    switch(action.type) {
        case 'FETCH':
            if (action.payload === "") {
                return [];
            } else {
                return [].concat(action.payload);
                
            }
            
            
        case 'REMOVE':
            const arr = state.slice();
            let index;
            for (let i = 0; i < arr.length; i++) {
                if(arr[i].Poster === action.payload.Poster && arr[i].Title === action.payload.Title) {
                    index = i;
                }
            }
            arr.splice(index, 1);
            return arr;
        default:
            return state;
    }
 }

 export default movieListReducer;