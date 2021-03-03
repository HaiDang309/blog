import React, { memo } from "react";

import Posts from "./Posts";

import { Row, Col } from "antd";

const Article = memo((props) => {
    return (
            <Posts />
    );
});

export default Article;
