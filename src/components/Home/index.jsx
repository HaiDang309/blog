import React, { memo, Fragment, useEffect } from "react";

import Header from "./Header";
import Article from "./Article/index";
import Navbar from "../Navbar";
import Footer from '../Footer';

import { notification } from 'antd';

const Home = memo((props) => {
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
            <Header />
            <Article />
            <Footer />
        </Fragment>
    );
});

export default Home;
