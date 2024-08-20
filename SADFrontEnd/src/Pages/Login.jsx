import Logo from "../components/Logo";
import {
  Form,
  redirect,
  useNavigate,
  Link,
  useActionData,
} from "react-router-dom";
import Wrapper from "../assets/styles/registerandsignup";
import FormRow from "../components/FormRow/";
import { toast } from "react-toastify";
import customFetch from "../Utils/customFetch";
import { SubmitBtn } from "../components";
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
const Login = () => {
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
  //const errors = useActionData();
  
  return (
    <Wrapper>
      <Form method="post" className="form">
        <Logo />
        <h4>Login </h4>
        {/* {errors?.msg && <p style={{"red"}}>{errors.msg}</p>} */}
        <FormRow type="email" name="email" defaultvalue="ankush@gmail.com" />
        <FormRow type="password" name="password" defaultvalue="secret123" />
        <SubmitBtn />
        <button type="button" className="btn btn-block" onClick={loginDemoUser}>
          Explore without Login
        </button>
        <p>
          Not a member yet?
          <Link to="/register" className="member-btn">
            Register
          </Link>
        </p>
      </Form>
    </Wrapper>
  );
};

export default Login;
