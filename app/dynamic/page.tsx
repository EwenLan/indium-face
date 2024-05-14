"use client";
import { Menu } from "antd";
import Sider from "antd/es/layout/Sider";
import axios from "axios";
import { Content } from "antd/lib/layout/layout";
import { useEffect, useState } from "react";
import "./dynamic.css";

const SubAppFindingTable: Map<string, React.JSX.Element> = new Map([
  ["alpha", <h1>Alpha</h1>],
  ["beta", <h1>Beta</h1>],
  ["gamma", <h1>Gamma</h1>],
]);

function LoadSubAppByName(name: string) {
  const ans = SubAppFindingTable.get(name);
  if (ans === undefined) {
    return <></>;
  }
  return ans;
}

const DynamicContentApp = () => {
  const [menuLoaded, setMenuLoaded] = useState(false);
  const [sideMenuItems, setSideMenuItems] = useState([] as any[]);
  const [currentAppName, setCurrenAppName] = useState("");
  useEffect(() => {
    if (menuLoaded) {
      return;
    }
    axios.get("/dynamicmenu").then(res => {
      setMenuLoaded(true);
      setSideMenuItems((res.data as string[]).map((current, index) => {
        return {
          key: index.toString(),
          label: current,
          onClick: () => setCurrenAppName(current),
        }
      }));
    })
  })
  return (
    <>
      <Sider className="site-layout-background home-sider">
        <Menu className="home-menu" mode="inline" defaultSelectedKeys={["1"]} items={sideMenuItems}></Menu>
      </Sider>
      <Content className="site-layout-background app-frame">
        {LoadSubAppByName(currentAppName)}
      </Content>
    </>
  )
}

export default DynamicContentApp;