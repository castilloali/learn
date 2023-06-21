import React, { useReducer } from 'react'

// const initialValues = {
//     count: 0
// }

// const reducer = (state, action  ) => {
//     switch ( action.type) {
//         case `increment` : return { count: state.count + 1 }
//         case `decrement` : return { count: state.count + 1 }
//         case `reset` : return {state}
//         default : return {state}
//     }
// }






const reduce = (state, action) => {
  if (action.type ===  `increment`) {
    // return { 
    //   age : state.age + 1 
    // }
  }
}





const UseReducer = () => {

  const [ statem , dispach] = useReducer(reduce , {age : 5})
    return (
    <div>
        <span> num = {statem.age} </span>
      <button onClick={() => {dispach({type: `increment`}) }} >+</button>
      {/* <button onClick={() => {disPatch(`decrement`)}}>-</button>
      <button onClick={() => {disPatch(`reset`)}}></button> */}
    </div>
  )
}

export default UseReducer
