
import { useState, useEffect } from "react";
import axios from "axios";
import Swal from "sweetalert2";
import "./Navbar.css";
import Landingpage from "./Landingpage";

const Main = () => {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [profileimage, setProfileimage] = useState("");
  const [role, setRole] = useState("");
  // const [profileData, setProfileData] = useState(); 

  // Fetch Profile Data
  // const fetchProfileData = async () => {
  //   try {
  //     const token = localStorage.getItem("authToken"); 
  //     const response = await axios.get(
  //       "https://b855-2405-201-301d-f871-a9ed-bf3a-3673-ee6d.ngrok-free.app/api/getprofile",
  //       {
  //         headers: {
  //           Authorization: `Bearer ${token}`, 
  //         },
  //       }
  //     );
  //     setProfileData(response.data);
  //     console.log(profileData.profileimage);
  //   } catch (error) {
  //     console.error("Error fetching profile data:", error);
  //     Swal.fire({
  //       title: "Error!",
  //       text:
  //         "An error occurred while fetching profile data: " +
  //         (error.response?.data?.message || "Something went wrong"),
  //       icon: "error",
  //       confirmButtonText: "Ok",
  //     });
  //   }
  // };
  

  // useEffect(() => {
  //   fetchProfileData(); 
  // }, []);

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
        "http://64.227.135.224:5001//signup",
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
      const response = await axios.post(
        "http://64.227.135.224:5001/login",
        { email, password }
      );
  
      if (response.status === 200) {
        console.log(response.data);
        const token = response.data.token; 
        localStorage.setItem("authToken", token); 
        setRole(response.data.role);
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
      console.error("error", error);
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
                <a href="" className="nav-item nav-link nav-link-fade-up">
                  About
                </a>
                <a href="" className="nav-item nav-link nav-link-fade-up">
                  Photos
                </a>
                <a href="/chat" className="nav-item nav-link nav-link-fade-up">
                  Chat
                </a>
                {role === "female" && (
                  <a href="" className="nav-item nav-link nav-link-fade-up">
                    Male
                  </a>
                )}
                {role === "male" && (
                  <a href="" className="nav-item nav-link nav-link-fade-up">
                    Female
                  </a>
                )}
                <div className="nav-item dropdown">
                  <a
                    href="#"
                    className="nav-link dropdown-toggle"
                    data-bs-toggle="dropdown"
                  >
                    Events
                  </a>
                  <div className="dropdown-menu m-0">
                    {/* <a href="feature.html" className="dropdown-item">Features</a>
                  <a href="pricing.html" className="dropdown-item">Pricing</a>
                  <a href="blog.html" className="dropdown-item">Blog</a>
                  <a href="testimonial.html" className="dropdown-item">Testimonial</a> */}
                    <a href="404.html" className="dropdown-item">
                      404 Page
                    </a>
                  </div>
                </div>
                <a
                  href="contact.html"
                  className="nav-item nav-link nav-link-fade-up"
                >
                  Contact Us
                </a>
                <div className="wrappers  mx-2">
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
                      <i className="fa-solid fa-magnifying-glass"></i>
                    </button>
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
              <div className="flexbox-right mx-3">
              <div>
  <div className="profile-section">
    <img 
    src="img/girl2.png"
      alt=''
      className="img-fluid rounded-circle" 
    />
    {/* <h2>{profileData?.username}</h2>
    <p>{profileData?.email}</p> */}
  </div>
</div>

</div>
              <div className="flexbox-right mx-3">
              <div>
  {/* <div className="profile-section">
    <img 
    src={profileimage}
      alt={profileData?.username} 
      className="img-fluid rounded-circle" 
    />
    <h2>{profileData?.username}</h2>
    <p>{profileData?.email}</p>
  </div> */}
</div>

</div>

            </div>
          </nav>
        </div>
      </div>
      <Landingpage />
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
                    <a href="#">Forgot Password?</a>
                  </div>
                  <button type="submit" className="btn nav-btn text-white mt-3">
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
                  <div className="profile-upload-circle bg-light">
                    
                    {/* <box-icon name="plus" type="solid" className="px-2 img-plus" /> */}
                  </div>
                </label>
              </div>
                <p className="text-darks text-center mt-5 pt-3">Click on the profile image to upload and set your picture </p>
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
                    <a href="#" className="text-danger">Forgot Password?</a>
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

