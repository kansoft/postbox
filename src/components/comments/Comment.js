import React from "react";

const Comment = ({data}) => (
    <li className="comment">{data.body}</li>
);

export default Comment;
