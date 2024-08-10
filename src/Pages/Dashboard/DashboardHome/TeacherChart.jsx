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

export default function TeacherChart({data}) {
  return (
    <div>

      <ResponsiveContainer width="100%" height={400}>
        <AreaChart
          width={500}
          height={200}
          data={data}
          // syncId="anyId"
          margin={{
            top: 10,
            right: 30,
            left: 0,
            bottom: 0,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="name" />
          <YAxis dataKey="teacher" />
          <Tooltip />
          <Area type="monotone" dataKey="teacher" stroke="#1A4F73" fill="#d0daf0" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
