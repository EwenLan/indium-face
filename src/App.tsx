import { Col, Layout, Menu, Row } from 'antd';
import { Content, Header } from 'antd/lib/layout/layout';
import Sider from "antd/lib/layout/Sider";
import { ItemType } from "antd/lib/menu/hooks/useItems";
import React from 'react';
import './App.css';

const items1: ItemType[] = [{ key: "0", label: "Home" }, { key: "1", label: "About" }]
const items2: ItemType[] = [{ key: "0", label: "Welcome" }, { key: "1", label: "First Page" }]

function App() {
  return (
    <div className="App">
      <Layout className="page-layout">
        <Header className="header">
          <Menu theme="dark" mode="horizontal" defaultSelectedKeys={["0"]} items={items1}></Menu>
        </Header>
        <Content className="page-content-background">
          <Layout className="site-layout-background">
            <Row>
              <Col>
                <Sider className="site-layout-background" width={200}>
                  <Menu className="sider-menu" mode="inline" defaultSelectedKeys={["0"]} items={items2} />
                </Sider>
              </Col>
              <Col>
                <Content className="app-content">Content</Content>
              </Col>
            </Row>
          </Layout>
        </Content>
      </Layout>
    </div>
  );
}

export default App;
