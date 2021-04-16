import React, { useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { buyCake } from "../redux";

function NewCakeContainer() {
  const [cakes, setCakes] = useState(1);
  const numberOfCakes = useSelector((state) => state.cake.numberOfCakes);
  const dispatch = useDispatch();
  return (
    <>
      <br />
      <br />
      <input
        type="text"
        value={cakes}
        onChange={(e) => setCakes(e.target.value)}
      />
      <button onClick={() => dispatch(buyCake(cakes))}>
        Buy {cakes} Cake{" "}
      </button>
    </>
  );
}

export default NewCakeContainer;
