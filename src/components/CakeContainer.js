import React from "react";
import { connect } from "react-redux";
import { buyCake } from "../redux";

function cakeContainer(props) {
  return (
    <>
      <h1>Numbers Of Cakes - {props.numberOfCakes}</h1>
      <button onClick={props.buyCake}>Buy Cake</button>
    </>
  );
}

const mapStateToProps = (state) => {
  return {
    numberOfCakes: state.cake.numberOfCakes,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    buyCake: () => dispatch(buyCake()),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(cakeContainer);
