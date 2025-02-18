import { useReducer } from "react"

import { counterReducer, CounterState, CounterAction } from "../reducers/counterReducer"

const initialState: CounterState = {count: 0}

const Counter = () => {
  const [state, dispatch] = useReducer(counterReducer, initialState)
  const increment = () => {
    dispatch({type:'INCREMENT'})
  }

  return (
    <div>
      <h2>Count: {state.count}</h2>
      <button onClick={increment}>INCRMENT</button>
      <button onClick={() => dispatch({type:'DECREMENT'})}>DECREMENT</button>
    </div>
  )
}

export default Counter