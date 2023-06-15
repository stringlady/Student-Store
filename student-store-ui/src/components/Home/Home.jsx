import * as React from "react"
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar"
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import ProductView from "../ProductView/ProductView"

export default function Home() {
  const [cat, setCat] = useState("");
  return (
    <div className="home">
      <div id="intro">
        <div className="words">
          <h1>Welcome! <br/>Find your Merch!</h1>
          <p>We have all kinds of goodies. 
          Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
          </div>
        <div className="store">
          <img src="store.gif" />
        </div>

      </div>
      <SearchBar id="search" />
      <br/>
      <br/>
      <div className="catView">
      <img src='hamburgbutton.png' id="ham"/>
      {categories.map((c, idx) => {
          return (
          <CategoryView 
          key={c+idx}
          name={c.name}/>
        )
      })}
      </div>
      <br/>
      <br/>
      <h4>Best Selling Products</h4>
      <ProductView />
    </div>
  )
}

// {categories.map((c, idx) => {
//   return (
//     <CategoryView 
//     key={c+idx}
//     name={c.name}/>
//   )
// })}