import articleStyles from "../styles/Article.module.css";
import ArticleItem from "./ArticleItem";

//This is the ArticleList that is the parent to ArticleItem, in AI we made ID nest links.
//for that to work, we want to make a folder called article under pages, and then another folder called [id],
//[id] folder needs to match what we named in articleItem
//Finally we make a index.js file in id to link up the nested pages.
function ArticleList({ articles }) {
  return (
    <div className={articleStyles.grid}>
      {articles.map((article) => (
        <ArticleItem article={article} />
      ))}
    </div>
  );
}

export default ArticleList;
