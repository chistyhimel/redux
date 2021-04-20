import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux/cakes/cakeActions";

function CakeContainer() {
  const numberOfCakes = useSelector((state) => state.cake.numOfCakes);
  const dispatch = useDispatch();

  return (
    <>
      <h1>Number of cakes - {numberOfCakes} </h1>
      <button onClick={() => dispatch(buyCake(2))}>BUY CAKE</button>
    </>
  );
}

export default CakeContainer;
