import React, { useEffect, useState } from 'react';
import { PieChart, Pie } from "recharts";

interface dataProperty {
  data: Record<string, number>
}

export const PieChartGraph: React.FC<dataProperty> = ({data}) => {
  const [graphData, setGraphDataObj] = useState(new Array<Object>());

  useEffect(() => {
    const dataObj = new Array<Object>();
    Object.entries(data).map((map) => {
      dataObj.push({name: map[0], value: map[1]});
    });
    setGraphDataObj(dataObj);
  }, [data]);

  return (
    <PieChart width={730} height={250}>
        <Pie data={graphData} dataKey="value" labelLine={true} nameKey="name" cx="50%" cy="50%" outerRadius={80} fill="#8884d8" label></Pie>
    </PieChart>
  )
}