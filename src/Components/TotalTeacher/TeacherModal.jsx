import { Button, Form, Input, Modal, Upload } from "antd";
import React, { useState } from "react";
import OTPInput from "react-otp-input";

const TeacherModal = ({ openAddModel, setOpenAddModel }) => {
  const [otp, setOtp] = useState("");
  const [image, setImage] = useState(null);
  console.log(image);

  const onChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
  };

  const handleSubmit = (values) => {
    console.log(values);
    Swal.fire({
      position: "center",
      icon: "success",
      title: "Updated Successfully",
      showConfirmButton: false,
      timer: 1500,
    });
  };

  const normFile = (e) => {
    if (Array.isArray(e)) {
      return e;
    }
    return e?.fileList;
  };

  return (
    <div>
      <Modal
        centered
        open={openAddModel}
        onCancel={() => setOpenAddModel(false)}
        width={500}
        footer={false}
      >
        <div>
          <h1 className="my-3 text-lg font-semibold "> Add New Teacher </h1>
          <Form
            name="normal_login"
            className="login-form"
            //   initialValues={initialFormValues}
            style={{ width: "100%", height: "fit-content" }}
            onFinish={handleSubmit}
          >
            <div className="grid grid-cols-2 gap-5">
              <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Full Name
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="fullName">
                  <Input
                    placeholder="Enter Your Full Name"
                    type="text"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "40px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                      width: "100%",
                    }}
                  />
                </Form.Item>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor=""
                >
                  Email
                </label>
                <Form.Item name="email" style={{ marginBottom: 0 }}>
                  <Input
                    type="text"
                    placeholder="Enter Email"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "40px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label
                  style={{ display: "block", marginBottom: "5px" }}
                  htmlFor="email"
                >
                  Phone Number
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="mobile_number">
                  <Input
                    type="number"
                    placeholder="Enter Phone Number"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "40px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>

              <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Location
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="location">
                  <Input
                    type="text"
                    placeholder="312 3rd St. Albany, New York 12206, USA"
                    style={{
                      border: "1px solid #E0E4EC",
                      height: "40px",
                      background: "white",
                      borderRadius: "8px",
                      outline: "none",
                    }}
                  />
                </Form.Item>
              </div>
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
                      <h1 className=" text-xl text-center "> + Upload Image</h1>
                    )}
                  </label>
                </div>
              </Form.Item>
            </div>

            <div style={{ marginBottom: "20px" }}>
              <label
                style={{ display: "block", marginBottom: "6px" }}
                htmlFor="email"
              >
                Create 6 Digit Code:
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="code">
                <OTPInput
                  value={otp}
                  onChange={setOtp}
                  numInputs={6}
                  inputStyle={{
                    height: "44px",
                    width: "44px",
                    borderRadius: "8px",
                    marginRight: "16px",
                    fontSize: "20px",
                    border: "1px solid #A9A9A9",
                    color: "#2B2A2A",
                    outline: "none",
                  }}
                  renderInput={(props) => <input {...props} />}
                />
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
  );
};

export default TeacherModal;
