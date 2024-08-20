import { Link, useRouteError } from "react-router-dom";
import Wrapper from "../assets/styles/ErrorPage";
import img from "../assets/images/notFound.svg";
const Error = () => {
  const error = useRouteError();
  if (error.status === 404) {
    return (
      <Wrapper>
        <h3> Oops! Page not found.</h3>
        <img src={img} alt="Not-Found image -> A Cat" />
        <p>
          Sorry, we can not find the page you are looking for please return to
          home page.
        </p>
        <Link to="/dashboard"> Back to Home</Link>
      </Wrapper>
    );
  }
  return (
    <Wrapper>
      <div>
        <h2>Something went wrong !</h2>
      </div>
    </Wrapper>
  );
};

export default Error;
