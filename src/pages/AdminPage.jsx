import React, { useState } from "react";
import User from "../components/User";
import { storageService } from "../../services/storageService";

const AdminPage = () => {
  const [users, setUsers] = useState(storageService.getUsers());

  const removeUser = (userId) => {
    const updatedUsers = users.filter((user) => user.id !== userId);
    setUsers(updatedUsers);
    storageService.removeUser(userId);
  };
  return (
    <table className="admin-table">
      <thead>
        <tr>
          <th>ID</th>
          <th>Name</th>
          <th>Email</th>
          <th>Avatar</th>
          <th>Time of Creation</th>
          <th>Action</th>
        </tr>
      </thead>
      <tbody>
        {users.map((user) => (
          <User key={user.id} user={user} removeUser={removeUser} />
        ))}
      </tbody>
    </table>
  );
};

export default AdminPage;
