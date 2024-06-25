import React, { useEffect, useState } from "react";
import { DownOutlined } from "@ant-design/icons";
import { Dropdown, Space } from "antd";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  Brush,
  AreaChart,
  Area,
  ResponsiveContainer,
} from "recharts";

const data = [
  {
    name: "Jan",
    uv: 4000,
    pv: 2400,
    amt: 2400,
  },
  {
    name: "Feb",
    uv: 3000,
    pv: 1398,
    amt: 2210,
  },
  {
    name: "Mar",
    uv: 2000,
    pv: 9800,
    amt: 2290,
  },
  {
    name: "Apr",
    uv: 2780,
    pv: 3908,
    amt: 2000,
  },
  {
    name: "May",
    uv: 1890,
    pv: 9800,
    amt: 2181,
  },
  {
    name: "Jun",
    uv: 2390,
    pv: 5800,
    amt: 2500,
  },
  {
    name: "Jul",
    uv: 3490,
    pv: 8300,
    amt: 2100,
  },
  {
    name: "Aug",
    uv: 3490,
    pv: 4300,
    amt: 2100,
  },
];

export default function DailyRentChart() {
  const [year, setYear] = useState(2024);

  const items = [
    {
      label: 2023,
      key: "2023",
    },
    {
      label: 2024,
      key: "2024",
    },
    {
      label: 2025,
      key: "2025",
    },
    {
      label: 2026,
      key: "2026",
    },
  ];
  const onClick = ({ key }) => {
    setYear(key);
  };

  /* useEffect(() => {
    if(year !== 2024){
      window.history.pushState(null, "", `?year=${year}`);
    }
  }, [year]);

  useEffect(() => {
    const searchParams = new URLSearchParams(window.location.search);
    const yearParam = searchParams.get('year');
    if (yearParam) {
      const parsedYear = parseInt(yearParam, 10);
      setYear(parsedYear);
    } else {
      window.location.reload();
    }
  }, []); */

  return (
    <div>
      <div
        style={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          paddingBottom: "10px",
          paddingLeft: "10px",
          paddingRight: "5px",
        }}
      >
        <p
          style={{
            marginTop: "10px",
            fontSize: "20px",
            fontWeight: 600,
            marginBottom: "10px",
            color: "black",
          }}
        >
          Teacher Growth
        </p>
        <Dropdown menu={{ items, onClick }}>
          <p
            style={{
              // width: "79px",
              cursor: "pointer",
              color: "#717171",
              border: "1px solid #E9E9E9",
              borderRadius: "4px",
              padding: "4px 12px",
            }}
            onClick={(e) => e.preventDefault()}
          >
            {year}
            <DownOutlined style={{ paddingLeft: "18px" }} color="#717171" />
          </p>
        </Dropdown>
      </div>

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
          <YAxis />
          <Tooltip />
          <Area type="monotone" dataKey="pv" stroke="#1A4F73" fill="#d0daf0" />
        </AreaChart>
      </ResponsiveContainer>
    </div>
  );
}
