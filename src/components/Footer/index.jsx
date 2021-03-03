import React, { memo } from 'react';

import { Layout, Space } from "antd";
import Icon from '@ant-design/icons';
import { CopyrightIcon } from '../../svg';

const Footer = memo(props => {
    const { Footer } = Layout;
    return (
            <Footer style={{ backgroundColor: "#20232a" }}>
                <div style={{ textAlign: "center", color: "white" }}>
                    <Space>
                        Copyright
                        <Icon component={CopyrightIcon} />
                        2021 by HaiDang309
                    </Space>
                </div>
            </Footer>
    );
})

export default Footer;
