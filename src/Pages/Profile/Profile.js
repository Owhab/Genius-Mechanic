import React from "react";
import useAuth from "../../Hooks/useAuth";

const Profile = () => {
  const { user, logOut } = useAuth();
  console.log(user);

  return (
    <div>
      <h2>Name: {user.displayName}</h2>
      <p>Email: {user.email}</p>
      <img
        style={{ width: "20vw", height: "30vh" }}
        src={user.photoURL}
        alt=""
      />{" "}
      <br /> <br />
      <button className="btn btn-light" onClick={logOut}>
        Log Out
      </button>
    </div>
  );
};

export default Profile;
