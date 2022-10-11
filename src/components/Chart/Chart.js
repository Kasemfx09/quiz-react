import React from 'react';
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';


const Chart = ({totalQuestion}) => {
    const {name, total} = totalQuestion;
    const data = [{name: name, total: total,}];

 
    return (   
      <BarChart width={600} height={300} data={data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#ccc" strokeDasharray="5 5" />
      <Bar dataKey="total" fill="#8884d8" barSize={30} />
    </BarChart>
   
    );
    
};

export default Chart;