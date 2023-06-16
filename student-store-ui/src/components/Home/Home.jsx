import * as React from "react"
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar"
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import ProductView from "../ProductView/ProductView"

export default function Home() {
  return (
    <div className="home">
      <div id="intro">
        <div className="words">
          <h1>Welcome! <br/>Find Your Goodies!</h1>
          <p>We have all kinds of merch. 
          Click on any of the items to start filling up your shopping cart. Checkout whenever you're ready.</p>
          </div>
        <div className="store">
          <img src="store.gif" />
        </div>

      </div>
      
      
    </div>
  )
}