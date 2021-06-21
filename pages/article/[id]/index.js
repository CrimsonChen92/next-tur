import { server } from "../../../config/index";
import Link from "next/link";
import Meta from "../../../components/Meta";
import { useRouter } from "next/router";
//by using useRouter, we can ulitized the [id] next by the code below

function article({ article }) {
  //   const router = useRouter();
  //   const { id } = router.query; this is one way to nest it. Or we can do getServerSideProps and do it that way
  //   return <div>This is article {id}</div>;

  return (
    <>
      <Meta title={article.title} description={article.excerpt} />
      <h1>{article.title}</h1>
      <p>{article.body}</p>
      <br />
      <Link href="/">Go Back</Link>
    </>
  );
}
//this is the 3rd version, where we import {server} and use our own data.js info
export const getStaticProps = async (context) => {
  const res = await fetch(`${server}/api/articles/${context.params.id}`);

  const article = await res.json();

  return {
    props: {
      article,
    },
  };
};

export const getStaticPaths = async () => {
  const res = await fetch(`${server}/api/articles`);

  const articles = await res.json();
  const ids = articles.map((article) => article.id);
  const paths = ids.map((id) => ({ params: { id: id.toString() } }));

  return {
    //   paths: {params: {id: "1", id:"2", id:"3"} we will have to list all of them and the id needs to be strings}
    //so instead of writing them out, we map them as seen on line 39-41 and them write the code
    paths,
    fallback: false, //this means if that page doesnt exist, it'll go to an 404 page
  };
};

// the code below are two ways to get info if we fetch them from another source.
// the one with //// are the OG, then // are the 2nd version

// //if we want to use getStaticProps instead of getServerSideProps,
// //we will also need to make an getStaticPath to make everything dynamic
// export const getStaticProps = async (context) => {
//   const res = await fetch(
//     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
//   );

//   const article = await res.json();

//   return {
//     props: {
//       article,
//     },
//   };
// };

// export const getStaticPaths = async () => {
//   const res = await fetch(`https://jsonplaceholder.typicode.com/posts/`);

//   const articles = await res.json();
//   const ids = articles.map((article) => article.id);
//   const paths = ids.map((id) => ({ params: { id: id.toString() } }));

//   return {
//     //   paths: {params: {id: "1", id:"2", id:"3"} we will have to list all of them and the id needs to be strings}
//     //so instead of writing them out, we map them as seen on line 39-41 and them write the code
//     paths,
//     fallback: false, //this means if that page doesnt exist, it'll go to an 404 page
//   };
// };

// //below is using getServerSideProps
// // export const getServerSideProps = async (context) => {
// //   const res = await fetch(
// //     `https://jsonplaceholder.typicode.com/posts/${context.params.id}`
// //   );

// //   const article = await res.json();

// //   return {
// //     props: {
// //       article,
// //     },
// //   };
// // };

export default article;
