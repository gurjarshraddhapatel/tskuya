import Admindata from "./Admindata";
import "./dashboard.css";
import PropTypes from "prop-types";
// import Navbar from "./profile/Navbar";
import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Navbar.css";

const Dashboard = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const [role, setRole] = useState("");
  // const [tokenData, setTokenData] = useState(null);
  const [usersToShow, setUsersToShow] = useState([]);
  const navigate = useNavigate();

  // Handle Registration
  const handleSubmit = async (e) => {
    e.preventDefault();
    const formData = new FormData();
    formData.append("username", username);
    formData.append("email", email);
    formData.append("password", password);
    formData.append("role", role);
    formData.append("profileimage", profileimage);

    try {
      const response = await axios.post(
        "http://64.227.135.224:5001/signup",
        formData,
        { headers: { "Content-Type": "multipart/form-data" } }
      );
      console.log(response.data);

      if (response.status !== 200) {
        Swal.fire({
          title: "Success!",
          text: "Registration successful!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Registration failed. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error("Error posting data:", error.response?.data);
      Swal.fire({
        title: "Error!",
        text:
          "An error occurred: " +
          (error.response?.data?.message || "Something went wrong"),
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  const getUserRole = () => {
    return "female";
  };

  useEffect(() => {
    const userRole = getUserRole();
    setRole(userRole);
  }, []);

  const handleImageChange = (e) => {
    setProfileimage(e.target.files[0]);
  };

  // Handle Login
  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post("http://64.227.135.224:5001/login", {
        email,
        password,
      });

      if (response.status === 200) {
        const userData = response.data;

        console.log(response.data);
        setUsersToShow(response.data.usersToShow || []);
        setRole(userData.role);

        // Redirect to dashboard if role is admin
        if (userData.role === "admin") {
          navigate("/dashboard");
        }
        Swal.fire({
          title: "Success!",
          text: "Login successful!",
          icon: "success",
          confirmButtonText: "Ok",
        });
      } else {
        Swal.fire({
          title: "Failed!",
          text: "Login failed. Please try again.",
          icon: "error",
          confirmButtonText: "Ok",
        });
      }
    } catch (error) {
      console.error("Error during login:", error);
      Swal.fire({
        title: "Error!",
        text:
          "An error occurred: " +
          (error.response?.data?.message || "Something went wrong"),
        icon: "error",
        confirmButtonText: "Ok",
      });
    }
  };

  return (
    <>
      <div>
        {/* Banner */}
       
        {/* Dashboard */}
        <div className="d-flex flex-column flex-lg-row h-lg-full bg-surface-secondary">
          {/* Vertical Navbar */}
          <nav
            className="navbar show navbar-vertical h-lg-screen navbar-expand-lg px-0 py-3 navbar-light bg-white border-bottom border-bottom-lg-0 border-end-lg"
            id="navbarVertical"
          >
            <div className="container-fluid">
              {/* Toggler */}
              <button
                className="navbar-toggler ms-n2"
                type="button"
                data-bs-toggle="collapse"
                data-bs-target="#sidebarCollapse"
                aria-controls="sidebarCollapse"
                aria-expanded="false"
                aria-label="Toggle navigation"
              >
                <span className="navbar-toggler-icon" />
              </button>
              {/* Brand */}
              <a className="navbar-brand py-lg-2 mb-lg-5 px-lg-6 me-0" href="#">
                <img src="img/logo.png" alt="..." />
              </a>
              {/* User menu (mobile) */}
              <div className="navbar-user d-lg-none">
                {/* Dropdown */}
                <div className="dropdown">
                  {/* Toggle */}
                  <a
                    href="#"
                    id="sidebarAvatar"
                    role="button"
                    data-bs-toggle="dropdown"
                    aria-haspopup="true"
                    aria-expanded="false"
                  >
                    <div className="avatar-parent-child">
                      <img
                        alt="Image Placeholder"
                        src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                        className="avatar avatar- rounded-circle"
                      />
                      <span className="avatar-child avatar-badge bg-success" />
                    </div>
                  </a>
                  {/* Menu */}
                  <div
                    className="dropdown-menu dropdown-menu-end"
                    aria-labelledby="sidebarAvatar"
                  >
                    <a href="#" className="dropdown-item">
                      Profile
                    </a>
                    <a href="#" className="dropdown-item">
                      Settings
                    </a>
                    <a href="#" className="dropdown-item">
                      Billing
                    </a>
                    <hr className="dropdown-divider" />
                    <a href="#" className="dropdown-item">
                      Logout
                    </a>
                  </div>
                </div>
              </div>
              {/* Collapse */}
              <div className="collapse navbar-collapse" id="sidebarCollapse">
                {/* Navigation */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="/">
                      <i className="bi bi-house" /> Dashboard
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-bar-chart" /> Analitycs
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-chat" /> Messages
                      <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-auto">
                        6
                      </span>
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-bookmarks" /> Collections
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-people" /> Users
                    </a>
                  </li>
                </ul>
                {/* Divider */}
                <hr className="navbar-divider my-5 opacity-20" />
                {/* Navigation */}
                <ul className="navbar-nav mb-md-4">
                  <li>
                    <div
                      className="nav-link text-xs font-semibold text-uppercase text-muted ls-wide"
                      href="#"
                    >
                      Contacts
                      <span className="badge bg-soft-primary text-primary rounded-pill d-inline-flex align-items-center ms-4">
                        13
                      </span>
                    </div>
                  </li>
                  <li>
                    <a href="#" className="nav-link d-flex align-items-center">
                      <div className="me-4">
                        <div className="position-relative d-inline-block text-white">
                          <img
                            alt="Image Placeholder"
                            src="https://images.unsplash.com/photo-1548142813-c348350df52b?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            className="avatar rounded-circle"
                          />
                          <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                        </div>
                      </div>
                      <div>
                        <span className="d-block text-sm font-semibold">
                          Marie Claire
                        </span>
                        <span className="d-block text-xs text-muted font-regular">
                          Paris, FR
                        </span>
                      </div>
                      <div className="ms-auto">
                        <i className="bi bi-chat" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link d-flex align-items-center">
                      <div className="me-4">
                        <div className="position-relative d-inline-block text-white">
                          <span className="avatar bg-soft-warning text-warning rounded-circle">
                            JW
                          </span>
                          <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-success rounded-circle" />
                        </div>
                      </div>
                      <div>
                        <span className="d-block text-sm font-semibold">
                          Michael Jordan
                        </span>
                        <span className="d-block text-xs text-muted font-regular">
                          Bucharest, RO
                        </span>
                      </div>
                      <div className="ms-auto">
                        <i className="bi bi-chat" />
                      </div>
                    </a>
                  </li>
                  <li>
                    <a href="#" className="nav-link d-flex align-items-center">
                      <div className="me-4">
                        <div className="position-relative d-inline-block text-white">
                          <img
                            alt="..."
                            src="https://images.unsplash.com/photo-1610899922902-c471ae684eff?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=3&w=256&h=256&q=80"
                            className="avatar rounded-circle"
                          />
                          <span className="position-absolute bottom-2 end-2 transform translate-x-1/2 translate-y-1/2 border-2 border-solid border-current w-3 h-3 bg-danger rounded-circle" />
                        </div>
                      </div>
                      <div>
                        <span className="d-block text-sm font-semibold">
                          Heather Wright
                        </span>
                        <span className="d-block text-xs text-muted font-regular">
                          London, UK
                        </span>
                      </div>
                      <div className="ms-auto">
                        <i className="bi bi-chat" />
                      </div>
                    </a>
                  </li>
                </ul>
                {/* Push content down */}
                <div className="mt-auto" />
                {/* User (md) */}
                <ul className="navbar-nav">
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-person-square" /> Account
                    </a>
                  </li>
                  <li className="nav-item">
                    <a className="nav-link" href="#">
                      <i className="bi bi-box-arrow-left" /> Logout
                    </a>
                  </li>
                </ul>
              </div>
            </div>
          </nav>
          {/* Main content */}
          <div className="h-screen flex-grow-1 overflow-y-lg-auto">
            {/* Header */}
            <header className="bg-surface-primary border-bottom pt-6">
              <div className="container-fluid">
                <div className="mb-npx">
                  <div className="row align-items-center">
                    <div className="col-sm-6 col-12 mb-4 mb-sm-0">
                      {/* Title */}
                      <h1 className="h2 mb-0 ls-tight">Dashboard</h1>
                    </div>
                    {/* Actions */}
                    <div className="col-sm-6 col-12 text-sm-end">
                      <div className="mx-n1">
                        {/* <a
                          href="#"
                          className="btn d-inline-flex btn-sm btn-neutral border-base mx-1"
                        >
                          <span className=" pe-2">
                            <i className="bi bi-pencil" />
                          </span>
                          <span>Edit</span>
                        </a> */}
                        <a
                          className="btn nav-btn rounded-pill text-white py-2 px-5"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop"
                        >
                          LogIn
                        </a>
                      </div>
                    </div>
                  </div>
                  {/* Nav */}
                  <ul className="nav nav-tabs mt-4 overflow-x border-0">
                    <li className="nav-item ">
                      <a href="#" className="nav-link active">
                        All files
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link font-regular">
                        Shared
                      </a>
                    </li>
                    <li className="nav-item">
                      <a href="#" className="nav-link font-regular">
                        File requests
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </header>

            {/* Main */}
            <main className="py-6 bg-surface-secondary">
              <div className="container-fluid">
                {/* Card stats */}
                <div className="row g-6 mb-6">
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                            New Users
                            </span>
                            <span className="h3 font-bold mb-0">$750.90</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-tertiary text-white text-lg rounded-circle">
                              <i className="bi bi-credit-card" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />
                            13%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Female
                            </span>
                            <span className="h3 font-bold mb-0">215</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-primary text-white text-lg rounded-circle">
                              <i className="bi bi-people" />
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />
                            30%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Male
                            </span>
                            <span className="h3 font-bold mb-0">1.400</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-info text-white text-lg rounded-circle">
                             
                              <i className="fa-solid fa-user"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-danger text-danger me-2">
                            <i className="bi bi-arrow-down me-1" />
                            -5%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="col-xl-3 col-sm-6 col-12">
                    <div className="card shadow border-0">
                      <div className="card-body">
                        <div className="row">
                          <div className="col">
                            <span className="h6 font-semibold text-muted text-sm d-block mb-2">
                              Amount
                            </span>
                            <span className="h3 font-bold mb-0">95%</span>
                          </div>
                          <div className="col-auto">
                            <div className="icon icon-shape bg-warning text-white text-lg rounded-circle">
                            <i className="fa-solid fa-arrow-up-wide-short"></i>
                            </div>
                          </div>
                        </div>
                        <div className="mt-2 mb-0 text-sm">
                          <span className="badge badge-pill bg-soft-success text-success me-2">
                            <i className="bi bi-arrow-up me-1" />
                            10%
                          </span>
                          <span className="text-nowrap text-xs text-muted">
                            Since last month
                          </span>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div className="card shadow border-0 mb-7">
                  <div className="card-header">
                    <h5 className="mb-0">All Data</h5>
                  </div>
                  {/* Shoow role based data======================================================== */}
                  <Admindata usersToShow={usersToShow} />
                  {/* Shoow role based data======================================================== END */}

                  <div className="card-footer border-0 py-5">
                    <span className="text-muted text-sm">
                      Showing 10 items out of 250 results found
                    </span>
                  </div>
                </div>
              </div>
            </main>
          </div>
        </div>

        {/* Modal Login */}
        <div
          className="modal fade"
          id="staticBackdrop"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog">
            <div className="modal-content">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>

              <div className="modal-body">
                <div className="wrapper">
                  <form onSubmit={handleLogin} action="">
                    <h1>Login</h1>
                    <div className="input-box ">
                      <input
                        type="text"
                        className="bg-light"
                        placeholder="Username"
                        id="loginUsername"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                        required=""
                      />
                      <box-icon type="solid" name="user" />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        className="bg-light"
                        placeholder="Password"
                        id="loginPassword"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                        required=""
                      />
                      <box-icon name="lock-alt" type="solid" />
                    </div>
                    <div className="remember-forgot mt-3">
                      <label htmlFor="">
                        <input type="checkbox" className="text-primary" />
                        <b className="text-dark">Remember me</b>
                      </label>
                      <a href="#" className="text-danger">
                        Forgot Password?
                      </a>
                    </div>
                    <button
                      type="submit"
                      className="btn nav-btn text-white mt-3"
                    >
                      Login
                    </button>
                    <div className="register-link">
                      <p className="text-dark">
                        Dont have an account?{" "}
                        <a
                          href="#"
                          className="text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop2"
                        >
                          Register
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>

              <div className="modal-footer">
                <button type="button" className="btn btn-infos text-white px-5">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* Modal Register */}
        <div
          className="modal fade "
          id="staticBackdrop2"
          data-bs-backdrop="static"
          data-bs-keyboard="false"
          tabIndex={-1}
          aria-labelledby="staticBackdropLabel"
          aria-hidden="true"
        >
          <div className="modal-dialog ">
            <div className="modal-content mm">
              <div className="modal-header">
                <button
                  type="button"
                  className="btn-close"
                  data-bs-dismiss="modal"
                  aria-label="Close"
                />
              </div>
              <div className="modal-body">
                <div className="wrapper">
                  <form onSubmit={handleSubmit}>
                    {/* <h1>Registration</h1> */}
                    <div className="input-box ">
                      <label
                        htmlFor="profileImageUpload"
                        className="profile-upload-label"
                      >
                        <input
                          type="file"
                          id="profileImageUpload"
                          className="profile-upload-input"
                          required
                          onChange={handleImageChange}
                        />
                        <div className="profile-upload-circle bg-light"></div>
                      </label>
                    </div>
                    <p className="text-darks text-center mt-5 pt-3">
                      Click on the profile image to upload and set your picture{" "}
                    </p>
                    <div className="input-box  ">
                      <input
                        type="email"
                        className="bg-light"
                        placeholder="Email"
                        required
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                      />
                      <box-icon name="envelope" type="solid" />
                    </div>
                    <div className="input-box">
                      <input
                        type="text"
                        className="bg-light"
                        placeholder="Username"
                        required
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <box-icon type="solid" name="user" />
                    </div>
                    <div className="input-box">
                      <input
                        type="password"
                        className="bg-light"
                        placeholder="Password"
                        required
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                      />
                      <box-icon name="lock-alt" type="solid" />
                    </div>

                    <div className="input-box">
                      <select
                        className="bg-light  "
                        required
                        value={role}
                        onChange={(e) => setRole(e.target.value)}
                      >
                        <option value="" disabled>
                          Select Role
                        </option>
                        <option value="male">Male</option>
                        <option value="female">Female</option>
                        <option value="guest">Guest</option>
                        <option value="admin">Admin</option>
                      </select>
                      <box-icon name="user-check" type="solid" />
                    </div>
                    <div className="remember-forgot mt-3">
                      <label>
                        <input type="checkbox" className="text-primary" />
                        <b className="text-dark">Remember me</b>
                      </label>
                    </div>
                    <button
                      type="submit"
                      className="btn nav-btn text-white mt-3"
                    >
                      Register
                    </button>
                    <div className="register-link">
                      <p className="text-dark">
                        Already have an account?{" "}
                        <a
                          href="#"
                          className="text-danger"
                          data-bs-toggle="modal"
                          data-bs-target="#staticBackdrop2"
                        >
                          Login
                        </a>
                      </p>
                    </div>
                  </form>
                </div>
              </div>
              {/* <div className="modal-footer">
              <button
                type="button"
                className="btn btn-info text-white px-5"
                data-bs-dismiss="modal"
              >
                Close
              </button>
            </div> */}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

Dashboard.propTypes = {
  usersToShow: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      username: PropTypes.string,
      profileimage: PropTypes.string,
    })
  ).isRequired,
};

export default Dashboard;
