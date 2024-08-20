import Wrapper from "../assets/styles/LandingPage";
import { Link ,  useNavigate,} from "react-router-dom";
import MainImage from "../assets/images/MainImage.svg";
import Logo from "../components/Logo";
import { toast } from "react-toastify";
import customFetch from "../Utils/customFetch";


export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    await customFetch.post("/auth/login", data);
    toast.success("Login successful");
    return redirect("/dashboard");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const LandingPage = () => {
  const navigate = useNavigate()
  const loginDemoUser = async() =>{
    const data = {
      email : 'testuser@gmail.com',
      password:'secret1234',
    }
        try {
          await customFetch.post("/auth/login", data);
          toast.success("Test our application"); 
          navigate('/dashboard')
        } catch (error) {
          toast.error(error?.response?.data?.msg);
        }
      }
  return (
    <Wrapper>
      <nav className="nav">
        <div className="nav-cont">
          <div className="logo-cont">
            <Logo />
          </div>
          <div className="box">
            <Link to="/register" className="btn register-link">
              Register
            </Link>
            <Link to="/Login" className="btn register-link">
              Login
            </Link>
          </div>
        </div>
      </nav>
      <div className="container page">
        <div className="info">
          <h1>
            The only <span>Job Tracking</span> app you need
          </h1>
          <p>
            Streamline your job search with JobVigil – the ultimate web app for
            tracking applied job applications. Effortlessly manage and organize your
            applications online for easy access wherever and whenever needed. Stay on top of updates and take control of your
            career journey!
          </p>
          <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          <h2><b>Explore dashboard feature</b></h2>
        </button>
        </div>
        <img src={MainImage} alt="job hunt" className=" main-img" />
      </div>
    </Wrapper>
  );
};
export default LandingPage;