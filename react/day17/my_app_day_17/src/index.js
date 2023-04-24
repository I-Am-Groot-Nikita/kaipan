// import React from 'react';
// import ReactDOM from 'react-dom/client';
// import './index.css';
// import App from './App';
// import reportWebVitals from './reportWebVitals';







// import { BrowserRouter, Routes, Route } from "react-router-dom";
// import Layout from "./pages/Layout";
// import Home from "./pages/Home";
// import Blogs from "./pages/Blogs";
// import Contact from "./pages/Contact";
// import NoPage from "./pages/NoPage"
// --------------------------------------
// Router 
// --------------------------------------
// --------------------------------------
// import './index.css';
// import ReactDOM from 'react-dom/client';
// export default function App() {
//     return (
//       <BrowserRouter>
//         <Routes>
//           <Route path="/" element={<Layout />}>
//             <Route index element={<Home />} />
//             <Route path="blogs" element={<Blogs />} />
//             <Route path="contact" element={<Contact />} />
//             <Route path="*" element={<NoPage />} />
//           </Route>
//         </Routes>
//       </BrowserRouter>
//     );
//   }
  
//   const root = ReactDOM.createRoot(document.getElementById('root'));
//   root.render(<App />);
//--------------------------------------


//--------------------------------------
// problem with rendering (use memo instead)
//--------------------------------------
//--------------------------------------
// import { useState } from "react";
// // import ReactDOM from "react-dom/client";
// import Todos from "./Todos";

// const App = () => {
//   const [count, setCount] = useState(0);
//   const [todos, setTodos] = useState(["todo 1", "todo 2"]);

//   const increment = () => {
//     setCount((c) => c + 1);
//   };

//   return (
//     <>
//       <Todos todos={todos} />
//       <hr />
//       <div>
//         Count: {count}
//         <button onClick={increment}>+</button>
//       </div>
//     </>
//   );
// };

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<App />);
//--------------------------------------


//--------------------------------------
// To fix this, we can use memo.
//--------------------------------------
//--------------------------------------

//--------------------------------------


//--------------------------------------
// useContext
//--------------------------------------
//--------------------------------------
// import { useState, createContext, useContext } from "react";
// import ReactDOM from "react-dom/client";

// const UserContext = createContext();

// function Component1() {
//   const [user, setUser] = useState("user");

//   return (
//     <UserContext.Provider value={user}>
//       <h1>{`Hello ${user}!`}</h1>
//       <Component2 />
//     </UserContext.Provider>
//   );
// }

// function Component2() {
//   return (
//     <>
//       <h1>Component 2</h1>
//       <Component3 />
//     </>
//   );
// }

// function Component3() {
//   return (
//     <>
//       <h1>Component 3</h1>
//       <Component4 />
//     </>
//   );
// }

// function Component4() {
//   return (
//     <>
//       <h1>Component 4</h1>
//       <Component5 />
//     </>
//   );
// }

// function Component5() {
//   const user = useContext(UserContext);

//   return (
//     <>
//       <h1>Component 5</h1>
//       <h2>{`Hello ${user} again!`}</h2>
//     </>
//   );
// }

// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(<Component1 />);
//--------------------------------------



  // --------------------------------------
  
// --------------------------------------
// const root = ReactDOM.createRoot(document.getElementById('root'));
// root.render(
//   <React.StrictMode>
//     <App />
//   </React.StrictMode>
// );

// // If you want to start measuring performance in your app, pass a function
// // to log results (for example: reportWebVitals(console.log))
// // or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
// reportWebVitals();
