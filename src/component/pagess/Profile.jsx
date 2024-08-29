import PropTypes from "prop-types";
import "./Profile.css";

const Profilecards = ({ usersToShow }) => {


  return (
    <div className="container-fluid">
      <div className="row p-5">
        {usersToShow.map((user) => (
          <div className="col-md-4" key={user._id}>
            <div className="profilecards">
              <div className="ims">
                <img
                  src={user.profileimage || "default-image-url.jpg"}
                  alt={user.username || "Profile Image"}
                />
              </div>
              <div className="infos">
                <div className="name">
                  <h2>{user.username || "No username"}</h2>
                  <h4>{user.email || "No email"}</h4>
                </div>
                <p className="pt-3">
                  {user.userbio || "I'm a Front End Developer, follow me to be the first to see my new work."}
                </p>
                <div className="profilecards-content">
                  <li className="d-flex profilestats">
                    <h3>
                      <i className="fa-solid fa-user profilecard-icon"></i>
                    </h3>
                    <h4 className="text-capitalize mx-2">{user.role}</h4>
                  </li>
                  <li className="d-flex">
                    <h3 className="mx-2">
                      <i className="fa-solid fa-location-dot profilecard-icon"></i>
                    </h3>
                    <h4>{user.location || "Location"}</h4>
                  </li>
                  <li className="d-flex ">
                    <h3 className="mx-1 ">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        height="24"
                        className="profilecard-icon"
                        viewBox="0 96 960 960"
                        width="24"
                      >
                        <path d="M480 936 280 736l56-56 104 104V472L336 576l-56-56 200-200 200 200-56 56-104-104v312l104-104 56 56-200 200ZM160 416V216h64v200h536V216h64v200H160ZM480 776Zm0-296Z" />
                      </svg>
                    </h3>
                    <h4 className="pt-1">{user.height || "Height"}</h4>
                  </li>
                </div>
                <div className="links">
                  <button className="follow nav-btn mx-2">Follow</button>
                  <button className="view">View profile</button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

// Define propTypes for validation
Profilecards.propTypes = {
  usersToShow: PropTypes.arrayOf(
    PropTypes.shape({
      _id: PropTypes.string.isRequired,
      profileimage: PropTypes.string,
      username: PropTypes.string,
      email: PropTypes.string,
      age: PropTypes.number,
      location: PropTypes.string,
      occupation: PropTypes.string,
      userbio: PropTypes.string,
    })
  ).isRequired,
};
export default Profilecards;