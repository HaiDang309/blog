import React, { memo } from "react";

import { Space } from "antd";
import Icon from "@ant-design/icons";
import {
    CoffeeIcon,
    BookIcon,
    CodeIcon,
    ChessIcon,
    QuoteIcon,
} from "../../../svg";

const Header = memo((props) => {
    return (
        <div style={{ textAlign: "center" }}>
            <Space size={32} style={{ marginTop: "96px" }}>
                <Icon component={CoffeeIcon} />
                <Icon component={BookIcon} />
                <div
                    style={{
                        width: "50vw",
                        display: "flex",
                        flexDirection: "column",
                        alignItems: "flex-end",
                        fontFamily: "Dancing Script, cursive",
                    }}
                >
                    <div>
                        <Icon component={QuoteIcon} />
                        <span
                            style={{
                                fontSize: "32px",
                                fontWeight: "700",
                                marginLeft: "8px",
                            }}
                        >
                            Tôi chỉ biết mỗi một điều duy nhất
                            là tôi không biết gì cả.
                        </span>
                    </div>
                    <span
                        style={{
                            fontSize: "20px",
                            paddingRight: "32px",
                        }}
                    >
                        - Sokrates
                    </span>
                </div>
                <Icon component={CodeIcon} />
                <Icon component={ChessIcon} />
            </Space>
        </div>
    );
});

export default Header;
