import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter/index";
import Component from "./Component";


const App = () => {
  const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    
    
    //create redux store
    //import it in index.js with provider
    //make slice
    //import slice in store and use in reducer of store
    //make hooks ; two hooks are used dispatch and selector
    //dispatch dispatching actions and selector for reading  value in actions
    <>
    
      <div>Count is {count} </div>
      <button onClick={()=>{dispatch(increment())}}>Increment</button>
      
      <button onClick={()=>{dispatch(decrement())}}>Decrement</button>

      {/* //nesting a component into another component */}
      <Component/>
      
    </>
    
  );
};

export default App;
