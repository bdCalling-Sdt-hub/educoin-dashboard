import JoditEditor from "jodit-react";
import React, { useEffect, useState } from "react";
import { useRef } from "react";
import {  useGetTermsQuery, useUpdateTermsMutation } from "../../redux/slices/ruleSlice";
import toast from "react-hot-toast";

const TermsCondition = () => {
  const editor = useRef(null);
  const [content, setContent] = useState("");
  const {data: terms} = useGetTermsQuery({})
  const [updateTerms] = useUpdateTermsMutation()

  useEffect(() => {
    setContent(terms?.data?.content);
  }, [terms?.data?.content]);

  const handleSubmit = async () => {
    try {
      await updateTerms({ content: content }).unwrap().then((result)=>{
        console.log(result)
          if (result?.success == true) {
              toast.success(result?.message);
          }
      });
      
  } catch (error) {
      toast.error(error.data.message || "An unexpected server error occurred");
  }
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
        Terms & Condition
      </h3>
      <div>
        <JoditEditor
          ref={editor}
          value={content}
          onBlur={(newContent) => setContent(newContent)}
        />
      </div>
      <button
        onClick={handleSubmit}
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

export default TermsCondition;
