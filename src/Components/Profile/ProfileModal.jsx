import { Button, Form, Input, Modal } from "antd";
import React from "react";

const ProfileModal = ({ openAddModel, setOpenAddModel }) => {
  const initialFormValues = {
    fullName: "Nadir Hossain",
    email: "nadirhossain336@gmail.com",
    mobile_number: "01756953936",
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
          <h1 className="my-3 text-lg font-semibold ">Edit Profile</h1>
          <Form
            name="normal_login"
            className="login-form"
            initialValues={initialFormValues}
            style={{ width: "100%", height: "fit-content" }}
            onFinish={handleSubmit}
          >
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
                    height: "52px",
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
                    height: "52px",
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
                  type="text"
                  placeholder="Enter Phone Number"
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

            <div style={{ marginBottom: "10px" }}>
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="email"
              >
                Birth Of Date
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="birthDate">
                <Input
                  type="date"
                  //   placeholder="Enter Phone Number"
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

            <div style={{ marginBottom: "10px" }}>
              <label
                style={{ display: "block", marginBottom: "5px" }}
                htmlFor="email"
              >
                Location
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="location">
                <Input
                  type="text"
                  placeholder="312 3rd St. Albany, New York 12206, USA"
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

export default ProfileModal;
