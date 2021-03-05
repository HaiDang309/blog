import React, { memo } from "react";

import { Result, Button } from "antd";

const Error = memo((props) => {
    return (
        <div>
            <Result
                status="404"
                title="404"
                subTitle="Oh oh! Lạc mất rồi!"
                extra={
                    <Button href="/" type="primary">
                        Đi về nhà
                    </Button>
                }
            />
        </div>
    );
});

export default Error;
