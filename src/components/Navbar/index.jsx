import React, { memo } from "react";

import {
    Menu,
    Layout,
    Space,
    Button,
    Typography,
    Row,
    Col
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
} from "@ant-design/icons";
import Icon from "@ant-design/icons";
import { ReactIcon, JsIcon, CopyrightIcon } from "../../svg";

import { NavLink } from "react-router-dom";

import Search from '../Search';

const Navbar = memo((props) => {
    const { Sider } = Layout;
    const { SubMenu } = Menu;
    const { Link, Text } = Typography;
    return (
        <Sider
            breakpoint="lg"
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

            <Menu
                theme="dark"
                mode="vertical"
                defaultSelectedKeys={["2"]}
            >
                <Menu.Item icon={<HomeOutlined />} key="1">
                    <NavLink to="/">Home</NavLink>
                </Menu.Item>
                <SubMenu
                    key="SubMenu"
                    icon={<CodeOutlined />}
                    title="Programming"
                >
                    <Menu.Item
                        icon={<Icon component={ReactIcon} />}
                        key="programming:1"
                    >
                        <NavLink to="/?q=react">React</NavLink>
                    </Menu.Item>
                    <Menu.Item
                        icon={<Icon component={JsIcon} />}
                        key="programming:2"
                    >
                        <NavLink to="/?q=javascript">
                            JavaScript
                        </NavLink>
                    </Menu.Item>
                </SubMenu>
                <Menu.Item icon={<HeartOutlined />} key="3">
                    <NavLink to="/?q=sidelines">Life</NavLink>
                </Menu.Item>
                <Menu.Item icon={<UserOutlined />} key="4">
                    <NavLink to="/about-me">About me</NavLink>
                </Menu.Item>
                <Search />
            </Menu>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    position: "absolute",
                    bottom: "16px",
                    left: "0",
                    textAlign: "center",
                    width: "100%",
                }}
            >
                <Text style={{ color: "white" }}>
                    Copyright <Icon component={CopyrightIcon} />{" "}
                    2021
                </Text>
                <Text style={{ color: "white" }}>
                    by HaiDang309.
                </Text>
                <Text style={{ color: "white", fontSize: "1.2em" }}>
                    All rights reserved.
                </Text>
            </div>
        </Sider>
    );
});

export default Navbar;
