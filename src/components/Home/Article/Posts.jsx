import React, { memo, useState, useEffect } from "react";

import Post from "./Post";

import { Button, Divider, message, Skeleton, Typography } from "antd";

import { getPost, getPostByTag } from "../../../api";

import { useLocation } from 'react-router-dom';

function useQuery() {
    return new URLSearchParams(useLocation().search);
}

const Posts = memo((props) => {
    const category = useQuery().get('q');
    const { Link } = Typography;
    const [dataPost, setDataPost] = useState([]);
    const [title, setTitle] = useState('');
    useEffect(() => {
      if(!category) {
        setTitle("Bài viết mới nhất");
        getPost()
            .then((data) => setDataPost(data))
            .catch((err) => message.error("Error: ", err));
      }
      else {
        switch (category) {
            case "react":
                setTitle('Xếp loại: React')
                getPostByTag("react")
                    .then((data) => setDataPost(data))
                    .catch((err) =>
                        message.error("Error: ", err)
                    );
                return;
            case "javascript":
                setTitle('Xếp loại: JavaScript')
                getPostByTag("javascript")
                    .then((data) => setDataPost(data))
                    .catch((err) =>
                        message.error("Error: ", err)
                    );
                return;
            case "sidelines":
                setTitle("Xếp loại: Những câu chuyện ngoài lề")
                getPostByTag("đọc cho vui")
                    .then((data) => setDataPost(data))
                    .catch((err) =>
                        message.error("Error: ", err)
                    );
                return;
            default:
                return;
        }
      }
    }, [category]);
    
    return (
        <div style={{ marginTop: "32px", height: "100vh" }}>
            <Divider>{title}</Divider>
            {dataPost.length === 0
                ? <Skeleton active/>
                : dataPost.sort((a,b) => b.pid - a.pid).map((item) => {
                      return (
                          <Link
                              href={`/d/${item.pid}`}
                              key={
                                  Math.random() / Math.random()
                              }
                          >
                              <Post {...item} />
                              
                          </Link>
                      );
                  })}
            {/* <Button onClick={() => console.log(dataPost)}>
                Click me
            </Button> */}
        </div>
    );
});

export default Posts;