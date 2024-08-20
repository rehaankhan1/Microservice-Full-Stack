import { Outlet, redirect, useLoaderData, useNavigate } from "react-router-dom";
import Wrapper from "../assets/styles/Dashboard";
import MobileSidebar from "../components/MobileSidebar";
import Sidebar from "../components/Sidebar";
import Navbar from "../components/Navbar";
import { createContext, useState, useContext } from "react";
import { checkDefaultTheme } from "../App";
import customFetch from "../Utils/customFetch";
import customFetch2 from "../Utils/customFetch2";
import { toast } from "react-toastify";

//loaders to pass the data
export const loader = async () => {
  try {
    //to pass the user data to the dashboard through object 'data'
    const { data } = await customFetch2.get("/users/current-user");
    console.log(data);
    return data;
  } catch (error) {
    console.log(error.response.data);
    return redirect("/");
  }
};

//context prop for global use
const DashboardContext = createContext();

const DashboardLayout = () => {
  const { user } = useLoaderData();
  const navigate = useNavigate();
  // for the Sidebar to toggel in mobile view
  const [showSidebar, setShowSidebar] = useState(true);
  // for the Theme to toggel white and black
  const [isDarkTheme, setDarkTheme] = useState(checkDefaultTheme());

  const toggleDarkTheme = () => {
    const newDarkTheme = !isDarkTheme;
    setDarkTheme(newDarkTheme);
    console.log("Dark theme has been toggled !");
    document.body.classList.toggle("dark-theme", newDarkTheme);
    // to access it outside the dashboard page(landing,register,login)
    localStorage.setItem("darkTheme", newDarkTheme);
  };

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  const logoutUser = async () => {
    navigate("/");
    await customFetch.get("/auth/logout");
    toast.success("Logged out successfully !");
  };

  return (
    <DashboardContext.Provider
      value={{
        user,
        showSidebar,
        toggleDarkTheme,
        toggleSidebar,
        logoutUser,
        isDarkTheme,
      }}
    >
      <Wrapper>
        <main className="dashboard">
          <MobileSidebar />
          <Sidebar />
          <div>
            <Navbar />
            <div className="DboardPage">
              <Outlet context={{ user }} />
            </div>
          </div>
        </main>
      </Wrapper>
    </DashboardContext.Provider>
  );
};
// instead of exporting the main content this is a useHook for it
export const useDashboardContext = () => useContext(DashboardContext);
export default DashboardLayout;