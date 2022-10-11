import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// import Chart from "../Chart/Chart";

const Statistics = () => {
  const totalQuestions = useLoaderData();  
  
  
  return (
    <div className="py-6">   

    <BarChart width={600} height={300} data={totalQuestions.data}>
      <XAxis dataKey="name" stroke="#8884d8" />
      <YAxis />
      <Tooltip />
      <CartesianGrid stroke="#bbb" strokeDasharray="5 5" />
      <Bar dataKey="total" fill="#8884d8" barSize={30} />
    </BarChart>
    </div>
  );
};

export default Statistics;
