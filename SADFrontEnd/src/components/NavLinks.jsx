import { useDashboardContext } from "../Pages/DashboardLayout";
import links from "../Utils/links";
import { NavLink } from "react-router-dom";
const NavLinks = ({ isSidebar }) => {
  const { toggleSidebar, user } = useDashboardContext();
  return (
    <div className="nav-links">
      {links.map((links) => {
        const { text, path, icon } = links;
        // user role is not admin then not to show Amin link 
        const {role}=user;
        if(path==='admin' && role !=='admin')return;


        return (
          <NavLink
            to={path}
            key={text}
            className="nav-link"
            onClick={isSidebar ? null : toggleSidebar}
            end
          >
            <span className="icon">{icon}</span>
            {text}
          </NavLink>
        );
      })}
    </div>
  );
};

export default NavLinks;
