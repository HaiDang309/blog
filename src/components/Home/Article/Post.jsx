import React, { memo } from "react";

import { Card, Typography, Space, Image, Tag } from "antd";
import Icon from "@ant-design/icons";
import { CalendarIcon } from "../../../svg";

const Post = memo((props) => {
    const { Meta } = Card;
    const { Text } = Typography;
    const {
        featuredImage,
        title,
        date,
        description,
        query,
        tags,
        content,
    } = props;
    return (
        <Card
            hoverable
            bordered={false}
            style={{
                display: "flex",
                margin: "8px 0",
            }}
            cover={
                <img
                    style={{
                        width: "360px",
                        minWidth: "128px",
                    }}
                    alt=""
                    src={featuredImage}
                />
            }
        >
            <Meta
                title={title}
                description={
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                        }}
                    >
                        <Space>
                            <Icon component={CalendarIcon} />
                            <Text disabled>{date}</Text>
                            {tags.map((item) => (
                                <Tag
                                    key={
                                        Math.random() /
                                        Math.random()
                                    }
                                >
                                    {item}
                                </Tag>
                            ))}
                        </Space>
                        <Text type="secondary">
                            {description}
                        </Text>
                    </div>
                }
            />
        </Card>
    );
});

export default Post;
