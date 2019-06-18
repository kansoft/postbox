import React from "react";

const Comment = ({data}) => (
    <li className="comment">{data.body.split('\u000a').map((item, key) => {
        return <span key={key}>{item}<br/></span>
    })}</li>
);

export default Comment;
