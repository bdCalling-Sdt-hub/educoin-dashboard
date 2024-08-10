import React, { useEffect, useState } from "react";
import { Form, Input, Button } from "antd";
import { MdOutlineAddPhotoAlternate } from "react-icons/md";
import ProfileModal from "../../Components/Profile/ProfileModal";
import { useProfileQuery, useUpdateProfileMutation } from "../../redux/slices/authSlice";
import { imageUrl } from "../../redux/api/baseApi";
import toast from "react-hot-toast";

const Profile = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [image, setImage] = useState();
  const [imgURL, setImgURL] = useState();
  const [form] = Form.useForm();

  const { data: profile, refetch } = useProfileQuery({});
  const [updateProfile, {isLoading}] = useUpdateProfileMutation();

  useEffect(()=>{
    if(profile){
      form.setFieldsValue(profile)
      setImgURL(profile?.profile.startsWith("https") ? profile?.profile: `${imageUrl}${profile?.profile}`)
    }
  }, [profile, form])

  const handleSubmit = async(values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key)=>{
      formData.append(key, values[key])
    })

    if(image){
      formData.append("image", image)
    }

    try {
      await updateProfile(formData).unwrap().then((result)=>{
          if (result?.success == true) {
              toast.success(result?.message);
              refetch()
          }
      });
    } catch (error) {
      toast.error(error.data.message || "An unexpected server error occurred");
    }
  };


  const handleReset = () => {
    window.location.reload();
  };


  const onChange = (e) => {
    const file = e.target.files[0];
    const imgUrl = URL.createObjectURL(file);
    setImgURL(imgUrl);
    setImage(file);
  };

  return (
    <div>

      <div
        style={{
          background: "white",
          padding: "20px",
          paddingTop: "50px",
          paddingBottom: "50px",
          borderRadius: "10px",
        }}
      >
        {/* profile Image  */}
        <div className="flex justify-center items-center  relative">
          {/* <button
            className="absolute top-5 right-[16%] "
            onClick={() => setOpenAddModel(true)}
          >
            {" "}
            <FaEdit size={24} />
          </button> */}

          <div
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              marginBottom: "38px",
              backgroundColor: "#F4F5F7",
              paddingTop: "40px",
              paddingBottom: "40px",
              width: "70%",
              borderRadius: "10px",
            }}
          >
            <input
              onChange={onChange}
              type="file"
              name=""
              id="img"
              style={{
                display: "none",
                width: "50%",
              }}
            />
            <label
              htmlFor="img"
              style={{
                width: "280px",
                cursor: "pointer",
                height: "190px",
                borderRadius: "18px",
                border: "1px dashed #4C535F",
                background: "white",
                backgroundImage: `url(${imgURL})`,
                backgroundSize: "cover",
                backgroundPosition: "center",
              }}
            >
              <div
                style={{
                  background: "rgba(0, 0, 0, 0.4)",
                  width: "100%",
                  height: "100%",
                  borderRadius: "18px",
                  display: "flex",
                  flexDirection: "column",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <MdOutlineAddPhotoAlternate size={36} color="white" />
                <p style={{ color: "white", marginTop: "12px" }}>
                  Upload Photo
                </p>
              </div>
            </label>
          </div>
        </div>

        {/* form  */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
          }}
        >
          <Form
            name="normal_login"
            className="login-form"
            style={{ width: "70%", height: "fit-content" }}
            onFinish={handleSubmit}
            form={form}
          >
            <div className=" grid grid-cols-2 gap-5 ">
              <div style={{ marginBottom: "10px" }}>
                <label style={{ display: "block", marginBottom: "5px" }}>
                  Full Name
                </label>
                <Form.Item style={{ marginBottom: 0 }} name="name">
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
                <Form.Item style={{ marginBottom: 0 }} name="contact">
                  <Input
                    type="number"
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

              <div style={{ marginBottom: "40px" }}>
              <label style={{ display: "block", marginBottom: "5px" }}>
                Location
              </label>
              <Form.Item style={{ marginBottom: 0 }} name="location">
                <Input
                  type="text"
                  // placeholder=""
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
                  { isLoading? "Updating..." : "UPDATE" }
                </Button>
              </Form.Item>
            </div>
          </Form>
        </div>

        {/* modal  */}
        <ProfileModal
          openAddModel={openAddModel}
          setOpenAddModel={setOpenAddModel}
        />
      </div>
    </div>
  );
};

export default Profile;
