import { Form, Modal, Table, Button, Radio } from "antd";
import React, { useEffect, useState } from "react";
import { MdOutlineDelete } from "react-icons/md";
import { useCreatePresetMutation, useDeletePresetMutation, usePresetsQuery } from "../../redux/slices/presetSlice";
import moment from "moment";
import { imageUrl } from "../../redux/api/baseApi";
import { PiPlus } from "react-icons/pi";
import toast from "react-hot-toast";

const Presets = () => {
  const [openAddModel, setOpenAddModel] = useState(false);
  const [form] = Form.useForm();
  const [page, setPage] = useState(1)
  const {data: presets, refetch} = usePresetsQuery(page);
  const [createPreset, {isLoading}] = useCreatePresetMutation()
  const [deletePreset] = useDeletePresetMutation()
  const itemsPerPage = 10; 


  const handleDelete = async (id) => {
    try {
      await deletePreset(id).unwrap().then((result)=>{
          if (result?.success === true) {
            toast.success(result?.message);
            refetch();
          }
      });
      
    } catch (error) {
      toast.error(error.data.message || "An unexpected server error occurred");
    }
  };

  const columns = [
    {
      title: "S.No",
      dataIndex: "key",
      key: "key",
      render: (_, record, index)=> <p>{((page - 1) * itemsPerPage) + index + 1}</p>
    },
    {
      title: "Type",
      dataIndex: "type",
      key: "type",
    },
    {
      title: "Image",
      dataIndex: "image",
      key: "image",
      render: (_, record) => <img style={{width: 40, height: 40}} src={`${imageUrl}${record?.image}`} alt="" />,
    },
    {
      title: "Date",
      dataIndex: "createdAt",
      key: "createdAt",
      render: (_, record) => <p>{moment(record?.createdAt).format("l")}</p>
    },
    {
      title: "Action",
      key: "action",
      render: (_, record) => (
        <div>

          <MdOutlineDelete
            onClick={() => handleDelete(record?._id)}
            className="cursor-pointer"
            size={25}
          />
        </div>
      ),
    },
  ];

  const onFinish =  async(values) => {
    const formData = new FormData();

    Object.keys(values).forEach((key)=>{
      formData.append(key, values[key])
    });

    try {
      await createPreset(formData).unwrap().then((result)=>{
          if (result?.success === true) {
            form.resetFields()
            toast.success(result?.message);
            setOpenAddModel(false)
            refetch();
          }
      });
      
      } catch (error) {
          toast.error(error.data.message || "An unexpected server error occurred");
      }
    };

  const [imageURL, setImageUrl] = useState(null);

  const handlePreview = (e) => {
    const file = e.target.files[0];
    if (file) {
      setImageUrl(URL.createObjectURL(file))
      form.validateFields(["image"]);
      form.setFieldsValue({image: file})
    }
  };


  return (
    <div>
      <div
        style={{
          margin: "24px 0",
          background: "white",
          padding: "30px",
          borderRadius: "10px",
        }}
      >
        <div
          style={{
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            margin: "16px 0",
            marginBottom: "20px",
          }}
        >
          <h1 style={{ fontSize: "24px", fontWeight: 600, color: "#555555" }}>
            Presets
          </h1>
          <button
                className="text-white text-md font-medium bg-[#1A4F73] p-3 rounded-lg px-5 "
                onClick={() => setOpenAddModel(true)}
              >
                {" "}
                + Add Preset
              </button>
        </div>

        <Table 
          columns={columns} 
          dataSource={presets?.data} 
          pagination={
            {
              total: presets?.pagination?.total,
              current: page,
              onChange:((page)=>setPage(page))
            }
          } 
          />

        <Modal
          centered
          title={<p className="text-[20px] font-semibold text-[#555555] ">Create Preset</p>}
          open={openAddModel}
          onCancel={() => setOpenAddModel(false)}
          width={600}
          footer={false}
        >
            <Form
              form={form}
              name="normal_login"
              onFinish={onFinish}
              layout="vertical"
            >
              <Form.Item
                  name="type"
                  label={<p>Type</p>}
                  rules={[
                    {
                      required: true,
                      message: "Please input User Full Name",
                    },
                  ]}
                >
                  <Radio.Group>
                  <Radio value="icon">Icon</Radio>
                  <br />
                  <Radio value="avatar">Avatar</Radio>
                </Radio.Group>
              </Form.Item>

              <Form.Item
                name="image"
                label="Image"
                rules={[
                  {
                    required: true,
                    validator: (_, value) => {
                      if (!imageURL) {
                        return Promise.reject("Please Upload An Image");
                      }
                      return Promise.resolve();
                    },
                  },
                ]}
              >
                <input onChange={handlePreview} type="file" name="" id="image" style={{display: "none"}} />                
                <label 
                  htmlFor="image"
                  style={{
                    backgroundImage: `url(${imageURL})`,
                    backgroundPosition: "center",
                    backgroundRepeat: "no-repeat"
                  }}
                  className="flex items-center justify-center border h-[150px] border-dashed w-full rounded-md"
                >
                  {
                    imageURL?
                    null
                    :
                     <p>Upload Image</p>
                  }
                </label>
              </Form.Item>

              <Form.Item className=" flex items-center justify-center">
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
                    }}
                  >
                    {isLoading ? "Creating" : "Save"}
                </Button>
              </Form.Item>

            </Form>
        </Modal>
      </div>
    </div>
  );
};

export default Presets;
