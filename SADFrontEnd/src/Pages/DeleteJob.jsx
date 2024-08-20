import { redirect } from "react-router-dom";
import { toast } from "react-toastify";
import customFetch2 from "../Utils/customFetch2";

export const action = async ({params})=>{
    try{
      await customFetch2.delete(`/jobs/${params.id}`);
      toast.success('Job deleted succesfully !')
    } catch(error){
      toast.error(error?.response?.data?.msg);
    }
  return redirect('/dashboard/alljobs');
};
