import "./Navbar.css";
export default function Navbar({ theme, handleChange }) {
  return (
    <div className={`Navbar ${theme ? "dark" : "light"}`}>
      <nav className="navbar navbar-expand-lg ">
        <div className="container-fluid">
          <a className="navbar-brand" href="#">
            Sports
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <i className="fa-solid fa-bars"></i>
          </button>
          <div className="collapse navbar-collapse" id="navbarNavAltMarkup">
            <div className="navbar-nav ms-auto">
              <a className="nav-link" href="#">
                About
              </a>
              <a className="nav-link" href="#">
                Contact
              </a>
              <a className="nav-link toggle" href="#">
                Switch to {theme ? "Light" : "Dark"} Theme
                <div className="form-check form-switch">
                  <input
                    className="form-check-input"
                    type="checkbox"
                    role="switch"
                    id="flexSwitchCheckDefault"
                    onChange={handleChange}
                  />
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </div>
  );
}
