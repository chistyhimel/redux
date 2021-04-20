import React, { useEffect } from "react";
import { useDispatch } from "react-redux";
import { useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

function UserContainer() {
  const userState = useSelector((state) => state.user);
  const dispatch = useDispatch();
  console.log(userState);

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  return userState.loading ? (
    <p>Loading</p>
  ) : userState.error ? (
    <p>Error</p>
  ) : (
    <div>
      {userState.data && userState.data.map((item, idx) => <p>{item.name}</p>)}{" "}
    </div>
  );
}

export default UserContainer;
