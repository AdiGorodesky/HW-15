import Button from "./Button";
import { NavLink } from "react-router-dom";
import { useUser } from "../context/AuthProvider";

const Header = () => {
  const { handleLogout, user } = useUser();

  const getNavLinkClassName = (props) => {
    if (props.isActive) return "active";
    return;
  };

  if (!user)
    return (
      <header>
        <h2 className="logo">Students</h2>
      </header>
    );

  return (
    <header>
      <h2 className="logo">Students</h2>
      <nav>
        <ul>
          {user.isAdmin ? (
            <li>
              <NavLink className={getNavLinkClassName} to="/Admin">
                Admin
              </NavLink>
            </li>
          ) : null}
          <li>
            <NavLink className={getNavLinkClassName} to="/">
              Home Page
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/login">
              Login
            </NavLink>
          </li>
          <li>
            <NavLink className={getNavLinkClassName} to="/signup">
              Sign Up
            </NavLink>
          </li>
          <li className="user-info">
            {user ? (
              <>
                <h3>Hello, {user.username}</h3>
                <Button onClick={() => handleLogout()}>Logout</Button>
              </>
            ) : null}
          </li>
        </ul>
      </nav>
    </header>
  );
};

export default Header;
