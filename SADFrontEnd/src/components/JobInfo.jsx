import Wrapper from "../assets/styles/JobInfo";

const JobInfo = ({ icon, text, link }) => {
  return (
    <Wrapper>
      <span className="job-icon">{icon}</span>
      <span className="job-text">
        {link ? (
          <a
            href={link}
            className="job-link"
            target="_blank"
            rel="noopener noreferrer"
          >
            Click Here
          </a>
        ) : (
          text
        )}
      </span>
    </Wrapper>
  );
};

export default JobInfo;
