import React from "react";
import "./home.css";
import { Menu } from "antd";
import { Content } from "antd/lib/layout/layout";
import Sider from "antd/es/layout/Sider";
import { GenerateMenu } from "../utils/menu";

const SideMenuItems = GenerateMenu([
  {
    key: "1",
    subHref: "welcome",
    title: "Welcome",
  },
], "/home/")

const HomePageLayout = ({
  children
}: {
  children: React.ReactNode
}) => {
  return (
    <>
      <Sider className="site-layout-background home-sider">
        <Menu className="home-menu" mode="inline" defaultSelectedKeys={["1"]} items={SideMenuItems} />
      </Sider>
      <Content className="site-layout-background app-frame">
        {children}
      </Content>
    </>
  )
}

export default HomePageLayout;