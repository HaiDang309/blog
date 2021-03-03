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
    Layout
} from "antd";
import Icon from "@ant-design/icons";
import { CalendarIcon } from "../../svg";

import { useParams } from "react-router-dom";

import { getPostById } from "../../api";

import Navbar from "../../components/Navbar";

import marked from 'marked';
import hljs from 'highlight.js'

const Display = memo((props) => {
    let pid = useParams();
    const { Title, Text, Link } = Typography;
    const { Content } = Layout;
    const [dataPost, setDataPost] = useState({});
    const [star, setStar] = useState(0);
    const handleChangeStar = (star) => {
        setStar(star);
    };
    marked.setOptions({
        highlight: function (code) {
            return hljs.highlightAuto(code).value;
        },
    });
    useEffect(() => {
        document.body.style.backgroundColor = "#fafafa";
        getPostById(pid.pid)
            .then((data) => {
                setDataPost(data[0]);
            })
            .catch((err) => message.error("Error: ", err));
    }, []);
    const markdown = dataPost.content;
    useEffect(() => {
        console.log('"'+markdown+'"');
    })
    
    return (
        <>
            <Navbar />
            <Layout>
                <Content style={{ overflowY: "auto" }}>
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
                                    marginTop: "16px",
                                }}
                            >
                                <Title>{dataPost.title}</Title>
                                {/* Date and tags */}
                                <Space>
                                    <Icon
                                        component={CalendarIcon}
                                    />
                                    <Text>{dataPost.date}</Text>
                                    {dataPost.tags.map(
                                        (tag) => {
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
                                        }
                                    )}
                                </Space>
                                {/* Featured Image */}
                                <Image
                                    preview={false}
                                    width={720}
                                    src={dataPost.featuredImage}
                                    alt=""
                                />
                                {/* content */}

                                <div
                                    style={{
                                        textAlign: "left",
                                    }}
                                    id="output"
                                    dangerouslySetInnerHTML={{
                                        __html: marked(
                                            markdown
                                        ),
                                    }}
                                />

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
                                        onChange={
                                            handleChangeStar
                                        }
                                    />
                                </Card>
                            </Space>
                        </div>
                    )}
                </Content>
            </Layout>
        </>
    );
});

export default Display;
