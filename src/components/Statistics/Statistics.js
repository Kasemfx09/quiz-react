import React from "react";
import { useLoaderData } from "react-router-dom";
import { BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid } from 'recharts';
// import Chart from "../Chart/Chart";

const Statistics = () => {
  const totalQuestions = useLoaderData();  
  
  
  return (
    <div className="py-6 bg-sky-300 ">    

      <BarChart className="mx-auto" width={600} height={300} data={totalQuestions.data}>
        <XAxis dataKey="name" stroke="#0b0d79" />
        <YAxis />
        <Tooltip />
        <CartesianGrid stroke="#7173f8" strokeDasharray="5 5" />
        <Bar dataKey="total" fill="#0b0d79" barSize={30} />
      </BarChart>    
    </div>
  );
};

export default Statistics;
