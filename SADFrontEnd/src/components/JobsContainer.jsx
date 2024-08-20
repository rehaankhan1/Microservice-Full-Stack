
import { useAllJobsContext } from "../Pages/AllJobs.jsx";
import React from "react";
import Job from "./Job";
import Wrapper from "../assets/styles/JobsContainer";
import PageBtnContainer from "./PageBtnContainer";
const JobsContainer = () => {
  // context coming from allJobs
  const { data } = useAllJobsContext();
  //destructure data object to get required keys
  const { jobs,totalJobs, numOfPages } = data;

  // when there are no jobs to show
  if (!jobs || jobs.length === 0) {
    return (
      <Wrapper>
        <h2>No jobs to display...</h2>
        <p>Please add a job in "Add Job" to display here</p>
      </Wrapper>
    );
  }

  return (
    <Wrapper>
      {/* to show jobs found */}
      <h1><b>{totalJobs} Job{jobs.length>1 && 's'} found :</b></h1>
      {/* destucturing jobs object from backend */}
      <div className="jobs">
        {jobs.map((job) => (
          <Job key={job._id} {...job} />
        ))}
      </div>
      {numOfPages>1 && <PageBtnContainer/>}
    </Wrapper>
  );
};

export default JobsContainer;
