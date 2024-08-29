import PropTypes from 'prop-types';
import jwt_decode from 'jwt-decode';

const Photo = ({ token }) => {
    // Initialize user data
    let usersToShow = [];

    try {
        // Decode the token to extract user data
        const decodedToken = jwt_decode(token);
        usersToShow = decodedToken.usersToShow || [];
    } catch (error) {
        console.error('Error decoding token:', error);
    }

    return (
        <div className="photo-gallery">
            {usersToShow.length > 0 ? (
                usersToShow.map((user) => (
                    <div key={user._id} className="profile-card">
                        <img
                            src={user.profileimage || 'https://via.placeholder.com/150'}
                            alt={user.username || 'Profile Image'}
                        />
                        <div className="profile-info">
                            <h2>{user.username || user.email}</h2>
                            <p>Age: {user.age || 'N/A'}</p>
                            <p>Location: {user.location || 'N/A'}</p>
                            <p>Occupation: {user.occupation || 'N/A'}</p>
                            <p>Bio: {user.userbio || 'N/A'}</p>
                            <p>Habits: {user.habits?.length > 0 ? user.habits.join(', ') : 'None'}</p>
                        </div>
                    </div>
                ))
            ) : (
                <p>No users to show.</p>
            )}
        </div>
    );
};

// Prop types validation
Photo.propTypes = {
    token: PropTypes.string.isRequired,
};

export default Photo;
