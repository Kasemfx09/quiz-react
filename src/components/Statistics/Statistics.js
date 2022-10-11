import React from "react";
import { useLoaderData } from "react-router-dom";
import Chart from "../Chart/Chart";

const Statistics = () => {
  const totalQuestions = useLoaderData();  
  return (
    <div>
      <h2>This is a Statistics oage</h2>
        {
          totalQuestions.data.map(totalQuestion=><Chart key={totalQuestion.id} totalQuestion={totalQuestion}></Chart>)
        }

        
    </div>
  );
};

export default Statistics;
