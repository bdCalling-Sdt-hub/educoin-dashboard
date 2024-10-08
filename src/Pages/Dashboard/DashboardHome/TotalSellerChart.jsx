import React from "react";
import {
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const TotalSellerChart = ({data}) => {

  return (
    <div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="student" />
          <Tooltip />
          <Area type="monotone" dataKey="student" stroke="#1A4F73" fill="#FF8811" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
};

export default TotalSellerChart;
