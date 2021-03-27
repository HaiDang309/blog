import React, { memo, useState } from "react";

import {
  Menu,
  Layout,
  Space,
  Button,
  Typography,
  Row,
  Col,
  Drawer,
} from "antd";
import {
  FacebookOutlined,
  LinkedinOutlined,
  GithubOutlined,
  HomeOutlined,
  CodeOutlined,
  HeartOutlined,
  UserOutlined,
  CopyrightOutlined,
  MenuOutlined,
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ReactIcon, JsIcon, CopyrightIcon } from "../../svg";

import { NavLink } from "react-router-dom";

import Search from "../Search";

const Navbar = memo((props) => {
  const { Sider } = Layout;
  const { SubMenu } = Menu;
  const { Link, Text } = Typography;
  const [openMenu, setOpenMenu] = useState(false);
  const handleOpenMenu = (e) => {
    setOpenMenu(true);
  };
  const handleCloseMenu = (e) => {
    setOpenMenu(false);
  };
  return (
    <Row>
      <Col lg={{ span: 24 }} xs={{ span: 0 }}>
        <Sider
          breakpoint="xs"
          style={{
            height: "100%",
            position: "relative",
            padding: "8px 16px",
          }}
        >
          <Link
            type="secondary"
            href="/"
            style={{
              fontWeight: "900",
              fontSize: "2em",
              color: "white",
            }}
          >
            <Row>
              <Col xs={{ span: 24 }} lg={{ span: 4 }}>
                <CopyrightOutlined />
              </Col>
              <Col xs={{ span: 0 }} lg={{ span: 20 }}>
                odeCuaTui
              </Col>
            </Row>
          </Link>

          <Menu theme="dark" mode="vertical">
            <Menu.Item
              onClick={() => window.location.reload()}
              icon={<HomeOutlined />}
              key="1"
            >
              <NavLink to="/">Home</NavLink>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<CodeOutlined />} title="Programming">
              <Menu.Item
                onClick={() => window.location.reload()}
                icon={<Icon component={ReactIcon} />}
                key="programming:1"
              >
                <NavLink to="/?q=react">React</NavLink>
              </Menu.Item>
              <Menu.Item
                onClick={() => window.location.reload()}
                icon={<Icon component={JsIcon} />}
                key="programming:2"
              >
                <NavLink to="/?q=javascript">JavaScript</NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item
              onClick={() => window.location.reload()}
              icon={<HeartOutlined />}
              key="3"
            >
              <NavLink to="/?q=sidelines">Life</NavLink>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="4">
              <NavLink to="/about-me">About me</NavLink>
            </Menu.Item>
            <Row>
              <Col xl={{ span: 24 }} lg={{ span: 24 }} xs={{ span: 0 }}>
                {/* <Search /> */}
              </Col>
            </Row>
          </Menu>
          <Row
            style={{
              position: "absolute",
              bottom: "16px",
              left: "0",
              textAlign: "center",
              width: "100%",
            }}
          >
            <Col xs={{ span: 0 }} lg={{ span: 24 }} xl={{ span: 24 }}>
              <div style={{ display: "flex", flexDirection: "column" }}>
                <Text style={{ color: "white" }}>
                  Copyright <Icon component={CopyrightIcon} /> 2021
                </Text>
                <Text style={{ color: "white" }}>by HaiDang309.</Text>
                <Text
                  style={{
                    color: "white",
                    fontSize: "1.2em",
                  }}
                >
                  All rights reserved.
                </Text>
              </div>
            </Col>
          </Row>
        </Sider>
      </Col>
      <Col
        style={{ position: "absolute", top: "8px", right: "8px" }}
        lg={{ span: 0 }}
        xs={{ span: 24 }}
      >
        <MenuOutlined
          onClick={handleOpenMenu}
          style={{ fontSize: "2em", cursor: "pointer", color: "pink" }}
        />
        <Drawer placement="left" onClose={handleCloseMenu} visible={openMenu}>
          <Link
            type="secondary"
            href="/"
            style={{
              fontWeight: "900",
              fontSize: "2em",
              textAlign: "center",
              color: "#1da1f2",
            }}
          >
            <CopyrightOutlined />
            ODECUATUI
          </Link>
          <Menu mode="vertical">
            <Menu.Item icon={<HomeOutlined />} key="1">
              <NavLink to="/" style={{ color: "black" }}>
                Home
              </NavLink>
            </Menu.Item>
            <SubMenu key="SubMenu" icon={<CodeOutlined />} title="Programming">
              <Menu.Item
                icon={<Icon component={ReactIcon} />}
                key="programming:1"
              >
                <NavLink style={{ color: "black" }} to="/?q=react">
                  React
                </NavLink>
              </Menu.Item>
              <Menu.Item icon={<Icon component={JsIcon} />} key="programming:2">
                <NavLink style={{ color: "black" }} to="/?q=javascript">
                  JavaScript
                </NavLink>
              </Menu.Item>
            </SubMenu>
            <Menu.Item icon={<HeartOutlined />} key="3">
              <NavLink style={{ color: "black" }} to="/?q=sidelines">
                Life
              </NavLink>
            </Menu.Item>
            <Menu.Item icon={<UserOutlined />} key="4">
              <NavLink style={{ color: "black" }} to="/about-me">
                About me
              </NavLink>
            </Menu.Item>
            <Search />
          </Menu>
        </Drawer>
      </Col>
    </Row>
  );
});

export default Navbar;
