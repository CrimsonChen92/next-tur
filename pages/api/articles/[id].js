import { articles } from "../../../data";

// you can destructor and write it like below, with {query: {id}}
export default function handler({ query: { id } }, res) {
  const filtered = articles.filter((article) => article.id === id);

  if (filtered.length > 0) {
    res.status(200).json(filtered[0]);
  } else {
    res
      .status(404)
      .json({ message: `Article with the id of ${id} is not found` });
  }
}

//if you don't want to use destruct, the code below is the same as above.

// export default function handler(req, res) {
//   const test = req.query.id;
//   const filtered = articles.filter((article) => article.id === test);

//   if (filtered.length > 0) {
//     res.status(200).json(filtered[0]);
//   } else {
//     res
//       .status(404)
//       .json({ message: `Article with the id of ${test} is not found` });
//   }
// }
