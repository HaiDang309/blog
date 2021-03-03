import React, { memo, useState } from "react";

import { Form, Input, Card, Button, message } from "antd";
import { UserOutlined, LockOutlined } from "@ant-design/icons";

import { useDispatch } from "react-redux";

import dotenv from "dotenv";

const Login = memo((props) => {
    dotenv.config();
    const dispatch = useDispatch();
    const [name, setName] = useState("");
    const [password, setPassword] = useState("");
    const handleChangeName = (e) => {
        setName(e.target.value);
    };
    const handleChangePassword = (e) => {
        setPassword(e.target.value);
    };
    const handleSubmit = (e) => {
        if (!name) {
            message.error("Name is required!");
            return;
        }
        if (!password) {
            message.error("Password is required!");
            return;
        }
        if (
            name !== process.env.REACT_APP_NAME ||
            password !== process.env.REACT_APP_PASSWORD
        ) {
            message.error("Incorrect name or password");
            return;
        }
        window.location.reload();
        window.localStorage.setItem('auth', JSON.stringify(true));
    };
    return (
        <div
            style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
            }}
        >
            <Card title="Administrator">
                <Form
                    autoComplete="off"
                >
                    <Form.Item name="name">
                        <Input
                            onChange={handleChangeName}
                            prefix={
                                <UserOutlined className="site-form-item-icon" />
                            }
                            placeholder="Name"
                        />
                    </Form.Item>
                    <Form.Item name="password">
                        <Input
                            onPressEnter={handleSubmit}
                            onChange={handleChangePassword}
                            prefix={
                                <LockOutlined className="site-form-item-icon" />
                            }
                            type="password"
                            placeholder="Password"
                        />
                    </Form.Item>

                    <Form.Item style={{ textAlign: "center" }}>
                        <Button
                            onClick={handleSubmit}
                            type="primary"
                        >
                            Login
                        </Button>
                    </Form.Item>
                </Form>
            </Card>
        </div>
    );
});

export default Login;
