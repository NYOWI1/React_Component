import { NavLink } from "react-router-dom";

function PageCard({ title, message }) {
  return (
    <div className="page-container">
      <nav className="navbar">
        <NavLink to="/greetings">Greetings</NavLink>
        <NavLink to="/profiles">Profile</NavLink>
        <NavLink to="/my-hobbies">My Hobbies</NavLink>
      </nav>

      <div className="content-area">
        <div className="card">
          <h1>{title}</h1>
          <p>{message}</p>
        </div>
      </div>
    </div>
  );
}

export default PageCard;
