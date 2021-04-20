import { combineReducers } from "redux";
import cakeReducer from "./cakes/cakeReduce";
import userReducer from "./users/userReducer";

const rootReducer = combineReducers({
  cake: cakeReducer,
  user: userReducer,
});

export default rootReducer;
