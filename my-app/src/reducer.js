
export const createReducer = (state = {count : 5}, action) => {
    if (action.type === `INCREMENT`) {
        return {
            count : state.count + 1
        }
    }if (action.type === `DECREMENT`) {
        return {
            count : state.count - 1
        }
    }if (action.type ===  `RESET`) {

    }

        return state ;
}
