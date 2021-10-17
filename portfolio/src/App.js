import React from "react";
import { BrowserRouter as Router } from "react-router-dom";
// import About from "./components/About";
import MyNav from "./components/MyNav";


export default function App() {
  return (
    <Router>
      <div>
        <MyNav />

      </div>
    </Router>
  );
}

// function Home() {
//   return <h2>Home</h2>;
// }

// function Users() {
//   return <h2>Users</h2>;
// }
