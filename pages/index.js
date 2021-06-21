//instead of using Head for everypage, we made an Meta.js and made that to our layouts.js so now it's on every page.
// import Head from "next/head"; // this is used for meta tags, custom titles.
import ArticleList from "../components/ArticleList";
import { server } from "../config/index";

//with Next.js you don't need to bring in a 3rd routing, you can just make an file under the Pages. (ex: about.js)

export default function Home({ articles }) {
  return (
    <div>
      {/* <Head>  don't need the Head anymore, see code line 1 for explaination*/}
      <title>WebDev news</title>{" "}
      {/* The Head is imported, so we can use the  title and meta, the meta is for webcrawlers to see it on search engines*/}
      <meta name="keywords" content="web development, programming" />
      {/* </Head> */}
      {/* {articles.map((article) => (
        <h3>{article.title}</h3>
      ))}  instead of doing this, we make a articleList.js component*/}
      <ArticleList articles={articles} />
      {/* so we pass articles from getStaticProps to homes, then down to articleList.js*/}
    </div>
  );
}

// here we use our own information instead of getting it like the version below.
//we get the info for our API
export const getStaticProps = async () => {
  const res = await fetch(`${server}/api/articles`);
  const articles = await res.json();

  return {
    props: {
      articles,
    },
  };
};

//below we are going to fetch data using getStaticProp from an online source

// export const getStaticProps = async () => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts?_limit=6`
//   );
//   const articles = await res.json();

//   return {
//     props: {
//       articles,
//     },
//   };
// };
