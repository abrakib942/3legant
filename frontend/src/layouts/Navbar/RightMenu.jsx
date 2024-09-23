/* eslint-disable react/prop-types */

import { Menu } from "antd";
import { UserOutlined, CodeOutlined, LogoutOutlined } from "@ant-design/icons";
import { CgProfile } from "react-icons/cg";
import { Link } from "react-router-dom";

const RightMenu = ({ mode }) => {
  return (
    <Menu mode={mode}>
      <Menu.SubMenu
        title={
          <>
            <CgProfile className="text-[24px]" />
          </>
        }
      >
        {/* <Menu.Item key="project">
          <CodeOutlined /> Projects
        </Menu.Item> */}
        <Menu.Item key="profile">
          <Link to="">
            <UserOutlined /> Profile
          </Link>
        </Menu.Item>
        <Menu.Item key="dashboard">
          <Link to="">
            <CodeOutlined /> Dashboard
          </Link>
        </Menu.Item>
        <Menu.Item key="log-out">
          <LogoutOutlined /> Logout
        </Menu.Item>
      </Menu.SubMenu>
    </Menu>
  );
};

export default RightMenu;
