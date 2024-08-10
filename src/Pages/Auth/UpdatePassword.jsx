import { Button, Form, Input } from "antd";
import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import { useResetPasswordMutation } from "../../redux/slices/authSlice";
import toast from "react-hot-toast";

const UpdatePassword = () => {
  const navigate = useNavigate();
  const [resetPassword, {isLoading}] = useResetPasswordMutation()
  const {token} = useParams()

  
  const onFinish = async (values) => {
    try {
        await resetPassword({ data: values, token: token }).unwrap().then((result)=>{
            if (result?.success) {
                toast.success(result.message);
                navigate("/login");
            }
        });
        
    } catch (error) {
      console.log(error)
        toast.error(error.data.message || "An unexpected server error occurred");
    }
  };

  return (
    <div
      style={{
        width: "100%",
        background: "#1A4F73",
        height: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Form
        name="normal_login"
        className="login-form"
        initialValues={{
          remember: true,
        }}
        style={{
          width: "570px",
          background: "white",
          borderRadius: "12px",
          padding: "90px 57px",
        }}
        onFinish={onFinish}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Set a new password
        </h1>
        <p
          style={{
            // width: "275px",
            color: "#6A6D7C",
            fontSize: "17px",
            fontWeight: 400,
            textAlign: "center",
          }}
        >
          Create a new password. Ensure it differs from previous ones for
          security
        </p>

        <div style={{ margin: "45px 0 20px 0" }}>
          <label
            style={{ display: "block", color: "#6A6D7C", marginBottom: "5px" }}
            htmlFor=""
          >
            New Password
          </label>
          <Form.Item
            name="newPassword"
            rules={[
              {
                required: true,
                message: "Please input your new Password!",
              },
            ]}
            style={{ marginBottom: 0 }}
          >
            <Input.Password
              type="password"
              placeholder="Enter New password"
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

        <div style={{ marginBottom: "40px" }}>
          <label
            style={{ display: "block", color: "#6A6D7C", marginBottom: "5px" }}
            htmlFor="email"
          >
            Confirm Password
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="confirmPassword"
            rules={[
              {
                required: true,
                message: "Please input your Confirm Password!",
              },
            ]}
          >
            <Input.Password
              type="password"
              placeholder="Enter Confirm password"
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

        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            block
            style={{
              border: "none",
              height: "51px",
              background: "#1A4F73",
              color: "white",
              borderRadius: "8px",
              outline: "none",
              marginTop: "",
            }}
          >
            {isLoading ? "Loading" : "Save & Change"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default UpdatePassword;
