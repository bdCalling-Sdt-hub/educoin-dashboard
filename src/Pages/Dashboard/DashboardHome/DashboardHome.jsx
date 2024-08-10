import { Col, Row } from "antd";
import React from "react";
import "./DashboardHome.css";
import TotalSellerChart from "./TotalSellerChart";
import TeacherChart from "./TeacherChart";
import teacher from "../../../assets/teacher.png";
import student from "../../../assets/student.png";
import { useOverviewQuery } from "../../../redux/slices/homeSlice";

function DashboardHome() {
  const {data: overview} = useOverviewQuery({});

  const data = [
    {
      name: "Total Teacher",
      count: overview?.data?.totalTeacher,
      icon: <img src={teacher} alt="" />,
      bgColor: "#E2F7FC",
    },
    {
      name: "Total Student",
      count: overview?.data?.totalStudent,
      icon: <img src={student} alt="" />,
      bgColor: "#FFE3C7",
    },
  ];

  return (
    <div>
      <Row gutter={24} className="bg-white rounded-xl">
        {data.map((item, index) => (
          <Col
            key={index}
            xs={{ span: 24 }}
            sm={{ span: 24 }}
            md={{ span: 12 }}
            lg={{ span: 12 }}
          >
            <div className="income-card ">
              <div
                style={{
                  background: `${item.bgColor}`,
                  marginLeft: "40px",
                  borderRadius: "100%",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  marginRight: "40px",
                }}
              >
                {item?.icon}
              </div>
              <div>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "600",
                    color: "#50525D",
                    marginBottom: "10px",
                  }}
                >
                  {item.name}
                </p>
                <p
                  style={{
                    fontSize: "24px",
                    fontWeight: "500",
                    color: "#6A6D7C",
                  }}
                >
                  {item.count} +
                </p>
              </div>
            </div>
          </Col>
        ))}
      </Row>

      <div
        style={{
          marginTop: "20px",
          marginBottom: "15px",
          display: "grid",
          gridTemplateColumns: "auto auto auto",
          gap: "20px",
        }}
      >
        <div
          style={{
            borderRadius: "15px",
            padding: "20px",
            backgroundColor: "#fff",
          }}
        >
          <TeacherChart data={overview?.data?.teacherGrowth}   />
        </div>

        <div
          style={{
            borderRadius: "15px",
            backgroundColor: "#fff",

            padding: "10px 20px 20px 20px",
          }}
        >
          <TotalSellerChart data={overview?.data?.studentGrowth}  />
        </div>
      </div>
    </div>
  );
}

export default DashboardHome;
