import React, { forwardRef } from "react";

import "./Post.css";

import ThumbUpAltOutlinedIcon from "@material-ui/icons/ThumbUpAltOutlined";
import CommentIcon from "@material-ui/icons/Comment";
import ShareIcon from "@material-ui/icons/Share";
import SendIcon from "@material-ui/icons/Send";
import { Avatar } from "@material-ui/core";

import InputOption from "../common/InputOption";

const Post = forwardRef(
  ({ name, description, message, photoUrl, time }, ref) => {
    const postDate = time.toDate().toDateString();
    return (
      <div className="post" ref={ref}>
        <div className="post__header">
          <Avatar src={photoUrl} />
          <div className="post__info_header">
            <div className="post__info">
              <h2>{name}</h2>
              <p>{description}</p>
            </div>
            <div className="post__info_time">{postDate}</div>
          </div>
        </div>
        <div className="post__body">
          <p>{message}</p>
        </div>

        <div className="post__buttons">
          <InputOption
            Icon={ThumbUpAltOutlinedIcon}
            title="Like"
            color="gray"
          />
          <InputOption Icon={CommentIcon} title="Comment" color="gray" />
          <InputOption Icon={ShareIcon} title="Share" color="gray" />
          <InputOption Icon={SendIcon} title="Send" color="gray" />
        </div>
      </div>
    );
  }
);

export default Post;
