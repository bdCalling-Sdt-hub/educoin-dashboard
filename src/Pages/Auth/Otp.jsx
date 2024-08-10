import { Button, Form, Input } from "antd";
import React, { useState } from "react";
import toast from "react-hot-toast";
import OTPInput from "react-otp-input";
import { useNavigate, useParams } from "react-router-dom";
import { useEmailVerifyMutation, useForgotPasswordMutation } from "../../redux/slices/authSlice";

const Otp = () => {
  const navigate = useNavigate();
  const [otp, setOtp] = useState("");
  const { email } = useParams()
  const [emailVerify, {isLoading}] = useEmailVerifyMutation()
  const [forgotPassword,] = useForgotPasswordMutation()

  const handleResendEmail = async () => {
    try {
        await forgotPassword({ email: email  }).unwrap().then((result)=>{
            if (result?.success) {
                toast.success(result.message);
                setOtp("")
            }
        });
        
    } catch (error) {
        toast.error(error.data.message || "An unexpected server error occurred");
    }
  };

  const handleVerifyOtp = async () => {
    try {
        await emailVerify({ email: email, oneTimeCode: Number(otp) }).unwrap().then((result)=>{
            if (result?.success) {
              console.log(result)
                toast.success(result.message);
                navigate(`/update-password/${result.data}`);
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
      <div
        style={{
          width: "630px",
          background: "white",
          borderRadius: "12px",
          padding: "90px 57px",
        }}
      >
        <h1
          style={{
            fontSize: "32px",
            color: "#6A6D7C",
            marginBottom: "13px",
            textAlign: "center",
          }}
        >
          Check your email
        </h1>
        <p
          style={{ width: "380px", color: "#B8B8B8", margin: "0 auto 0 auto" }}
        >
          We sent a reset link to{" "}
          <span style={{ color: "#545454" }}> contact@dscode...com </span>
          enter 6 digit code that mentioned in the email
        </p>
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            marginTop: "30px",
          }}
        >
          <OTPInput
            value={otp}
            onChange={setOtp}
            numInputs={4}
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
        </div>
        <Button
          onClick={handleVerifyOtp}
          block
          htmlType="submit"
          style={{
            height: "52px",
            fontWeight: "400px",
            fontSize: "18px",
            color: "white",
            background: "#1A4F73",
            marginTop: "30px",
            border: "none",
            outline: "none",
            marginBottom: "20px",
          }}
        >
          {isLoading ? "Verifing" : "Verify"}
        </Button>
        <p
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
          }}
        >
          Didn’t receive code?
          <p
            onClick={handleResendEmail}
            style={{
              color: "#1A4F73",
              textDecoration: "underline",
              cursor: "pointer",
            }}
          >
            Resend{" "}
          </p>
        </p>
      </div>
    </div>
  );
};

export default Otp;
