import React, { useEffect } from "react";
import { userAuthStore } from "../../stores/useAuthStore";
import { useNavigate } from "react-router-dom";

const UsersList = () => {
  const navigate = useNavigate();
  const { getAllUsers, allUsers, deleteUser } = userAuthStore();

  useEffect(() => {
    getAllUsers();
  }, [getAllUsers]);

  const handelDelete = (userId) => {
    deleteUser(userId);
    navigate("/dashboard");
  };
  return (
    <div className="mx-35 mt-11">
      {" "}
      <h1 className="text-xl font-bold">All Users List</h1>
      <div className="flex flex-col gap-2 mt-15">
        {" "}
        <div className=" grid grid-cols-[3fr_3fr_1fr] items-center py-1 px-2 border  text-sm">
          <b>User Name</b>
          <b>User Email</b>
          <b className="">User Delete</b>
        </div>
      </div>
      {allUsers.map((user, index) => {
        return (
          <div
            className="grid grid-cols-[3fr_3fr_1fr] items-center gap-2 py-1 px-2 border text-sm"
            key={index}
          >
            <p className="py-3 px-2">{user.name}</p>
            <p className="">{user.email}</p>
            <p
              className="text-red-500 cursor-pointer"
              onClick={() => handelDelete(user._id)}
            >
              Delete
            </p>
          </div>
        );
      })}
    </div>
  );
};

export default UsersList;
