import React, { memo } from "react";

import { Space, Row, Col, Typography } from "antd";
import Icon from "@ant-design/icons";
import {
    CoffeeIcon,
    BookIcon,
    CodeIcon,
    ChessIcon,
    QuoteIcon,
} from "../../../svg";

const Header = memo((props) => {
    const { Text } = Typography;
    return (
        <>
            <Row>
                <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                    <Icon component={CoffeeIcon} />
                </Col>
                <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                    <Icon component={BookIcon} />
                </Col>
                <Col xs={{ span: 24 }} lg={{ span: 12 }}>
                    <div
                        style={{
                            display: "flex",
                            flexDirection: "column",
                            alignItems: "flex-end",
                            fontFamily:
                                "Dancing Script, cursive",
                            margin: "8px",
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
                                Tôi chỉ biết mỗi một điều duy
                                nhất là tôi không biết gì cả.
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
                </Col>
                <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                    <Icon component={CodeIcon} />
                </Col>
                <Col xs={{ span: 0 }} lg={{ span: 3 }}>
                    <Icon component={ChessIcon} />
                </Col>
            </Row>
        </>
    );
});

export default Header;
