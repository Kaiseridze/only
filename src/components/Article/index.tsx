import { FC } from "react";
import { IArticle } from "../../models";
import "./Article.scss";

const Article: FC<IArticle> = ({ text, title }) => {
  return (
    <article className="article">
      <h3 className="article__title">{title}</h3>
      <p className="article__text">{text}</p>
    </article>
  );
};

export default Article;
