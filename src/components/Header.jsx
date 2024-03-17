import Button from "./Button";
import { useUser } from "../context/AuthProvider";

const Header = () => {
  const { handleLogout, user } = useUser();
  return (
    <header>
      <div className="logo">Students</div>
      <div className="user-info">
        {user ? (
          <>
            <h3>Hello, {user.username}</h3>
            <Button onClick={() => handleLogout()}>Logout</Button>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
