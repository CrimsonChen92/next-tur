import articleStyles from "../styles/Article.module.css";
import Link from "next/link";
//we made this component to make each articleItem as a card, and it's being pass info from articleList

function ArticleItem({ article }) {
  //noticed below, we made a nest route for each article by using the as [id], but this page will take you to an 404
  //in order for these nest pages to actually show something, we can go to the pages folder and make an subfolder
  //called article, and another folder in article called [id], same as the href link below.
  return (
    <Link href="/article/[id]" as={`/article/${article.id}`}>
      <a className={articleStyles.card}>
        <h3>{article.title} &rarr;</h3>
        <p>{article.excerpt}</p>{" "}
        {/* here we use .excerpt which is shorter than .body*/}
      </a>
    </Link>
  );
}

export default ArticleItem;
