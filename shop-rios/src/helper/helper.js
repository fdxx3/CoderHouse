import { collection } from "firebase/firestore";

import { db } from "../firebase/firebase";

// const ItemData = [
//   {
//     id: 1,
//     title: "producto1",
//     price: 2000,
//     pictureURL: producto1,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: "ofertas",
//   },
//   {
//     id: 2,
//     title: "producto2",
//     price: 3000,
//     pictureURL: producto2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: "ofertas",
//   },
//   {
//     id: 3,
//     title: "producto3",
//     price: 4000,
//     pictureURL: producto1,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: "ofertas",
//   },
//   {
//     id: 4,
//     title: "producto4",
//     price: 5000,
//     pictureURL: producto2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: "destacados",
//   },
//   {
//     id: 5,
//     title: "producto6",
//     price: 4000,
//     pictureURL: producto1,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: "destacados",
//   },
//   {
//     id: 6,
//     title: "producto7",
//     price: 5000,
//     pictureURL: producto2,
//     description:
//       "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
//     stock: 10,
//     initial: 1,
//     category: 1,
//   },
// ];

const getFetch = new Promise((resolve, reject) => {
  const query = collection(db, "ItemData");

  resolve(query);
});

// const getFetch = () => {
//   const getData = async () => {
//     return response;
//   };
// };

export default getFetch;
