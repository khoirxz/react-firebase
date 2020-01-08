import React from "react";
import _ from "lodash";
import { PageHeader } from "antd";

import Post from "./Post";
import api from "../mock_api";

function Posts(props) {
  return (
    <div className="posts_container">
      <div className="page_header_container">
        <PageHeader
          style={{
            border: "1px solid rgb(235, 237, 240)"
          }}
          title="Title"
        />
      </div>

      <div className="articles_container">
        {_.map(api, article => {
          return <Post title={article.title} content={article.content} />;
        })}
      </div>
    </div>
  );
}

export default Posts;
