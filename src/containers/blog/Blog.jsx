import React from "react";
import "./blog.css";
import { cardA,cardB,cardC,cardD,cardE } from "./imports";    
import Article from "../../components/article/Article"
const Blog = () => {
  return (
    <div className="gpt3__blog section__padding">
      <h3 className="gradient__text">A lot is happening,<br /> We are blogging about it.</h3>
      <div className="gpt3__blog-article__container">
        <div className="gpt3__blog-article__container-GroupA">
          <Article image={cardA}/>
        </div>
        <div className="gpt3__blog-article__container-GroupB">
        <Article image={cardB}/>
        <Article image={cardC}/>
        <Article image={cardD}/>   
        <Article image={cardE}/>
        </div>
      </div>
    </div>
  );
};

export default Blog;
