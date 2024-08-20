import { FormRow, FormRowSelect, SubmitBtn } from '../components';
import Wrapper from '../assets/styles/DashboardFormPage';
import { useLoaderData, useParams } from 'react-router-dom';
import { JOB_STATUS, JOB_TYPE } from '../Utils/constants';
import { Form, redirect } from 'react-router-dom';
import { toast } from 'react-toastify';
import customFetch2 from '../Utils/customFetch2';
import { useQuery } from '@tanstack/react-query';
import { format } from "date-fns";


export const loader =async({params})=>{
  try{
    const {data} =await customFetch2.get(`./jobs/${params.singleJobId}`);
    return data;
  } catch(error){
    toast.error(error?.response?.data?.msg);
    return redirect('/dashboard/alljobs')
  }
};


export const action = async ({ request,params }) => {
  const formData = await request.formData()
  const data = Object.fromEntries(formData)
  try {
    await customFetch2.patch(`/jobs/${params.singleJobId}`, data);
    toast.success("Job updated successfully !");
    return redirect("/dashboard/alljobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};


const EditJob = () => {
  const {job} =useLoaderData();
  
  return <Wrapper>
        <Form method="post" className="form">
        <h4 className="form-title">Edit job :</h4>
        <div className="form-center">
          <FormRow type="text" name="position" defaultValue={job.position} required/>
          <FormRow type="text" name="company" defaultValue={job.company} required/>
          <FormRow
            type="text"
            labelText="job location*"
            name="jobLocation"
            defaultValue={job.jobLocation}
            required
          />
          <FormRowSelect
            labelText="job status*"
            name="jobStatus"
            defaultValue={job.jobStatus}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type*"
            name="jobType"
            defaultValue={job.jobType}
            list={Object.values(JOB_TYPE)}
          />
          <FormRow
            type="date"
            labelText="Add Date*"
            name="jobDate"
            defaultValue={format(new Date(), "yyyy-MM-dd")}
          />
          <FormRow
            type="text"
            labelText="Add your job link"
            name="jobLink"
            placeholder="Paste your link here"
            defaultValue={job.JOB_TYPE}/>
          <FormRow
            type="textarea"
            labelText="Add Note"
            name="jobNote"
            rows={9}
            defaultValue="Type here"
          />
          <SubmitBtn formBtn />
        </div>
      </Form>
  </Wrapper>;
};

export default EditJob;
