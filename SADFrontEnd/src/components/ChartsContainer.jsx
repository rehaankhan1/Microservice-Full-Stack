import { useState } from "react";

import BarChart from './BarChart';
import AreaChart from './AreaChart';
import Wrapper from '../assets/styles/ChartsContainer';


const ChartsContainer = ({data}) => {
  const [barChart, setBarChart] = useState(true)
  return <Wrapper>
    <h3>Monthly Application Count</h3>
    <button type ='button' onClick={ ()=> setBarChart(!barChart)}>
      {barChart? 'Area Chart': 'Bar Chart'}
    </button>
    {barChart? <BarChart data ={data} />:<AreaChart data={data}/>}
  </Wrapper>
   };

export default ChartsContainer