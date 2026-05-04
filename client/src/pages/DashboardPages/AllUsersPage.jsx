import React from "react";
import DeshbordSidbar from "../../components/DeshbordSidbar";
import UsersList from "../../components/DashboardComponents/UsersList";

const AllUsersPage = () => {
  return (
    <div className="flex items-start">
      <DeshbordSidbar />
      <UsersList />
    </div>
  );
};

export default AllUsersPage;
