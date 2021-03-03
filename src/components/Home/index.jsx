import React, { memo, Fragment, useEffect } from "react";

import Header from "./Header";
import Article from "./Article/index";
import Navbar from "../Navbar";

import { notification, Layout } from 'antd';

const Home = memo((props) => {
    const { Content } = Layout;
    useEffect(() => {
        {
            notification.open({
                message: "Chào cậu!",
                description:"Cám ơn cậu đã ghé thăm trang của tớ, hy vọng nó sẽ giúp được chút gì đó cho cậu, nếu cậu thấy hay thì đánh giá giúp mình 5⭐ nhé.😊😙😍",
                placement: "topRight",
                duration: 8
            });
        }
    }, [])
    return (
        <Fragment>
            <Navbar />
            <Layout>
                <Content style={{ margin: "24px 16px 0", overflowY: "auto" }}>
                    <Header />
                    <Article />
                </Content>
            </Layout>
        </Fragment>
    );
});

export default Home;
