import { ChartsContainer, StatsContainer } from "../components";
import customFetch2 from "../Utils/customFetch2";
import { useLoaderData } from "react-router-dom";

export const loader = async () => {
try {
  const response = await customFetch2.get('/jobs/stats')
  
  return response.data;
  
} catch (error) {
  return error;
  
}
};

const StatsPage = () => {
  const {defaultStats, monthlyApplications} = useLoaderData();
console.log(defaultStats, monthlyApplications);
  let average = 0;
  let applicationsThisMonth = 0;
  if(monthlyApplications?.length > 1){
    let sum =0;
    monthlyApplications.map(a => {
      sum += a.count
    })
    average = Math.floor(sum/monthlyApplications.length);
    applicationsThisMonth = monthlyApplications[monthlyApplications.length -1].count;
  }
  return ( 
  <>
  <StatsContainer defaultStats={defaultStats}/>
  
    {monthlyApplications?.length >1 && (
      <>
      <ChartsContainer data ={monthlyApplications} />
      <p style={{textAlign: 'center', paddingTop: '20px', fontWeight:'bold'}}>{`You applied to ${applicationsThisMonth} jobs this month. It is ${applicationsThisMonth > average ? 'higher' : 'lower'} than your average of ${average} ${applicationsThisMonth > average ? '👍' : '😥'}`}</p>
      </>
   )} 
  </>
  );
};

export default StatsPage;
