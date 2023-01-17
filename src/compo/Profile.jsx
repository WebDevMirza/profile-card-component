import ProfileImg from "../assets/images/image-victor.jpg";
import "./Profile.css";

const Profile = () => {
  return (
    <>
      <div className="container">
        <div className="profile-card">
          <img src={ProfileImg} alt="user's profile image" />
          <div className="profile-body">
            <h1>
              Victor Crest <span>26</span>
            </h1>
            <p>London</p>
            <div className="line"></div>
            <div className="profile-stat">
              <ul>
                <li className="stat">80K</li>
                <li className="stat-d">Followers</li>
              </ul>

              <ul>
                <li className="stat">803K</li>
                <li className="stat-d">Likes</li>
              </ul>

              <ul>
                <li className="stat">1.4K</li>
                <li className="stat-d">Photos</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Profile;
