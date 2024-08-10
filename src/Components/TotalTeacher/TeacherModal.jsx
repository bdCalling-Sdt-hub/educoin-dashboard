import { Button, Form, Input, Modal } from "antd";
import React from "react";
import OTPInput from "react-otp-input";
import {useCreateTeacherMutation} from "../../redux/slices/teacherSlice.js"
import toast from "react-hot-toast";

const TeacherModal = ({ openAddModel, setOpenAddModel, refetch }) => {
  const [form] = Form.useForm();
  const [createTeacher, {isLoading}] = useCreateTeacherMutation();

  const handleSubmit = async(values) => {

    try {
      await createTeacher(values).unwrap().then((result)=>{
          if (result?.success == true) {
            toast.success(result?.message);
            setOpenAddModel(false)
            refetch()
            form.resetFields()
          }
      });
      
    } catch (error) {
      console.log(error)
        toast.error(error.data.message || "An unexpected server error occurred");
    }
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
            form={form}
            onFinish={handleSubmit}
            layout="vertical"
            className="grid col-span-12"
          >
            <Form.Item
              name="name"
              label={<p>Full Name</p>}
              className="col-span-12"
              rules={[
                {
                  required: true,
                  message: "Please Enter Teacher Name",
                },
              ]}
            >
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

            <Form.Item
              name="email"
              className="col-span-12"
              label={<p>Email</p>}
              rules={[
                {
                  required: true,
                  message: "Please Enter Teacher Email",
                },
              ]}
            >
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

            <Form.Item
              className="col-span-12"
              name="contact"
              label={<p>Mobile</p>}
              rules={[
                {
                  required: true,
                  message: "Please Enter Teacher Mobile",
                },
              ]}
            >
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

            <Form.Item
              className="col-span-12"
              name="location"
              label={<p>Location</p>}
              rules={[
                {
                  required: true,
                  message: "Please Enter Teacher Location",
                },
              ]}
            >
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

            <Form.Item
              className="col-span-12"
              name="password"
              label={<p>Code</p>}
              rules={[
                {
                  required: true,
                  message: "Please Enter Teacher Access Code",
                },
              ]}
            >
              <OTPInput
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

            <Form.Item className="col-span-12 flex items-center justify-center">
              <Button
                htmlType="submit"
                style={{
                  width: 120,
                  border: "none",
                  height: "51px",
                  background: "#1A4F73",
                  color: "white",
                  borderRadius: "8px",
                  outline: "none",
                  margin: "0 auto",
                }}
              >
                {isLoading ? "Loading" : "Save"}
              </Button>
            </Form.Item>
          </Form>
        </div>
      </Modal>
    </div>
  );
};

export default TeacherModal;
