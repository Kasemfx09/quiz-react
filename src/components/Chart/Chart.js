import React from 'react';
import { LineChart, Line, CartesianGrid, XAxis, YAxis } from 'recharts';


const Chart = ({totalQuestion}) => {
    const {name, total} = totalQuestion;
    const data = [{name: 'name', total: 'total'}];

   
    return (
        <LineChart width={600} height={300} data={data}>
    <Line type="monotone" dataKey="total" stroke="#8884d8" />
    <CartesianGrid stroke="#ccc" />
    <XAxis dataKey="name" />
    <YAxis />
  </LineChart>
    );
    
};

export default Chart;