import { useState, useEffect } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import Swal from "sweetalert2";
import "./Navbar.css";
import Landingpage from "./Landingpage";
import Profile from "./Profile";

const Main = () => {
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
      {/* Navbar start */}

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
            <div className="navbar-nav ms-auto bg-white menu3 navbar py-0">
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
                  <a href="" className="dropdown-item">
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
            <div className="flexbox-right mx-4 nav-item dropdown my-lg-0 my-2 ">
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
              className="btn nav-btn rounded-pill text-white py-2 px-4 my-lg-0 my-2"
              data-bs-toggle="modal"
              data-bs-target="#staticBackdrop"
            >
              Log In
            </a>
          </div>
        </nav>
        {/* Hero Header Start */}
        <div className="hero-header header overflow-hidden px-lg-4 ">
          <div className="rotate-img ">
            <img src="img/sty-1.png " className="img-fluid w-100" alt="" />
            <div className="rotate-sty-2" />
          </div>
          <div className="row gy-5 align-items-center ">
            <div className="col-lg-6 wow fadeInLeft px-5" data-wow-delay="0.1s">
              <h5>こんにちは</h5>
              <h6 className="mt-4 bolder">私たちのウェブサイトへようこそ</h6>
              <h1
                className="display-4 text-dark mt-5 mb-4 wow fadeInUp"
                data-wow-delay="0.3s"
              >
                メールを収益に変える
              </h1>
              <p className="fs-4 mb-4 wow fadeInUp " data-wow-delay="0.5s">
                ナンバーワンの電子メール マーケティングと自動化で新規顧客を獲得
                開封数やクリック数を増やす方法を推奨するブランド* 販売
              </p>
              <a
                href="#"
                className="btn nav-btn text-white  rounded-pill py-3 px-5 wow fadeInUp"
                data-wow-delay="0.7s"
              >
                始めましょう
              </a>
            </div>
            <div className="col-lg-6  wow fadeInRight  " data-wow-delay="0.2s">
              <img
                src="img/beautiful-flat-illustration-happy-couple.png"
                className="img-fluid w-100 h-100"
                alt=""
              />
            </div>
          </div>
        </div>
        {/* Hero Header End */}
      </div>

      <Landingpage />

      {/* Shoow role based data======================================================== */}
      <Profile usersToShow={usersToShow} />
      {/* Shoow role based data======================================================== END */}

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
                  <div className="remember-forgot   mt-3">
                    <label htmlFor="" >
                      <input type="checkbox" className="text-primary " />
                      <b className="text-dark  ">Remember me</b>
                    </label>
                    <a href="#" className="">
                      Forgot Password?
                    </a>
                  </div>
                  <button type="submit" className="btn nav-btn text-white mt-3">
                    Login
                  </button>
                  <div className="register-link ">
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
                  <button type="submit" className="btn nav-btn text-white mt-3">
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
    </>
  );
};

export default Main;
