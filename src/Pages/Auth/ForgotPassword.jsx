import { Button, Form, Input, Typography } from "antd";
import React from "react";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";
import { useForgotPasswordMutation } from "../../redux/slices/authSlice";

const ForgotPassword = () => {
  const navigate = useNavigate();
  const [forgotPassword, {isLoading}] = useForgotPasswordMutation()

  const onFinish = async (values) => {
    try {
        await forgotPassword({ email: values?.email  }).unwrap().then((result)=>{
            if (result?.success) {
                toast.success(result.message);
                navigate(`/otp/${values.email}`);
            }
        });
        
    } catch (error) {
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
        className="password-form"
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
            marginBottom: "54px",
            color: "#494949",
            textAlign: "center",
          }}
        >
          Forgot Password
        </h1>

        <div style={{ marginBottom: "24px" }}>
          <label
            htmlFor="email"
            style={{ display: "block", marginBottom: "5px" }}
          >
            {" "}
            Email Address
          </label>
          <Form.Item
            style={{ marginBottom: 0 }}
            name="email"
            id="email"
            rules={[
              {
                required: true,
                message: "Please input your email!",
              },
            ]}
          >
            <Input
              placeholder="Enter your email address"
              type="email"
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
            className="login-form-button"
            block
            style={{
              height: "45px",
              fontWeight: "400px",
              fontSize: "18px",
              background: "#1A4F73",
              color: "white",
              alignSelf: "bottom",
              marginTop: "30px",
            }}
          >
            {isLoading? "Loading": "Send a Code"}
          </Button>
        </Form.Item>
      </Form>
    </div>
  );
};

export default ForgotPassword;
