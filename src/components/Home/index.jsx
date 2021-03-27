import React, { memo, Fragment, useEffect } from "react";

import Article from "./Article/index";
import Navbar from "../Navbar";

import { notification, Layout } from "antd";

const Home = memo((props) => {
    const { Content } = Layout;
    useEffect(() => {
        {
            notification.open({
                message: "Hi!😄",
                description: "Bạn thấy hay thì nhớ cho mình 5⭐ nhé! Xin cám ơn!😊",
                placement: "topRight",
                duration: 8,
            });
        }
    }, []);
    return (
      <Fragment>
        <Navbar />
        <Layout>
          <Content
            style={{
              margin: "24px 16px 0",
              overflowY: "auto",
            }}
          >
            <Article />
          </Content>
        </Layout>
      </Fragment>
    );
});

export default Home;
