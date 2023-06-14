import * as React from "react"
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar"

export default function Home() {
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
      <h4>Best Selling Products</h4>
    </div>
  )
}
