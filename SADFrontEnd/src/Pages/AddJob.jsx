import { FormRow, FormRowSelect, SubmitBtn } from "../components";
import Wrapper from "../assets/styles/DashboardFormPage";
import { useOutletContext } from "react-router-dom";
import { JOB_STATUS, JOB_TYPE } from "../Utils/constants";
import { Form,  redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch2 from "../Utils/customFetch2";
import DOMPurify from "dompurify";
import { format } from "date-fns";
import { FlipCard } from "../components";

export const action = async ({ request }) => {
  const formData = await request.formData();
  const data = Object.fromEntries(formData);
  try {
    console.log(data);
    await customFetch2.post("/jobs", data);
    toast.success("Job added successfully !");
    return redirect("/dashboard/alljobs");
  } catch (error) {
    toast.error(error?.response?.data?.msg);
    return error;
  }
};

const AddJob = () => {
  const { user } = useOutletContext();
  //const navigation = useNavigation();
  const isSubmitting = navigation.state === "submitting";

  const handleSubmit = async (event) => {
    event.preventDefault();

    const form = event.currentTarget;
    const formData = new FormData(form);

    // Get the sanitized link using DOMPurify
    const sanitizedLink = DOMPurify.sanitize(formData.get("jobLink"));

    // Rest of your form submission logic...
  };
  return (
    <>
    <Wrapper>
      <Form method="post" className="form">
        <h4 className="form-title">Add your applied job details here :</h4>
        <div className="form-center">
          <FormRow type="text" name="position"  required/>
          <FormRow type="text" name="company"  required/>
          <FormRow
            type="text"
            labelText="job location*"
            name="jobLocation"
            defaultValue={user.location}
            required
          />
          <FormRowSelect
            labelText="job status*"
            name="jobStatus"
            defaultValue={JOB_STATUS.PENDING}
            list={Object.values(JOB_STATUS)}
          />
          <FormRowSelect
            labelText="job type*"
            name="jobType"
            defaultValue={JOB_TYPE.FULL_TIME}
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
            defaultValue="No link added"
          />
          <FormRow
            type="textarea"
            labelText="Add Note"
            name="jobNote"
            rows={9}
            defaultValue="Type here"
          />
          <SubmitBtn formBtn/>
        </div>
      </Form>
    </Wrapper>
    <div className="flipcard">
      <FlipCard/>
    </div>
    </>
  );
};

export default AddJob;
