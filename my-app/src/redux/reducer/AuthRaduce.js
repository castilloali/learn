export const reducAuth = (state = {isLog : false} , action) => {

    if (action.type === `islogin`) {
        return {isLog : true} 
    }if (action.type === `notlogin`) {
        return {isLog : false} 
    }
    return state ;
}