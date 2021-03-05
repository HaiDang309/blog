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
    Layout,
    Row,
    Col

} from "antd";
import Icon from "@ant-design/icons";
import { CalendarIcon } from "../../svg";

import { useParams } from "react-router-dom";

import { getPostById } from "../../api";

import Navbar from "../../components/Navbar";

import marked from "marked";
import hljs from "highlight.js";

import ReactMarkdown from "markdown-to-jsx";

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
                setDataPost(data);
            })
            .catch((err) => message.error("Error: ", err));
    }, []);
    return (
      <Row>
        <Col xs={{ span: 0 }} lg={{ span: 24 }}>
          <>
            <Layout style={{ background: "#282c35" }}>
              <Content
                style={{
                  overflowY: "auto",
                  padding: "0 8px",
                  textAlign: "center",
                  margin: "0 64px",
                }}
              >
                {Object.keys(dataPost).length === 0 ? (
                  <Skeleton active />
                ) : (
                  <div style={{ textAlign: "center" }}>
                    <Space
                      align="start"
                      direction="vertical"
                      style={{
                        marginTop: "16px",
                      }}
                    >
                      <Title
                        style={{
                          wordBreak: "keep-all",
                          textAlign: "left",
                          color: "#ffa7c4",
                        }}
                      >
                        {dataPost.title}
                      </Title>
                      {/* Date and tags */}
                      <Space>
                        <Text style={{ color: "white" }}>{dataPost.date}</Text>
                        {dataPost.tags.map((tag) => {
                          return (
                            <Link key={Math.random() / Math.random()}>
                              <Tag
                                color={
                                  tag === "react"
                                    ? "blue"
                                    : tag === "javascript"
                                    ? "gold"
                                    : "cyan"
                                }
                              >
                                {tag}
                              </Tag>
                            </Link>
                          );
                        })}
                      </Space>
                      {/* Featured Image */}


                        <Image
                          preview={false}
                          src={dataPost.featuredImage}
                          alt=""
                        />

                      {/* content */}

                      <div
                        style={{
                          textAlign: "left",
                          wordBreak: "keep-all",
                          color: "white",
                          fontFamily: "Merriweather, serif",
                        }}
                        id="output"
                        dangerouslySetInnerHTML={{
                          __html: marked(dataPost.content),
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
                        <Rate value={star} onChange={handleChangeStar} />
                      </Card>
                    </Space>
                  </div>
                )}
              </Content>
            </Layout>
          </>
        </Col>

        <Col xs={{ span: 24 }} lg={{ span: 0 }}>
          <>
            <Layout style={{ background: "#282c35" }}>
              <Content
                style={{
                  overflowY: "auto",
                }}
              >
                {Object.keys(dataPost).length === 0 ? (
                  <Skeleton active />
                ) : (
                  <div>
                    <Space
                      align="start"
                      direction="vertical"
                      style={{
                        width: "100vw",
                        marginTop: "16px",
                        padding: "0 16px"
                      }}
                    >
                      <Title
                        style={{
                          wordBreak: "keep-all",
                          textAlign: "left",
                          color: "#ffa7c4",
                        }}
                      >
                        {dataPost.title}
                      </Title>
                      {/* Date and tags */}
                      <Space>
                        <Text style={{ color: "white" }}>{dataPost.date}</Text>
                        {dataPost.tags.map((tag) => {
                          return (
                            <Link key={Math.random() / Math.random()}>
                              <Tag
                                color={
                                  tag === "react"
                                    ? "blue"
                                    : tag === "javascript"
                                    ? "gold"
                                    : "cyan"
                                }
                              >
                                {tag}
                              </Tag>
                            </Link>
                          );
                        })}
                      </Space>
                      {/* Featured Image */}


                        <Image

                          preview={false}
                          src={dataPost.featuredImage}
                          alt=""
                        />


                      {/* content */}

                      <div
                        style={{
                          textAlign: "left",
                          wordBreak: "keep-all",
                          color: "white",
                          fontFamily: "Merriweather, serif",
                        }}
                        id="output"
                        dangerouslySetInnerHTML={{
                          __html: marked(dataPost.content),
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
                        <Rate value={star} onChange={handleChangeStar} />
                      </Card>
                    </Space>
                  </div>
                )}
              </Content>
            </Layout>
          </>
        </Col>
      </Row>
    );
});

export default Display;
