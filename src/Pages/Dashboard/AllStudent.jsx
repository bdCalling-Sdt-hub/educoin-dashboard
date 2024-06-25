import React, { useEffect, useRef, useState } from "react";
import BackButton from "./BackButton";

import { FiEye, FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Calendar, Dropdown, Input, Modal, Slider, Table } from "antd";
import student from "../../assets/student1.png";
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import StudentModal from "../../Components/AllStudent/StudentModal";
import { render } from "react-dom";
import Swal from "sweetalert2";
// import TeacherModal from "../../Components/TotalTeacher/TeacherModal";

const data = [
  {
    key: "1",
    name: "Tushar",
    email: "tushar@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",
    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "2",
    name: "Rahman",
    email: "rahman@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "3",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "4",
    name: "jusef",
    email: "jusef@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "5",
    name: "Asad",
    email: "asad@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "6",
    name: "Fahim",
    email: "fahim@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "7",
    name: "Nadir",
    email: "nadir@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "8",
    name: "Tushar",
    email: "tushar@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "9",
    name: "Rahman",
    email: "rahman@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "10",
    name: "Rafsan",
    email: "rafsan@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "11",
    name: "jusef",
    email: "jusef@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "12",
    name: "Asad",
    email: "asad@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "13",
    name: "Fahim",
    email: "fahim@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "14",
    name: "Nadir",
    email: "nadir@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "15",
    name: "Asad",
    email: "asad@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "16",
    name: "Fahim",
    email: "fahim@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
  {
    key: "17",
    name: "Nadir",
    email: "nadir@gmail.com",
    photo: student,
    location: "17/5 Maniknagar ,Dhaka",

    contact: "01812038436999",
    code: "435425",
    totalStudent: "200",
  },
];

const AllStudent = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openActionModel, setOpenActionModel] = useState(false);
  const [actionValue, setActionValue] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );

  const handleActionModal = (value) => {
    console.log(value);
    setOpenActionModel(true);
    setActionValue(value);
  };

  const handleDelete = (id) => {
    Swal.fire({
      title: "Are you sure?",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#3085d6",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
      cancelButtonText: "No",
    }).then((result) => {
      if (result.isConfirmed) {
        Swal.fire({
          title: "Deleted!",
          text: "Your file has been deleted.",
          icon: "success",
          showConfirmButton: false,
          timer: 1500,
        });
      }
    });
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
    },
    {
      title: "Name",
      dataIndex: "name",
      key: "name",
      render: (_, record) => (
        <div className="flex items-center gap-1">
          {" "}
          <img src={record?.photo} alt={record?.photo} />{" "}
          <p> {record?.name} </p>
        </div>
      ),
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

    ,
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => (
        <div className="w-full">
          {" "}
          <div className=" flex gap-2 p-2 px-3 border border-[#1A4F73] rounded-xl items-center w-1/2  text-[#1A4F73] ">
            <button>
              <FaRegEye
                size={22}
                onClick={() => {
                  handleActionModal(record);
                }}
              />
            </button>
            <button onClick={() => setOpenAddModel(true)}>
              <AiFillEdit size={22} />
            </button>
            <button>
              {" "}
              <MdDeleteOutline
                size={22}
                onClick={() => handleDelete(record?.key)}
              />{" "}
            </button>
          </div>
        </div>
      ),
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
            marginRight: "20px",
          }}
        >
          <h1
            style={{
              fontSize: "24px",
              fontWeight: 600,
              color: "#555555",
              paddingLeft: "20px",
            }}
          >
            All Student
          </h1>
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
        <Modal
          title="Basic Modal"
          open={openActionModel}
          onCancel={() => setOpenActionModel(false)}
          footer={false}
        >
          <div className=" text-center leading-9">
            <div className="flex justify-center items-center">
              <img src={actionValue?.photo} height={40} width={100} alt="" />
            </div>

            <p>
              <span className="font-semibold">Name :</span>{" "}
              <span>{actionValue?.name}</span>
            </p>
            <p>
              <span className="font-semibold">Code :</span>{" "}
              <span>{actionValue?.code}</span>
            </p>
            <p>
              <span className="font-semibold">Email :</span>{" "}
              <span>{actionValue?.email}</span>
            </p>
            <p>
              <span className="font-semibold">Location :</span>{" "}
              <span>{actionValue?.location}</span>
            </p>
            <p>
              <span className="font-semibold">Contact Number :</span>{" "}
              <span>{actionValue?.contact}</span>
            </p>
          </div>
        </Modal>

        <StudentModal
          openAddModel={openAddModel}
          setOpenAddModel={setOpenAddModel}
        />
      </div>
    </div>
  );
};

export default AllStudent;
