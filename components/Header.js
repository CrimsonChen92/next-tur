import headerStyles from "../styles/Header.module.css";

function Header() {
  return (
    <div>
      <h1 className={headerStyles.title}>
        <span>WebDev</span>News
      </h1>
      <p className={headerStyles.description}>
        Keep up to date with the latest web dev news
      </p>
    </div>
  );
}

//another way to use CSS without import, by adding jsx in style tag. See below for example
// function Header() {
// const x=5
//   return (
//     <div>
//       <h1>
//         <span>WebDev</span>News
//       </h1>
//       <style jsx>
//         {`
//           .title {
//             color: ${`x>3 ? "red": "blue"`};
//           }
//         `}
//       </style>
//     </div>
//   );
// }
export default Header;
