import React, { memo } from "react";

import { Menu, Layout, Space, Button, Typography } from "antd";
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
import { ReactIcon, JsIcon } from "../../svg";

import { NavLink } from "react-router-dom";

const Navbar = memo((props) => {
    const { Header } = Layout;
    const { SubMenu } = Menu;
    const { Link } = Typography;
    return (
        <Layout>
            <Header
                style={{
                    backgroundColor: "#f6f3ee",
                    position: "fixed",
                    zIndex: 1,
                    width: "100%",
                    display: "flex",
                    justifyContent: "space-between",
                    alignItems: "center",
                    overflow: "hidden",
                }}
            >
                <Link
                    href="/"
                    type="secondary"
                    style={{
                        fontWeight: "900",
                        fontSize: "2em",
                    }}
                >
                    <CopyrightOutlined spin/>
                    odeCuaTui
                </Link>

                <Menu
                    style={{ backgroundColor: "#f6f3ee" }}
                    theme="light"
                    mode="horizontal"
                    defaultSelectedKeys={["2"]}
                >
                    <Menu.Item
                        icon={<HomeOutlined />}
                        style={{
                            fontWeight: "900",
                            color: "black",
                        }}
                        key="1"
                    >
                        <NavLink to="/">Home</NavLink>
                    </Menu.Item>
                    <SubMenu
                        style={{
                            fontWeight: "900",
                            color: "black",
                        }}
                        key="SubMenu"
                        icon={<CodeOutlined />}
                        title="Programming"
                    >
                        <Menu.Item
                            icon={
                                <Icon component={ReactIcon} />
                            }
                            key="programming:1"
                        >
                            <NavLink to="/?q=react">
                                React
                            </NavLink>
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
                    <Menu.Item
                        icon={<HeartOutlined />}
                        style={{
                            fontWeight: "900",
                            color: "black",
                        }}
                        key="3"
                    >
                        <NavLink to="/?q=sidelines">Life</NavLink>
                    </Menu.Item>
                    <Menu.Item
                        icon={<UserOutlined />}
                        style={{
                            fontWeight: "900",
                            color: "black",
                        }}
                        key="4"
                    >
                        <NavLink to="/about-me">
                            About me
                        </NavLink>
                    </Menu.Item>
                </Menu>
                <Space>
                    <Button
                        href="https://www.facebook.com/haidang309"
                        target="_blank"
                        type="link"
                    >
                        <FacebookOutlined />
                    </Button>
                    <Button
                        href="https://www.linkedin.com/in/hai-dang-nguyen-8599201a7/"
                        target="_blank"
                        type="link"
                    >
                        <LinkedinOutlined />
                    </Button>
                    <Button
                        href="https://github.com/HaiDang309"
                        target="_blank"
                        type="text"
                    >
                        <GithubOutlined />
                    </Button>
                </Space>
            </Header>
        </Layout>
    );
});

export default Navbar;
