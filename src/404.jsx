import { Button } from "antd";
import React from "react";
import { Link } from "react-router-dom";
import NotFoundImg from "./assets/not-found.png";

function NotFound() {
  return (
    <div
      style={{
        background: "#1A4F73",
        height: "100vh",
        width: "100vw",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        flexDirection: "column",
      }}
    >
      <img src={NotFoundImg} width={700} />
      <p
        style={{
          fontSize: "24px",
          margin: "43px 0",
          fontWeight: 400,
          textAlign: "center",
          color: "white",
        }}
      >
        {" "}
        Looks like you’ve got lost….{" "}
      </p>
      <div className=" ">
        <Button
          className="font-semibold"
          style={{
            width: "200px",
            height: "56px",
            background: "white",
            borderRadius: "8px",
            color: "#1A4F73",
            margin: "0 auto 0 auto",
            border: "none",
            outline: "none",
          }}
        >
          <Link to="/">Back to Dashboard</Link>
        </Button>
      </div>
    </div>
  );
}

export default NotFound;
