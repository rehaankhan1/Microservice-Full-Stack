import Wrapper from "../assets/styles/Sidebar";
import NavLinks from "./NavLinks";
import Logo from "./Logo";
import { useDashboardContext } from "../Pages/DashboardLayout";
const Sidebar = () => {
  const { showSidebar } = useDashboardContext();
  return (
    <Wrapper>
      <div
        className={
          showSidebar ? "sidebar-container show-sidebar" : "sidebar-container"
        }
      >
        <div className="content">
          <header>
            <Logo />
          </header>
          <NavLinks isSidebar />
          
        </div>
      </div>
    </Wrapper>
  );
};

export default Sidebar;