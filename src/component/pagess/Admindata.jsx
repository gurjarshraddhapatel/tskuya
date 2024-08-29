import PropTypes from "prop-types";
import "./Profile.css";

const Admindata = ({ usersToShow }) => {
  if (!usersToShow || usersToShow.length === 0) {
    return <div className="px-5">No users to display</div>; // Display a message or some fallback UI
  }

  return (
    <div className="table-responsive">
      <table className="table table-hover table-nowrap">
        <thead className="thead-light">
          <tr>
            <th scope="col">Name</th>
            <th scope="col">Gender</th>
            <th scope="col">Email</th>
            <th scope="col">Height</th>
            <th scope="col">Occupation</th>
            <th scope="col">Bio</th>
            <th scope="col">Location</th>
            <th scope="col" />
          </tr>
        </thead>
        <tbody>
          {usersToShow.map((user) => (
            <tr key={user.id}>
              <td>
                <img
                  alt={user.username}
                  src={user.profileimage || "/img/girl2.png"}
                  className="avatar avatar-sm rounded-circle me-2"
                />
                <a className="text-heading font-semibold" href="#">
                  {user.username}
                </a>
              </td>
              <td>{user.role}</td>
              <td>
                <a className="text-heading font-semibold" href="#">
                  {user.email}
                </a>
              </td>
              <td>{user.height || "Not mention"}</td>
              <td>{user.occupation || "Not mention"}</td>
              <td>{user.userbio || "Not mention"}</td>
              <td>{user.location || "Not mention"}</td>
              <td className="text-end">
                <a href="#" className="btn btn-sm btn-neutral">
                  View
                </a>
                <button
                  type="button"
                  className="btn btn-sm btn-square btn-neutral text-danger-hover"
                >
                  <i className="bi bi-trash" />
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

// Define propTypes for validation
Admindata.propTypes = {
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
export default Admindata;
