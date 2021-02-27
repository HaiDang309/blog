import React, { memo } from "react";

import Navbar from "../Navbar";

const Life = memo((props) => {
    return (
        <div>
            <Navbar />
            <div
                style={{
                    height: "256px",
                    backgroundColor: "black",
                }}
            >
                Life
            </div>
        </div>
    );
});

export default Life;
