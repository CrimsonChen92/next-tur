import Link from "next/link"; //instead of using <a>href, next have a Link that does that
import navStyles from "../styles/Nav.module.css"; //css from styles.Nav.modules.css

function Nav() {
  return (
    <nav className={navStyles.nav}>
      <ul>
        <li>
          <Link href="/">Home</Link>
        </li>
        <li>
          <Link href="about">About</Link>
        </li>
      </ul>
    </nav>
  );
}

export default Nav;
