import React, { useEffect, useRef, useState } from "react";
import BackButton from "./BackButton";

import { FiEye, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Calendar, Dropdown, Input, Slider, Table } from "antd";
import TeacherModal from "../../Components/TotalTeacher/TeacherModal";

const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "6",
    name: "Fahim",
    email: "fahim@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "8",
    name: "Tushar",
    email: "tushar@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "9",
    name: "Rahman",
    email: "rahman@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "10",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "11",
    name: "jusef",
    email: "jusef@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "12",
    name: "Asad",
    email: "asad@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "13",
    name: "Fahim",
    email: "fahim@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "14",
    name: "Nadir",
    email: "nadir@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "15",
    name: "Asad",
    email: "asad@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "16",
    name: "Fahim",
    email: "fahim@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "17",
    name: "Nadir",
    email: "nadir@gmail.com",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
];

const TotalTeacher = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [search, setSearch] = useState("");
  const [category, setCategory] = useState(
    new URLSearchParams(window.location.search).get("category") || "All"
  );
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "username",
    },
    {
      title: "Email",
      dataIndex: "email",
      key: "email",
    },

    {
      title: "Contact Number ",
      dataIndex: "contact",
      key: "contact",
    },
    {
      title: "Code",
      dataIndex: "code",
      key: "code",
    },

    {
      title: "Total Student",
      dataIndex: "totalStudent",
      key: "totalStudent",
    },
  ];

  const handlePageChange = (page) => {
    setPage(page);
    const params = new URLSearchParams(window.location.search);
    params.set("page", page);
    window.history.pushState(null, "", `?${params.toString()}`);
  };

  return (
    <div>
      <div style={{ marginBottom: "16px" }}>
        <BackButton link="/" />
      </div>
      <div
        style={{
          background: "white",
          padding: "20px",
          borderRadius: "12px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#555555" }}>
            All Teacher
          </h1>
          <div style={{ display: "flex", alignItems: "center", gap: "46px" }}>
            <div
              style={{
                width: "340px",
                height: "40px",
                borderRadius: "8px",
              }}
            >
              <Input
                onChange={(e) => setSearch(e.target.value)}
                placeholder="Search..."
                prefix={<FiSearch size={14} color="#868FA0" />}
                suffix={
                  <IoClose
                    onClick={() => setSearch("")}
                    style={{ cursor: "pointer" }}
                    size={14}
                    color="#2B2A2A"
                  />
                }
                style={{
                  width: "100%",
                  height: "100%",
                  fontSize: "14px",
                }}
                size="middle"
                value={search}
              />
            </div>

            <div>
              <button
                className="text-white text-md font-medium bg-[#1A4F73] p-3 rounded-xl px-5 "
                onClick={() => setOpenAddModel(true)}
              >
                {" "}
                + Add New Teacher
              </button>
            </div>
          </div>
        </div>

        <div>
          <Table
            columns={columns}
            dataSource={data}
            pagination={{
              pageSize: 10,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
            }}
          />
        </div>

        <TeacherModal
          openAddModel={openAddModel}
          setOpenAddModel={setOpenAddModel}
        />
      </div>
    </div>
  );
};

export default TotalTeacher;
