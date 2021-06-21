import styles from "../styles/Layout.module.css"; //making a Layout so we can pass it to _app to use overall
import Nav from "./Nav"; //we make a Nav.js to make Links and now we can use it on Layout which is pass to _app
import Header from "./Header";
import Meta from "./Meta"; //By adding the Meta Head page to layout we don't need to add Head to every page manualy.

function Layout({ children }) {
  return (
    <>
      <Meta />
      <Nav />
      <div className={styles.container}>
        <main className={styles.main}>
          <Header />
          {children}
        </main>
      </div>
    </>
  );
}

export default Layout;
