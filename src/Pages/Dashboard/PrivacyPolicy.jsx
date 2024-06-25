import JoditEditor from "jodit-react";
import React, { useState } from "react";
import { useRef } from "react";

const PrivacyPolicy = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const [isLoading, seLoading] = useState(false);
  const config = {
    readonly: false,
    placeholder: "Start typings...",
    style: {
      height: 400,
    },
  };
  return (
    <div
      style={{
        background: "white",
        paddingRight: "50px",
        paddingLeft: "50px",
        paddingTop: "10px",
        paddingBottom: "20px",
        borderRadius: "10px",
      }}
      className="bg-white h-[80vh]"
    >
      <h3
        style={{
          fontSize: "24px",
          fontWeight: 600,
          color: "#2F2F2F",
          padding: "40px 0",
        }}
      >
        Privacy Policy
      </h3>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          config={config}
          tabIndex={1}
          onBlur={(newContent) => setContent(newContent)}
          // onChange={newContent => { }}
        />
      </div>
      <button
        disabled={isLoading}
        className="rounded-lg"
        style={{
          display: "block",
          padding: "12px 24px",
          margin: "0 auto",
          marginTop: "30px",
          fontWeight: "500",
          color: "white",
          background: "#1A4F73",
        }}
      >
        Save & change
      </button>
    </div>
  );
};

export default PrivacyPolicy;
