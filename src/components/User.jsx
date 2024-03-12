import React from "react";
import Button from "./Button";
import { userService } from "../../services/userService";

function User({ user, removeUser }) {
  return (
    <tr>
      <td>{user.id}</td>
      <td>{user.username}</td>
      <td>{user.email}</td>
      <td>
        <img src={user.avatar} width="100px" height="100px" />
      </td>
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
