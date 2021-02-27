import React, { memo, useState, useEffect } from "react";

import {
    Input,
    Tag,
    Space,
    Image,
    Button,
    message,
} from "antd";

import { useDispatch } from "react-redux";

import moment from "moment";
import "moment/locale/vi";

import firebase from "../../Services/firebase";

const Edit = memo((props) => {
    const db = firebase.firestore();
    const dispatch = useDispatch();
    const { TextArea } = Input;
    const [tagContainer, setTagContainer] = useState([]);
    const [inputTitle, setInputTitle] = useState("");
    const [inputTag, setInputTag] = useState("");
    const [
        inputFeaturedImage,
        setInputFeaturedImage,
    ] = useState("");
    const [inputDate, setInputDate] = useState('');
    const [inputContent, setInputContent] = useState("");
    const [inputDescription, setInputDescription] = useState(
        ""
    );
    const [inputQuery, setInputQuery] = useState("");
    const [inputKeywords, setInputKeywords] = useState("");
    const [pids, setPids] = useState([]);
    // const [keywordContainer, setKeywordContainer] = useState([]);
    const handleChangeTitle = (e) => {
        setInputTitle(e.target.value);
    };
    const handleChangeContent = (e) => {
        setInputContent(e.target.value);
    };
    const handleChangeDescription = (e) => {
        setInputDescription(e.target.value);
    };
    const handleChangeFeaturedImage = (e) => {
        setInputFeaturedImage(e.target.value);
    };
    const handleChangeQuery = (e) => {
        setInputQuery(e.target.value);
    };
    const handleChangeKeywords = (e) => {
        setInputKeywords(e.target.value);
    };
    const handleChangeDate = e => {
        setInputDate(e.target.value);
    }
    const handleInputTag = (e) => {
        setInputTag(e.target.value);
    };
    const handleSubmitTag = (e) => {
        e.preventDefault();
        setTagContainer([...tagContainer, inputTag]);
        setInputTag("");
    };
    const handleDeleteTag = (item) => {
        setTagContainer(
            tagContainer.filter((tag) => tag !== item)
        );
    };
    const handleReturnHome = (e) => {
        window.localStorage.setItem(
            "auth",
            JSON.stringify(false)
        );
        window.location.reload();
    };
    const handleLogOut = (e) => {
        window.localStorage.setItem(
            "auth",
            JSON.stringify(false)
        );
        window.location.reload();
    };
    const handlePreview = (e) => {
        // dispatch({
        //   type: "PREVIEW_POST",
        //   payload: {
        //     pid: new Date().valueOf() / Math.random(),
        //     featuredImage: inputFeaturedImage,
        //     title: inputTitle,
        //     date: moment().format("L"),
        //     tags: tagContainer,
        //     content: inputContent,
        //   },
        // });
    };
    const handlePublish = (e) => {
        if (
            !inputTitle ||
            !inputContent ||
            !inputDescription ||
            !inputKeywords ||
            !inputQuery ||
            !inputDate
        ) {
            message.error("Missing information!");
            return;
        }
        const pid = new Date().valueOf().toString();
        db.collection("posts")
            .doc(pid)
            .set({
                pid: pid,
                featuredImage: inputFeaturedImage,
                title: inputTitle,
                date: inputDate,
                description: inputDescription,
                query: inputQuery,
                tags: tagContainer,
                content: inputContent,
                keywords: inputKeywords.split(","),
            })
            .then(() => {
                setPids([pid, ...pids]);
                message.success("Successfully publish!");
            });
        setInputContent("");
        setInputDescription("");
        setInputFeaturedImage("");
        setInputKeywords("");
        setInputQuery("");
        setInputTag("");
        setInputTitle("");
    };
    useEffect(() => {
        window.localStorage.setItem(
            "pids",
            JSON.stringify(pids)
        );
    });
    return (
        <div style={{ padding: "16px 16px", height: "100vh" }}>
            <div
                style={{
                    display: "flex",
                    flexDirection: "column",
                    gap: "16px",
                }}
            >
                <TextArea
                    value={inputTitle}
                    onChange={handleChangeTitle}
                    autoSize
                    placeholder="Title"
                />
                <Space>
                    <Input
                        prefix={tagContainer.map((item) => {
                            return (
                                <Tag
                                    onClose={() =>
                                        handleDeleteTag(item)
                                    }
                                    key={
                                        new Date().valueOf() /
                                        Math.random()
                                    }
                                    closable
                                >
                                    {item}
                                </Tag>
                            );
                        })}
                        value={inputTag}
                        onPressEnter={handleSubmitTag}
                        onChange={handleInputTag}
                        placeholder="Tags. At least 1 tag."
                    />
                    <Input
                        value={inputDescription}
                        onChange={handleChangeDescription}
                        placeholder="Description"
                    />
                    <Input
                        value={inputQuery}
                        onChange={handleChangeQuery}
                        placeholder="Query"
                    />
                    <Input
                        value={inputKeywords}
                        onChange={handleChangeKeywords}
                        placeholder="Keywords: separate by comma or .csv file"
                    />
                    <Input value={inputDate} onChange={handleChangeDate} placeholder="Date" />
                </Space>
                <Space
                    style={{
                        display: "flex",
                        justifyContent: "space-between",
                    }}
                >
                    <Space>
                        <Input
                            onChange={handleChangeFeaturedImage}
                            placeholder="Image's url"
                        />
                        <Image
                            style={{ width: "256px" }}
                            src={inputFeaturedImage}
                            alt=""
                        />
                    </Space>
                    {/* Logout - preview - publish button */}
                    <Space style={{ marginBottom: "24px" }}>
                        <Button
                            onClick={handlePublish}
                            type="primary"
                        >
                            Publish
                        </Button>
                        <Button
                            onClick={handlePreview}
                            type="dashed"
                            href="/admin/preview"
                            target="_blank"
                        >
                            Preview
                        </Button>

                        <Button
                            href="/"
                            onClick={handleReturnHome}
                            type="link"
                        >
                            Home
                        </Button>

                        <Button onClick={handleLogOut} danger>
                            Log out
                        </Button>
                    </Space>
                </Space>
                <TextArea
                    onChange={handleChangeContent}
                    value={inputContent}
                    id="textarea-content"
                    autoSize={{ minRows: 15 }}
                    showCount
                    placeholder="Markdown syntax is supported."
                />
            </div>
            <div style={{ textAlign: "center" }}></div>
        </div>
    );
});

export default Edit;
