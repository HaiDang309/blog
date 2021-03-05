import React, { memo, Fragment, useEffect } from "react";

import Article from "./Article/index";
import Navbar from "../Navbar";

import { notification, Layout } from "antd";

const Home = memo((props) => {
    const { Content } = Layout;
    useEffect(() => {
        {
            notification.open({
                message: "Lorem Ipsum",
                description:
                    "Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been the industry's standard dummy text ever since the 1500s, when an unknown printer took a galley of type and scrambled it to make a type specimen book.",
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
