import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-md navbar-light bg-light shadow-sm mt-1">
      <Link to="/" className="navbar-brand fw-bold">
      <div className="flex items-center gap-2">
      <img src="/images/logo.png" alt="Logo" className="w-[1px] h-[1px]" width= "100px" height="100px"/>

      <span className="neon-text fw-bold">
  Surreal<span className="text-danger">Jersey</span>
</span>

</div>

      </Link>

      <button
        className="navbar-toggler"
        type="button"
        data-bs-toggle="collapse"
        data-bs-target="#navbarcontents"
      >
        <span className="navbar-toggler-icon"></span>
      </button>

      <div className="collapse navbar-collapse" id="navbarcontents">
        <ul className="navbar-nav me-auto">
          <li className="nav-item">
            <Link to="/addjersey" className="nav-link">Add Jersey</Link>
          </li>
          <li className="nav-item">
            <Link to="/" className="nav-link">Get Jersey</Link>
          </li>
        </ul>

        <ul className="navbar-nav ms-auto">
          <li className="nav-item">
            <Link to="/aboutus" className="nav-link">Our Information</Link>
          </li>
          <li className="nav-item">
            <Link to="/signin" className="btn btn-outline-primary me-2">Log In</Link>
          </li>
          <li className="nav-item">
            <Link to="/signup" className="btn btn-primary">Register</Link>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
