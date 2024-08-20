import React, { useEffect } from "react";
import { toast } from "react-toastify";
import { JobsContainer, SearchContainer } from "../components";
import customFetch2 from "../Utils/customFetch2";
import { useLoaderData } from "react-router-dom";
import { createContext, useContext } from "react";

const AllJobsContext = createContext();

export const loader = async ({ request }) => {
  const params = Object.fromEntries([...new URL(request.url).searchParams.entries()]);
  try {
    const response = await customFetch2.get("/jobs", { params });
    const data = response.data || {}; 
    return { data, searchValues: { ...params } };
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return { data: {}, searchValues: { ...params } }; 
  }
};

const AllJobs = () => {
  const { data, searchValues } = useLoaderData();
  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await loader({ request: { url: window.location.href } });
        // Update context or state with the fetched data
      } catch (error) {
        console.error("Error fetching data:", error);
      }
    };

    fetchData();
  }, [searchValues]);

  return (
    <>
      <AllJobsContext.Provider value={{ data, searchValues }}>
        <SearchContainer />
        <JobsContainer />
      </AllJobsContext.Provider>
    </>
  );
};

export const useAllJobsContext = () => useContext(AllJobsContext);
export default AllJobs;
