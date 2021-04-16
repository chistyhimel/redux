import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function HooksCakeContinar() {
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <h1> Number of Cakes with Hooks - {numberOfCakes}</h1>
      <button onClick={() => dispatch(buyCake())}>Buy Cake </button>
    </>
  );
}

export default HooksCakeContinar;
