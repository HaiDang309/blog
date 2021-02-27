import React from "react";

import {
    Card,
    Space,
    Tag,
    Input,
    Divider,
    Typography,
} from "antd";
import Icon from "@ant-design/icons";
import { ReactIcon, JsIcon, GossipIcon } from "../../../svg";

const Search = () => {
    const { Link } = Typography;
    return (
        <Card size="small" style={{ marginTop: "32px" }}>
            <Input placeholder="Tìm bài viết" />
        </Card>
    );
};

export default Search;
