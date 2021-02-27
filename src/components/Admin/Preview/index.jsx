import React, { memo } from "react";

import Navbar from "../../Navbar";
import Preview from "./Preview";

const PreviewPage = memo((props) => {
    return (
        <div>
            <Navbar />
            <Preview />
        </div>
    );
});

export default PreviewPage;
