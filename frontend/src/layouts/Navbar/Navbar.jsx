import { useState } from "react";
import { Button, Drawer, message } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";

import { CiSearch } from "react-icons/ci";
import { CgProfile, CgShoppingBag } from "react-icons/cg";
import { LogoutOutlined } from "@ant-design/icons";

import "./navbar.css";
import Cart from "../../components/Cart";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";
import { getUserInfo, removeUserInfo } from "../../utils/authService";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const [cartVisible, setCartVisible] = useState(false);

  const totalItems = useSelector((state) => state.cart.totalQuantity);

  const navigate = useNavigate();
  const { userId } = getUserInfo();

  const logOut = () => {
    removeUserInfo("accessToken");

    message.success("logged out");

    navigate("/");
  };

  const showMenuDrawer = () => {
    setVisible(!visible);
  };

  const showCartDrawer = () => {
    setCartVisible(!cartVisible);
  };

  return (
    <div className="navbar lg:px-24 px-6 py-2">
      <div className=" py-2 ">
        <div className="flex justify-evenly">
          <div className="flex items-center mr-auto">
            <div>
              <Button
                className="menuButton"
                type="text"
                onClick={showMenuDrawer}
              >
                <MenuOutlined />
              </Button>
            </div>
            <div className="text-[24px] font-semibold">3legant.</div>
          </div>

          <div className="leftMenu">
            <LeftMenu mode={"horizontal"} />
          </div>
          {/* right */}
          <div className="ml-auto flex items-center gap-5">
            <div>
              <CiSearch className="text-[24px] " />
            </div>

            {userId ? (
              <Button onClick={() => logOut()}>
                <LogoutOutlined className="" />
              </Button>
            ) : (
              <Link to="/login" className=" lg:block hidden">
                <CgProfile className="text-[24px]" />
              </Link>
            )}

            <div
              onClick={showCartDrawer}
              className=" cursor-pointer flex items-center gap-1"
            >
              <CgShoppingBag className="text-[24px]" />
              <span className="text-[12px] bg-slate-900 px-[6px] rounded-[50%] text-white font-semibold pb-[2px]">
                {totalItems}
              </span>
            </div>
          </div>

          <div>
            <Drawer
              title={"3legant."}
              placement="left"
              closable={true}
              onClose={showMenuDrawer}
              open={visible}
              style={{ zIndex: 9999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>

          {/* Cart drawer */}
          <div>
            <Drawer
              title={"Cart"}
              placement="right"
              closable={true}
              onClose={showCartDrawer}
              open={cartVisible}
              style={{ zIndex: 9999 }}
            >
              <Cart />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
