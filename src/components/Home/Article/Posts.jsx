import React, { memo, useState, useEffect, useRef } from "react";

import Post from "./Post";

import {
  Button,
  message,
  Skeleton,
  Typography,
  Pagination,
  Row,
  Col,
  Space,
} from "antd";

import { getPost, getPostByTag } from "../../../api";

import { useLocation } from "react-router-dom";

function useQuery() {
  return new URLSearchParams(useLocation().search);
}

const Posts = memo((props) => {
  const category = useQuery().get("q");
  const { Link } = Typography;
  const [dataPost, setDataPost] = useState([]);
  const [title, setTitle] = useState("");
  useEffect(() => {
    if (!category) {
      setTitle("Bài viết mới nhất");
      getPost()
        .then((data) => {
          setDataPost(data);
        })
        .catch((err) => message.error(err));
    }
    else {
        switch (category) {
            case "react":
                setTitle("Xếp loại: React");
                getPostByTag("react")
                    .then((data) => setDataPost(data))
                    .catch((err) =>
                        message.error("Error: ", err)
                    );
                return;
            case "javascript":
                setTitle("Xếp loại: JavaScript");
                getPostByTag("javascript")
                    .then((data) => setDataPost(data))
                    .catch((err) =>
                        message.error("Error: ", err)
                    );
                return;
            case "sidelines":
                setTitle(
                    "Xếp loại: Những câu chuyện ngoài lề"
                );
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
  }, []);

  return (
    <Row>
      <Col style={{ margin: "0 auto" }} xs={{ span: 24 }} lg={{ span: 20 }}>
        <div>
          <Space style={{ fontSize: "1.5em", borderBottom: "4px solid rgba(0,0,0,0.3)", marginBottom: "8px", paddingBottom: "-4px" }}>
            {title}
          </Space>
          {dataPost.length === 0 ? (
            <Skeleton active />
          ) : (
            dataPost
              .sort((a, b) => b.pid - a.pid)
              .map((item) => {
                return <Post key={Math.random() / Math.random()} {...item} />;
              })
          )}
          <Pagination
            style={{
              margin: "1.5em 0",
              textAlign: "right",
            }}
            defaultPageSize={6}
            defaultCurrent={1}
            pageSize={6}
            defaultCurrent={1}
            responsive
            total={dataPost.length === 0 ? 0 : dataPost.length}
          />
        </div>
      </Col>
    </Row>
  );
});

export default Posts;
