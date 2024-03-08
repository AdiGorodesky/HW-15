import React from "react";
import User from "./User";

function Admin({ users, removeUser }) {
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
}

export default Admin;
