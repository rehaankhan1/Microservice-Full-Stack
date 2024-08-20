import Wrapper from "../assets/styles/Navbar";
import {
  TbLayoutSidebarLeftExpandFilled,
  TbLayoutSidebarLeftCollapseFilled,
} from "react-icons/tb";
import Logo from "./Logo";
import { useDashboardContext } from "../Pages/DashboardLayout";
import LogoutContainer from "./LogoutContainer";
import ThemeToggle from "./ThemeToggle";

const Navbar = () => {
  // for the toggle sidebar function we will use context function
  const { toggleSidebar, showSidebar } = useDashboardContext();

  return (
    <Wrapper>
      <div className="nav-center">
        <button
          type="button"
          title="Toggle Visiliblity"
          className="toggle-btn"
          onClick={toggleSidebar}
        >
          {showSidebar ? (
            <TbLayoutSidebarLeftCollapseFilled /> // This icon when the sidebar is expanded
          ) : (
            <TbLayoutSidebarLeftExpandFilled /> //  and this when the sidebar is collapsed
          )}
        </button>
        <div>
          <Logo />
          <h1 className="logo-text">
            <b>Dashboard</b>
          </h1>
        </div>
        <div className="btn-container">
          <ThemeToggle />
          <LogoutContainer />
        </div>
      </div>
    </Wrapper>
  );
};

export default Navbar;
