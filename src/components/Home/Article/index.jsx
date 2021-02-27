import React, { memo } from "react";

import Posts from "./Posts";
import Search from "./Search";

import { Row, Col } from "antd";

const Article = memo((props) => {
    return (
        <Row
            style={{
                margin: "0px 32px",
                display: "flex",
                justifyContent: "space-between",
            }}
        >
            <Col span={16}>
                <Posts />
            </Col>
            <Col span={7}>
                <Search />
            </Col>
        </Row>
    );
});

export default Article;
