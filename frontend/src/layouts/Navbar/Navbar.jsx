import { useState } from "react";
import { Button, Drawer } from "antd";
import LeftMenu from "./LeftMenu";
import RightMenu from "./RightMenu";
import { MenuOutlined } from "@ant-design/icons";

import { CiSearch } from "react-icons/ci";
import { CgProfile, CgShoppingBag } from "react-icons/cg";

import "./navbar.css";

const Navbar = () => {
  const [visible, setVisible] = useState(false);
  const showDrawer = () => {
    setVisible(!visible);
  };

  return (
    <div className="navbar lg:px-24 px-6 py-2">
      <div className=" py-2 ">
        <div className="flex justify-evenly">
          <div className="flex items-center mr-auto">
            <div>
              <Button className="menuButton" type="text" onClick={showDrawer}>
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
            <div className=" lg:block hidden">
              <CgProfile className="text-[24px]" />
            </div>

            <div>
              <CgShoppingBag className="text-[24px] " />
            </div>
          </div>

          <div>
            <Drawer
              title={"3legant."}
              placement="left"
              closable={true}
              onClose={showDrawer}
              open={visible}
              style={{ zIndex: 9999 }}
            >
              <LeftMenu mode={"inline"} />
              <RightMenu mode={"inline"} />
            </Drawer>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
