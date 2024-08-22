import { Input, Layout, Badge } from "antd";
import React, { useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogoText from "../../assets/logo-text.png";
import { HiLogout } from "react-icons/hi";
import { IoMdInformationCircleOutline } from "react-icons/io";
import { MdDashboard, MdOutlinePrivacyTip } from "react-icons/md";
const { Header, Sider, Content } = Layout;
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";
import { useUser } from "../../provider/user";
import { imageUrl } from "../../redux/api/baseApi";
import { MdCategory } from "react-icons/md";

const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    localStorage.removeItem("token")
    navigate("/login");
  };

  const linkItems = [
    {
      title: "Dashboard",
      path: "/",
      icon: <MdDashboard size={24} />,
    },
    {
      title: "Total Teacher",
      path: "/total-teacher",
      icon: <FaChalkboardTeacher size={24} />,
    },
    {
      title: "Total Student",
      path: "/all-student",
      icon: <PiStudentFill size={24} />,
    },
    {
      title: "Presets",
      path: "/preset",
      icon: < MdCategory size={24} />,
    },
    {
      title: "Privacy & Policy",
      path: "/privacy",
      icon: <MdOutlinePrivacyTip size={24} />,
    },
    {
      title: "Terms & Condition",
      path: "/terms",
      icon: <IoMdInformationCircleOutline size={24} />,
    },
  ];

  const {user} = useUser();

  return (
    <Layout style={{ height: "100vh", width: "100vw" }}>
      <Sider
        width="253px"
        trigger={null}
        style={{
          overflow: "auto",
          position: "fixed",
          height: "100vh",
          overflowY: "hidden",
          zIndex: 2,
          backgroundColor: "#1A4F73",
          paddingRight: "20px",
        }}
      >
        <div
          className="logo"
          style={{
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            marginTop: "40px",
            gap: "10px",
            marginBottom: "40px",
            textAlign: "center",
          }}
        >
          <Link to="/">
            <img src={Logo} height="45px" width="150px" />
          </Link>
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            height: "100%",
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "34px",
                position: "relative",
                paddingLeft: "22px",
                display: "flex",
                alignItems: "center",
                marginBottom: 15,
              }}
            >
              {item.path === pathname ? (
                <div
                  style={{
                    backgroundColor: "#236999",
                    position: "absolute",
                    left: 0,
                    top: 0,
                    width: "8px",
                    height: "35px",
                    borderRadius: "0 10px 10px 0",
                  }}
                ></div>
              ) : null}
              <Link
                to={item.path}
                style={{
                  display: "flex",
                  width: "100%",
                  backgroundColor:
                    item.path === pathname ? "#236999" : "transparent",
                  color: "white",
                  alignItems: "center",
                  margin: "auto  0 auto 0",
                  gap: "14px",
                  padding: "7px 14px 7px",
                  borderRadius: "5px",
                }}
              >
                <div style={{ height: "24px" }}>{item.icon}</div>
                <div
                  style={{
                    fontSize: "14px",
                    textAlign: "center",
                    height: "fit-content",
                  }}
                >
                  {item.title}
                </div>
              </Link>
            </li>
          ))}

          <li
            style={{
              width: "100%",
              left: "0",
              position: "absolute",
              bottom: "53px",
            }}
          >
            <div
              onClick={handleLogOut}
              style={{
                display: "flex",
                width: "fit-content",
                margin: "0 auto 0 auto",
                alignItems: "center",
                gap: "14px",
                cursor: "pointer",
                justifyContent: "center",
              }}
            >
              <div style={{ color: "white", fontSize: "14px" }}>Logout</div>
              <HiLogout color="white" size={24} />
            </div>
          </li>
        </ul>
      </Sider>

      <Layout>
        <Header
          style={{
            position: "fixed",
            width: "100vw",
            height: "80px",
            zIndex: 1,
            padding: 0,
            background: "white",
            paddingRight: "60px",
            paddingLeft: "270px",
          }}
        >
          <div style={{ position: "relative" }}>
            <div
              style={{
                position: "absolute",
                right: "0px",
                alignItems: "center",
                textAlign: "left",
                paddingTop: "20px",
              }}
            >
              <Link to="/profile">
                <div
                  style={{
                    width: "170px",
                    height: "42px",
                    background: "#FFFFFF",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "10px",
                    padding: "10px",
                  }}
                >
                  <img
                    src={ user?.profile?.startsWith("https") ?  user?.profile :  `${imageUrl}${user?.profile}`}
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                    }}
                    alt=""
                  />
                  <h2 style={{ color: "black", fontSize: "12px" }}>
                    {user?.name}
                  </h2>
                </div>
              </Link>
            </div>
          </div>
        </Header>

        <Content
          style={{
            marginTop: "60px",
            marginBottom: "20px",
            marginLeft: "255px",
            marginRight: "40px",
            background: "#D9D9D9",
            overflow: "auto",
            padding: "40px",
          }}
        >
          <Outlet />
        </Content>
      </Layout>
    </Layout>
  );
};
export default Dashboard;
