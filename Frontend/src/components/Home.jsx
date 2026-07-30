import React from "react";
import books from "../assets/Books";
import "./Home.css";


function Home() {
  return (
    <div>
      <h1>Welcome to the book store</h1>
      <div>
        {books.map((book)=>){
          
        }}
      </div>
    </div>
  )
}

export default Home
