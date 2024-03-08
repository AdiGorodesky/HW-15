import React from "react";
import Button from "./Button";

function User({ user, removeUser }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>{user.avatar}</td>
      <td>{user.createdAt}</td>
      <td>
        <Button onClick={() => removeUser(user.id)} className="remove-btn">
          Remove
        </Button>
      </td>
    </tr>
  );
}

export default User;
