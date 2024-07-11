import React, {useContext} from 'react';
import { CounterContext } from './ReducerApp';

export default function ComponentA() {
    const counter = useContext(CounterContext);
  return (
    <div>
        <span>COMPONENT A : </span>
        <button onClick={() => {counter.countDispatch("increment")}}>Increment</button>
        <button onClick={() => {counter.countDispatch("decrement")}}>Decrement</button>
        <button onClick={() => {counter.countDispatch("reset")}}>Reset</button>
    </div>
  )
}