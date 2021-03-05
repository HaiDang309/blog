import React, { memo, useState, useEffect } from "react";

import Navbar from "../Navbar";

import { Space, Button, Typography, Image, Layout } from "antd";
import {
    FacebookOutlined,
    LinkedinOutlined,
    GithubOutlined,
} from "@ant-design/icons";

import { useParams } from "react-router-dom";

import avatar from "./avatar.jpg";
import { Content } from "antd/lib/layout/layout";

const AboutMe = memo((props) => {
    const { id } = useParams();
    const { Title, Text } = Typography;
    const { Content } = Layout;
    return (
        <>
            <Navbar />
            <Layout>
                <Content
                    style={{
                        overflowY: "auto",
                        textAlign: "center",
                        padding: "0 24px",
                    }}
                >
                    <Title>About me</Title>

                    <Space direction="vertical">
                        <Image
                            preview={{
                                mask:
                                    "Đừng nhấn vào đây, chả có gì đâu!😁",
                            }}
                            width={512}
                            src={avatar}
                            alt=""
                        />
                        <Space direction="vertical">
                            <div
                                style={{
                                    textAlign: "left",
                                    fontSize: "1.2em",
                                }}
                            >
                                Hello mọi người, mình là Nguyễn
                                Hải Đăng hiện tại đang theo học
                                tại trường Đại học Công Nghệ
                                Thông Tin(UIT) – Đại học Quốc
                                Gia TP.HCM. Hồi cấp 3 mình khá
                                là ham chơi nên so với nhiều bạn
                                cùng nghành thì có lẽ mình bắt
                                đầu học lập trình khá trễ, bắt
                                đầu vào đại học mình mới thực sự
                                tìm hiểu về nó cho nên mình
                                không có bất kỳ thành tích nào
                                nổi bật cả nhưng mình có khả
                                năng tự học khá là tốt, mình có
                                thể đọc tài liệu hàng giờ liền
                                chỉ để giải quyết một vấn đề nho
                                nhỏ, một phần vì mình cũng là
                                người khá cầu toàn nên đôi khi
                                cũng gặp không ít khó khăn. Mình
                                cũng rất hay hỏi, mình hỏi tứ
                                phương bốn hướng, hỏi bất chất
                                nắng mưa miễn là mình có được
                                câu trả lời thì thôi, lâu lâu
                                cũng hay bị chửi là hỏi ngu😅,
                                bị ném đá các kiểu nên cũng rút
                                được nhiều kinh nghiệm. Về lập
                                trình thì mình có thể code khá
                                tự tin với JavaScript, React,
                                Nodejs, Python.
                            </div>
                            <div
                                style={{
                                    textAlign: "left",
                                    fontSize: "1.2em",
                                }}
                            >
                                Mình lập nên blog này với mục
                                đích chính là lưu lại những gì
                                mình biết và để rèn luyện khả
                                năng viết lách của mình, đó là
                                một trong những kỹ năng cực kỳ
                                đáng giá sau này, nó giúp mình
                                giải thích vấn đề một cách trơn
                                tru và mạch lạc hơn, rồi viết
                                email hay viết thư cho người yêu
                                chẳng hạn😅. Và mình cũng muốn
                                chia sẻ những gì mình biết đến
                                tất cả mọi người, vì kiến thức
                                là vô tận mà nên mình hy vọng
                                những chia sẻ của mình sẽ giúp
                                một phần nhỏ nào đó tới cho các
                                bạn😊.
                            </div>
                        </Space>
                        <Space
                            style={{
                                marginBottom: "64px",
                            }}
                        >
                            <Button
                                href="https://www.facebook.com/haidang309"
                                target="_blank"
                                type="link"
                                style={{
                                    fontSize: "1.5em",
                                }}
                            >
                                <FacebookOutlined />
                            </Button>
                            <Button
                                href="https://www.linkedin.com/in/hai-dang-nguyen-8599201a7/"
                                target="_blank"
                                type="link"
                                style={{
                                    fontSize: "1.5em",
                                }}
                            >
                                <LinkedinOutlined />
                            </Button>
                            <Button
                                href="https://github.com/HaiDang309"
                                target="_blank"
                                type="text"
                                style={{
                                    fontSize: "1.5em",
                                }}
                            >
                                <GithubOutlined />
                            </Button>
                        </Space>
                    </Space>
                </Content>
            </Layout>
        </>
    );
});

export default AboutMe;
