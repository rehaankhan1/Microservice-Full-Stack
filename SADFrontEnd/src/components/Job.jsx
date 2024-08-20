import {
  FaLocationArrow,
  FaBriefcase,
  FaCalendarAlt,
  FaLink,
} from "react-icons/fa";
import { Link, Form } from "react-router-dom";
import Wrapper from "../assets/styles/Job";
import JobInfo from "./JobInfo";
import { format as formatDate } from "date-fns";

const Job = ({
  _id,
  position,
  company,
  jobLocation,
  jobType,
  jobDate,
  jobStatus,
  jobLink,
}) => {
  const formattedJobDate = formatDate(new Date(jobDate), "yyyy-MM-dd");

  return (
    <Wrapper>
      <header>
        <div className="main-icon">{company.charAt(0)}</div>
        <div className="info">
          <h2>{company}</h2>
          <p>{position}</p>
        </div>
        <div className={`status ${jobStatus}`}>{jobStatus}</div>

        {/* <div className="qrCode">QR</div> */}
      </header>
      <div className="content">
        <div className="content-center">
          <JobInfo icon={<FaLocationArrow />} text={jobLocation} />
          <JobInfo icon={<FaCalendarAlt />} text={formattedJobDate} />
          <JobInfo icon={<FaBriefcase />} text={jobType} />
          <JobInfo icon={<FaLink />} text="Job Link" link={jobLink} />
        </div>
        <footer className="actions">
          <Link to={`../edit/${_id}`} className="btn edit-btn">EDIT</Link>
          <Form method="post" action={`../delete/${_id}`}>
            <button type="submit" className="btn delete-btn">
              DELETE
            </button>
          </Form>
        </footer>
      </div>
    </Wrapper>
  );
};

export default Job;
