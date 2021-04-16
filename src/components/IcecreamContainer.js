import React from "react";
import { useDispatch, useSelector } from "react-redux";

import { buyIcecream } from "../redux";

function IcecreamContainer() {
  const numberofIcecreams = useSelector(
    (state) => state.icecream.numberOfIcecreams
  );
  const dispatch = useDispatch();
  return (
    <>
      <h1>Numbers of Icecreams - {numberofIcecreams}</h1>
      <button onClick={() => dispatch(buyIcecream())}>Buy Icecream</button>
    </>
  );
}

export default IcecreamContainer;
