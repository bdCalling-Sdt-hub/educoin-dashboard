import { Form, Input, Modal, Table, Button, Upload } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import BackButton from "./BackButton";
import category1 from "../../assets/category1.png";
import category2 from "../../assets/category2.png";
import category3 from "../../assets/category3.png";
import category4 from "../../assets/category4.png";
import { render } from "react-dom";
import { AiFillEdit } from "react-icons/ai";
import Swal from "sweetalert2";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";

const data = [
  {
    key: "1",
    category: "Home Work",
    photo: category1,
    date: "09 /12 /2024",
  },
  {
    key: "2",
    category: "Participant",
    photo: category2,
    date: "19 /12 /2024",
  },
  {
    key: "3",
    category: "Behaviour",
    photo: category3,
    date: "06 /12 /2024",
  },
  {
    key: "4",
    category: "Test",
    photo: category4,
    date: "10 /12 /2024",
  },
  {
    key: "5",
    category: "Home Work",
    photo: category1,
    date: "09 /12 /2024",
  },
  {
    key: "6",
    category: "Behaviour",
    photo: category2,
    date: "09 /12 /2024",
  },
];

const MakeAdmin = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  console.log(openAddModel);
  const [reFresh, setReFresh] = useState("");
  const [search, setSearch] = useState("");
  const [image, setImage] = useState(null);
  const [form] = Form.useForm();
  useEffect(() => {
    if (openAddModel?.key) {
      form.setFieldsValue(openAddModel);
    }
  }, [form, openAddModel]);

  if (reFresh) {
    setTimeout(() => {
      setReFresh("");
    }, 1500);
  }

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  const onChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleDelete = async (value) => {
    Swal.fire({
      title: "Are you sure you want to delete this content ?",
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
      title: "Category Name",
      dataIndex: "category",
      key: "category",
    },
    {
      title: "Image",
      dataIndex: "photo",
      key: "photo",
      render: (_, record) => <img src={record?.photo} alt="" />,
    },
    {
      title: "Date",
      dataIndex: "date",
      key: "date",
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div className="flex gap-2 items-center">
          <button onClick={() => setOpenAddModel(record)}>
            <AiFillEdit size={22} />
          </button>

          <MdOutlineDelete
            onClick={() => handleDelete(record)}
            className="cursor-pointer"
            size={25}
          />
        </div>
      ),
    },
  ];

  const onFinish = (value) => {
    console.log(value);
  };
  return (
    <div>
      <BackButton link="/" />
      <div
        style={{
          margin: "24px 0",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#555555" }}>
            All Category
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
                + Add New Category
              </button>
            </div>
          </div>
        </div>

        <Table columns={columns} dataSource={data} pagination={false} />

        <Modal
          centered
          open={openAddModel}
          onCancel={() => setOpenAddModel(false)}
          width={600}
          footer={false}
        >
          <div>
            <h1
              style={{
                fontSize: "20px",
                fontWeight: 600,
                color: "#555555",
                marginBottom: "15px",
                marginTop: "10px",
              }}
            >
              Create Category
            </h1>
            <Form
              form={form}
              name="normal_login"
              initialValues={{
                remember: true,
              }}
              onFinish={onFinish}
            >
              <div style={{ marginBottom: "16px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Category Name
                </label>
                <Form.Item
                  style={{ marginBottom: 0 }}
                  name="category"
                  rules={[
                    {
                      required: true,
                      message: "Please input User Full Name",
                    },
                  ]}
                >
                  <Input
                    placeholder="Enter Full Name"
                    type="text"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "52px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>

              <div style={{ marginBottom: "16px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor=""
                >
                  Date{" "}
                </label>
                <Form.Item name="date" style={{ marginBottom: 0 }}>
                  <Input
                    type="date"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "52px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>

              <div>
                <p className="text-[#292828] py-1"> Profile Picture </p>
                <Form.Item>
                  <input
                    type="file"
                    id="img"
                    onChange={onChange}
                    style={{ display: "none" }}
                  />
                  <div className="border border-gray-200 w-full h-[220px] p-5  flex justify-center items-center">
                    <label htmlFor="img" className="w-full mx-auto ">
                      {image ? (
                        <img src={URL.createObjectURL(image)} alt="" />
                      ) : (
                        <h1 className=" text-xl text-center ">
                          {" "}
                          + Upload Image
                        </h1>
                      )}
                    </label>
                  </div>
                </Form.Item>
              </div>

              <div style={{}} className=" text-end ">
                <Form.Item>
                  <Button
                    type="primary"
                    htmlType="submit"
                    block
                    style={{
                      border: "none",
                      height: "51px",
                      background: "#1A4F73",
                      width: "30%",
                      color: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  >
                    Save
                  </Button>
                </Form.Item>
              </div>
            </Form>
          </div>
        </Modal>
      </div>
    </div>
  );
};

export default MakeAdmin;
