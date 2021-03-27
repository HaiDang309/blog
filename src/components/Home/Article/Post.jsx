import React, { memo } from "react";

import { Typography, Space, Image, Tag, Card, Row, Col, Button } from "antd";
import Icon from "@ant-design/icons";
import { CalendarIcon } from "../../../svg";

const Post = memo((props) => {
    const { Text, Title } = Typography;
    const {
        pid,
        featuredImage,
        title,
        date,
        description,
        query,
        tags,
        content,
    } = props;
    return (
      <Card style={{margin: "16px 0"}} size="small" bordered={false}>
        <Row>
          <Col xs={{ span: 0 }} lg={{ span: 12 }}>
            <img
              style={{
                maxWidth: "392px",
              }}
              alt=""
              src={featuredImage}
            />
          </Col>
          <Col
            xs={{ span: 24 }}
            lg={{ span: 12 }}
            style={{
              display: "flex",
              flexDirection: "column",
            }}
          >
            <Title style={{ marginBottom: "-8px", borderBottom: "none" }}>{title}</Title>
            <Space>
              <Icon component={CalendarIcon} />
              <Text disabled>{date}</Text>
              {tags.map((tag) => (
                <Tag
                  color={
                    tag === "react"
                      ? "blue"
                      : tag === "javascript"
                      ? "gold"
                      : "cyan"
                  }
                  key={Math.random() / Math.random()}
                >
                  {tag}
                </Tag>
              ))}
            </Space>
            <Text type="secondary">{description}</Text>
            <Space>
              <Button
                style={{ color: "white", marginTop: "8px" }}
                href={`/d/${pid}`}
                type="primary"
              >
                Đọc tiếp ...
              </Button>
            </Space>
          </Col>
        </Row>
      </Card>
    );
});

export default Post;
