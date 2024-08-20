import { useState } from "react";
import { FaUserCircle, FaCaretDown } from "react-icons/fa";
import { useDashboardContext } from "../Pages/DashboardLayout";
import Wrapper from "../assets/styles/LogoutContainer";
import ProfilePage from "../Pages/ProfilePage";
import { useNavigate } from "react-router-dom";

const LogoutContainer = () => {
  const [showLogout, setShowLogout] = useState(false);
  const { user, logoutUser } = useDashboardContext();
  const navigate = useNavigate(); 

  const goToProfilePage = () => {
   navigate("/Dashboard/profile"); // Adjust the route based on your setup
    setShowLogout(false); // Close the dropdown after navigating
  };

  return (
    <Wrapper>
      <button
        type="button"
        className="btn logout-btn"
        onClick={() => setShowLogout(!showLogout)}
      >
      {user.avatar? (
      <img src={user.avatar} alt='avatar' className='img'/>
      ) : (
        <FaUserCircle />
      )}
        {user?.name}
        <FaCaretDown />
      </button>
      <div className={showLogout ? "dropdown show-dropdown" : "dropdown"}>
        <button type="button" className="dropdown-btn" onClick={goToProfilePage}>
          Profile
        </button>
        <button type="button" className="dropdown-btn" onClick={logoutUser}>
          Logout
        </button>
      </div>
    </Wrapper>
  );
};
export default LogoutContainer;
