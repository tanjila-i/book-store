import React from "react";
import DeshbordSidbar from "../../components/DeshbordSidbar";
import CreateBook from "../../components/DashboardComponents/CreateBook";

const CreateBookPostPage = () => {
  return (
    <div className="flex items-start">
      <DeshbordSidbar />
      <CreateBook />
    </div>
  );
};

export default CreateBookPostPage;
