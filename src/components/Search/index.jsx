import React from "react";

import { Input } from "antd";

const Search = () => {
    const { Search } = Input;
    return (
        <Search
            style={{ marginTop: "32px" }}
            placeholder="Tìm bài viết"
        />
    );
};

export default Search;
