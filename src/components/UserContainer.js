import React, { useEffect, useState } from "react";
import { useDispatch, useSelector } from "react-redux";
import { fetchUsers } from "../redux/users/userActions";

function UserContainer() {
  const [userData, setUserData] = useState([]);
  const users = useSelector((state) => setUserData(state.user));
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(fetchUsers());
  }, []);

  console.log(users);
  return userData.loading ? (
    <h1>Loading</h1>
  ) : userData.error ? (
    <h1>{users.error}</h1>
  ) : (
    <div>
      {userData &&
        userData.users &&
        userData.users.map((user, idx) => <p key={idx}>{user}</p>)}
    </div>
  );
}

export default UserContainer;
