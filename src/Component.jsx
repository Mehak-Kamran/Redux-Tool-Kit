import React from 'react'
import { useDispatch, useSelector } from "react-redux";
import { decrement, increment } from "./redux/slice/counter/index";

const Component = () => {
    const count = useSelector((state) => state.counter);
  const dispatch = useDispatch();
  return (
    <>
     <div style={{marginTop:"100px"}}>My second component</div>
    <div>Count is {count} </div>
</>
   
  )
}

export default Component