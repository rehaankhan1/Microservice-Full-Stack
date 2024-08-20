import { FaTimes } from "react-icons/fa";
import Wrapper from "../assets/styles/MobileSidebar";
import Logo from "./Logo";
import { useDashboardContext } from "../Pages/DashboardLayout";
import NavLinks from "./NavLinks";

const MobileSidebar = () => {
  const { showSidebar, toggleSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <button type="button" className="closebtn" onClick={toggleSidebar}>
            <FaTimes />
          </button>
          <header className="mobilelogo">
            <Logo />
            <NavLinks />
          </header>
        </div>
      </div>
    </Wrapper>
  );
};

export default MobileSidebar;
