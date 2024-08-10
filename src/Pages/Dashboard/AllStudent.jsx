import React, { useState } from "react";
import BackButton from "./BackButton";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import { Input, Modal, Table } from "antd";
import student from "../../assets/student1.png";
import { FaRegEye } from "react-icons/fa";
import { AiFillEdit } from "react-icons/ai";
import { MdDeleteOutline } from "react-icons/md";
import StudentModal from "../../Components/AllStudent/StudentModal";
import Swal from "sweetalert2";
import { useStudentsQuery } from "../../redux/slices/studentSlice";
import { imageUrl } from "../../redux/api/baseApi";
import moment from "moment";

const AllStudent = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [openActionModel, setOpenActionModel] = useState(false);
  const [actionValue, setActionValue] = useState({});
  const [search, setSearch] = useState("");
  const [page, setPage] = useState(
    new URLSearchParams(window.location.search).get("page") || 1
  );
  const itemsPerPage = 10; 
  const {data: students} = useStudentsQuery({page: page, search: search})

  const handleActionModal = (value) => {
    setOpenActionModel(true);
    setActionValue(value);
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      render: (_, record, index)=><p>{((page - 1) * itemsPerPage) + index + 1}</p>
    },
    {
      title: "Student",
      dataIndex: "student",
      key: "student",
      render: (_, record) => (
        <div className="flex items-center gap-2">
          <img style={{width: 40, height: 40, borderRadius: 4}} src={`${imageUrl}${record?.profile}`} alt={record?.profile} />
          <p> {record?.name} </p>
        </div>
      )
    },

    {
      title: "Class",
      dataIndex: "class",
      key: "class",
    },
    {
      title: "Level",
      dataIndex: "level",
      key: "level",
    },
    {
      title: "Date of Birth",
      dataIndex: "dateOfBirth",
      key: "dateOfBirth",
      render: (_, record)=> <p>{moment(record?.dateOfBirth).format("l")}</p>
    },

    ,
    {
      title: "Action",
      dataIndex: "action",
      key: "action",
      render: (_, record) => <FaRegEye
      size={22}
      className="cursor-pointer"
      onClick={() => {
        handleActionModal(record);
      }}
    />,
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
      <div
        style={{
          background: "white",
          padding: "20px ",
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
            dataSource={students?.data}
            pagination={{
              total: students?.pagination?.total,
              defaultCurrent: parseInt(page),
              onChange: handlePageChange,
            }}
          />
        </div>
        <Modal
          title="Student Details"
          open={openActionModel}
          onCancel={() => setOpenActionModel(false)}
          footer={false}
        >
          <div className=" text-center leading-9">
            <div className="flex justify-center items-center mb-4">
              <img src={`${imageUrl}${actionValue?.profile}`} height={40} width={100} alt="" />
            </div>

            <p className="flex items-center">
              <span className="font-semibold w-[50%] text-left">Name</span>
              <span className="font-semibold ">:</span>
              <span className="ml-6">{actionValue?.name}</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold w-[50%] text-left">Class</span>
              <span className="font-semibold">:</span>
              <span className="ml-6">{actionValue?.class}</span>
            </p>
            <p className="flex items-center">

              <span className="font-semibold w-[50%] text-left">Level</span>
              <span className="font-semibold">:</span>
              <span className="ml-6">{actionValue?.level}</span>
            </p>
            <p className="flex items-center">
              <span className="font-semibold w-[50%] text-left">Date of Birth</span>
              <span className="font-semibold">:</span>
              <span className="ml-6">{moment(actionValue?.dateOfBirth).format("l")}</span>
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
