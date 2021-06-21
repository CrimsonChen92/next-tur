//don't need the head page anymore
// import Head from "next/head"; // this is used for meta tags, custom titles.

import Meta from "../components/Meta";

function about() {
  return (
    <div>
      {/* <Head> */}
      <Meta title="About Page" />
      {/* <title> About this page</title> */}
      {/* </Head> */}
      <h1>About</h1>
    </div>
  );
}

export default about;
