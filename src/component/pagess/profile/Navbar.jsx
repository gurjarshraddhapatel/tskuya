

const Navbar = () => {
  return (
    <div>
      <div>
        <div className="container-fluid header position-relative overflow-hidden p-0 ">
          <nav
            className="navbar navbar-expand-lg fixed-top navbar-light px-4 px-lg-5 py-3 py-lg-0"
            id="navv"
          >
            <a href="index.html" className="navbar-brand p-0">
              <h1 className="display-6 m-0 nav-brand">
                <img src="img/logo.png" className="img-fluid nav-logo" alt="" />
              </h1>
            </a>
            <button
              className="navbar-toggler"
              type="button"
              data-bs-toggle="collapse"
              data-bs-target="#navbarCollapse"
            >
              <span className="fa fa-bars" />
            </button>
            <div className="collapse navbar-collapse" id="navbarCollapse">
              <div className="navbar-nav ms-auto menu3 navbar py-0">
                <a href="" className="nav-item nav-link">
                  Home
                </a>
                <a href="/profile" className="nav-item nav-link">
                  Profile
                </a>
                <a href="" className="nav-item nav-link nav-link-fade-up">
                  About
                </a>
                <a href="" className="nav-item nav-link nav-link-fade-up">
                  Photos
                </a>
                <a href="/chat" className="nav-item nav-link nav-link-fade-up">
                  Chat
                </a>

                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Dashboard
                  </a>
                  <div className="dropdown-menu m-0">
                    <a href="/dashboard" className="dropdown-item">
                      Admin
                    </a>
                  </div>
                </div>
                <a
                  href="contact.html"
                  className="nav-item nav-link nav-link-fade-up"
                >
                  Contact Us
                </a>
                <div className="wrappers ">
                  <div className="searchBar">
                    <input
                      id="searchQueryInput"
                      type="text"
                      name="searchQueryInput"
                      placeholder="Search"
                    />
                    <button
                      id="searchQuerySubmit"
                      type="submit"
                      name="searchQuerySubmit"
                    >
                      <i className="fa-solid  fa-magnifying-glass fa-magnifying-glassw"></i>
                    </button>
                  </div>
                </div>
              </div>
              <div className="flexbox-right mx-4 nav-item dropdown">
                <div>
                  <div className="profile-section ">
                    <a className="profile-picture  dropdown-toggle">
                      <img
                        src="/img/girls/girl6.png"
                        className="img-fluid rounded-circle w-100 dropdown-toggle"
                        data-bs-toggle="dropdown"
                        width="100%"
                        height="100%"
                        alt=""
                      />
                    </a>

                    <div className="dropdown-menu mx-0 mt-4">
                      <a href="/myprofile" className="dropdown-item">
                        My Profile
                      </a>
                      <a href="/" className="dropdown-item">
                        Followers
                      </a>
                      <a href="/" className="dropdown-item">
                        Following
                      </a>
                      <a href="/" className="dropdown-item">
                        setting
                      </a>
                      <a href="/" className="dropdown-item">
                        Logout
                      </a>
                    </div>
                  </div>
                </div>
              </div>
              <a
                className="btn nav-btn rounded-pill text-white py-2 px-4"
                data-bs-toggle="modal"
                data-bs-target="#staticBackdrop"
              >
                Log In
              </a>
            </div>
          </nav>
        </div>
      </div>
    </div>
  )
}

export default Navbar
