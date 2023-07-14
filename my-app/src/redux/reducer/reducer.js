

export const reducCount = (state = {count : 6} , action) => {

    if (action.type === `ADD`) {
        return {count : state.count + 1 }
    }if (action.type === `remove`) {
        return {count : state.count - 1 }
    }
    return state ;
}