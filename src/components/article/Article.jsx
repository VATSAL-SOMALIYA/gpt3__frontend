import React from "react";
import "./article.css";
const Article = ({ image }) => {
  return (
    <div className="gpt3__article">
      <div className="gpt3__article-container">
        <div className="gpt3__article-image">
          <img src={image} alt="blog-image" />
        </div>

        <div className="gpt3__article-text">
          <span>Sep 26, 2021</span>
          <p>GPT-3 and Open AI is the future. Let us exlore how it is?</p>
          <span>Read Full Article</span>
        </div>
      </div>
    </div>
  );
};

export default Article;
