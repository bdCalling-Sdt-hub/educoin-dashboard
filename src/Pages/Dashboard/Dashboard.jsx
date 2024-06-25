import { Input, Layout, Badge } from "antd";
import React, { useEffect, useState } from "react";
import { Link, Outlet, useNavigate, useLocation } from "react-router-dom";
import Logo from "../../assets/logo.png";
import LogoText from "../../assets/logo-text.png";
import { HiLogout, HiOutlineMail } from "react-icons/hi";
import { LuUser } from "react-icons/lu";
import { TbUserPlus } from "react-icons/tb";
import { MdDashboard, MdPlaylistAdd } from "react-icons/md";
import { FiSearch } from "react-icons/fi";
import { IoClose } from "react-icons/io5";
import {
  RiNotification2Line,
  RiChat1Line,
  RiCopperDiamondLine,
} from "react-icons/ri";
const { Header, Sider, Content } = Layout;
import { IoSettingsOutline } from "react-icons/io5";
import { MdKeyboardArrowRight } from "react-icons/md";
import { MdKeyboardArrowDown } from "react-icons/md";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentFill } from "react-icons/pi";

const Dashboard = () => {
  const [dropdown, setDropdown] = useState(false);
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const handleLogOut = () => {
    navigate("/login");
    window.location.reload();
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
      title: "Add Category",
      path: "/add-category",
      icon: <MdPlaylistAdd size={24} />,
    },
    // {
    //   title: "Email",
    //   path: "/emails",
    //   icon: <HiOutlineMail size={24} />,
    // },
    // {
    //   title: "Pricing",
    //   path: "/package",
    //   icon: <RiCopperDiamondLine size={24} />,
    // },
  ];

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
            <img src={Logo} height="45px" width="50px" />
          </Link>

          <div>
            <img src={LogoText} />
          </div>
        </div>

        <ul
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "30px",
            height: "100%",
            marginTop: 0,
          }}
        >
          {linkItems.map((item, index) => (
            <li
              key={index}
              style={{
                width: "100%",
                height: "34px",
                position: "relative",
                paddingLeft: "44px",
                display: "flex",
                alignItems: "center",
                marginBottom: "20px",
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
              marginTop: 0,
              height: "38px",
              display: "flex",
              alignItems: "center",
              paddingLeft: "47px",
              position: "relative",
              gap: "14px",
              color: "white",
              cursor: "pointer",
            }}
          >
            {pathname === "/setting-change-password" ||
            pathname === "/settings-profile" ? (
              <div
                style={{
                  backgroundColor: "#236999",
                  position: "absolute",
                  left: 0,
                  top: 0,
                  width: "8px",
                  height: "38px",
                  borderRadius: "0 10px 10px 0",
                }}
              ></div>
            ) : null}
            <IoSettingsOutline size={24} />
            <p
              onClick={() => setDropdown(!dropdown)}
              style={{ fontSize: "15px", textAlign: "center" }}
            >
              Settings
            </p>
            {dropdown ? (
              <MdKeyboardArrowDown size={24} />
            ) : (
              <MdKeyboardArrowRight size={24} />
            )}
            {dropdown && (
              <div
                style={{
                  position: "absolute",
                  left: "60px",
                  top: "40px",
                  width: "150px",
                  height: "50px",
                  borderRadius: "0 10px 10px 0",
                }}
              >
                <Link
                  to="/settings-profile"
                  style={{
                    display: "flex",
                    width: "100%",
                    backgroundColor:
                      pathname === "/settings-profile"
                        ? "#236999"
                        : "transparent",
                    color: "white",

                    margin: "auto  0 auto 0",

                    padding: "7px 14px 7px",
                    borderRadius: "5px",
                  }}
                >
                  <p style={{ marginBottom: "8px" }}>Profile</p>
                </Link>

                <Link
                  to="/privacyPolicy"
                  style={{
                    display: "flex",
                    width: "100%",
                    backgroundColor:
                      pathname === "/privacyPolicy" ? "#236999" : "transparent",
                    color: "white",

                    margin: "auto  0 auto 0",

                    padding: "7px 14px 7px",
                    borderRadius: "5px",
                  }}
                >
                  <p>Privacy Policy</p>
                </Link>

                <Link
                  to="/terms"
                  style={{
                    width: "100%",

                    color: "white",
                    margin: "auto  0 auto 0",
                    borderRadius: "5px",
                    padding: "7px 14px 7px",
                  }}
                >
                  <p>Terms & Condition</p>
                </Link>
              </div>
            )}
          </li>

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
                // width: "280px",
                display: "flex",
                alignItems: "center",
                textAlign: "left",
                gap: "26px",
                paddingTop: "20px",
              }}
            >
              <Badge color="#C30303" count={5}>
                <Link to="/notification">
                  <RiNotification2Line color="#6A6A6A" size={24} />
                </Link>
              </Badge>

              <Link to="/settings-profile">
                <div
                  style={{
                    width: "170px",
                    height: "42px",
                    background: "#FFFFFF",
                    borderRadius: "5px",
                    display: "flex",
                    alignItems: "center",
                    gap: "20px",
                    padding: "10px",
                  }}
                >
                  <img
                    src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcTLotvhr2isTRMEzzT30Cj0ly77jFThGXr0ng&usqp=CAU"
                    style={{
                      width: "30px",
                      height: "30px",
                      borderRadius: "100%",
                    }}
                    alt=""
                  />
                  <h2 style={{ color: "black", fontSize: "12px" }}>
                    DR. Jim ahhmed
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
