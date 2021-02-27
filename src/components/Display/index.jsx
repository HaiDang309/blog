import React, { memo, useState, useEffect } from "react";

import {
    Skeleton,
    message,
    Space,
    Typography,
    Tag,
    Image,
    BackTop,
    Card,
    Rate,
} from "antd";
import Icon from "@ant-design/icons";
import { CalendarIcon } from "../../svg";

import MarkDown from "markdown-to-jsx";
import SyntaxHighlighter from "react-syntax-highlighter";
import { atomOneDark } from "react-syntax-highlighter/dist/esm/styles/hljs";
import jsx from "react-syntax-highlighter/dist/esm/languages/prism/jsx";

import { useParams } from "react-router-dom";

import { getPostById } from "../../api";

import Navbar from "../../components/Navbar";

const Display = memo((props) => {
    let pid = useParams();
    const { Title, Text, Link } = Typography;
    const [dataPost, setDataPost] = useState({});
    const [star, setStar] = useState(0);
    const handleChangeStar = (star) => {
        setStar(star);
    };
    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";
        getPostById(pid.pid)
            .then((data) => {
                setDataPost(data[0]);
            })
            .catch((err) => message.error("Error: ", err));
    }, []);
    return (
        <div style={{ height: "100vh" }}>
            <Navbar />
            {Object.keys(dataPost).length === 0 ? (
                <Skeleton active />
            ) : (
                <div
                    style={{
                        textAlign: "center",
                    }}
                >
                    <BackTop />
                    <Space
                        align="start"
                        direction="vertical"
                        style={{
                            width: "720px",
                            marginTop: "96px",
                        }}
                    >
                        <Title>{dataPost.title}</Title>
                        {/* Date and tags */}
                        <Space>
                            <Icon component={CalendarIcon} />
                            <Text>{dataPost.date}</Text>
                            {dataPost.tags.map((tag) => {
                                return (
                                    <Link
                                        key={
                                            Math.random() /
                                            Math.random()
                                        }
                                    >
                                        <Tag color="blue">
                                            {tag}
                                        </Tag>
                                    </Link>
                                );
                            })}
                        </Space>
                        {/* Featured Image */}
                        <Space size={-6} direction="vertical">
                            <Image
                                preview={false}
                                width={720}
                                src={dataPost.featuredImage}
                                alt=""
                            />
                        </Space>
                        {/* content */}

                        <Space>
                            <MarkDown
                                options={{
                                    overrides: {
                                        code: {
                                            component: SyntaxHighlighter,
                                            props: {
                                                language: jsx,
                                                style: atomOneDark,
                                                showLineNumbers: true,
                                                wrapLongLines: true,
                                            },
                                        },
                                    },
                                }}
                            >
                                {dataPost.content}
                            </MarkDown>
                        </Space>
                        <Card
                            style={{
                                textAlign: "left",
                                marginBottom: "64px",
                            }}
                            size="small"
                            title="Đánh giá bài viết"
                        >
                            <Rate
                                value={star}
                                onChange={handleChangeStar}
                            />
                        </Card>
                    </Space>
                </div>
            )}
        </div>
    );
});

export default Display;
