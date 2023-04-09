import React from "react";

// Import styling
import "../styles/toast.scss";

const Toast = (props) => {
    const { message } = props;

    return message.length > 0 && <div className={"toast"}>{message}</div>;
};

export default Toast;
