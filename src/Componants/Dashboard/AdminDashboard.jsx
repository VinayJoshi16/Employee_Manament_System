import React from "react";
import Header from "../Other/Header";
import CreateTask from "../Other/CreateTask";
import AllTask from "../Other/Alltask";

const AdminDashboard = ({ handleLogout }) => {
  const adminUser = { firstName: 'Admin' }
  return (
    <div className="h-screen w-full p-10">
      <Header data={adminUser} handleLogout={handleLogout} />
      <CreateTask/>
      <AllTask/>
    </div>
  );
};

export default AdminDashboard;
