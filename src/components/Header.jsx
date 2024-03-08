import Button from "./Button";

const Header = ({ handleLogout, loggedInUser }) => {
  return (
    <header>
      <div className="logo">Students</div>
      <div className="user-info">
        {loggedInUser ? (
          <>
            <h3>Hello, {loggedInUser.username}</h3>
            <Button onClick={() => handleLogout()}>Logout</Button>
          </>
        ) : null}
      </div>
    </header>
  );
};

export default Header;
