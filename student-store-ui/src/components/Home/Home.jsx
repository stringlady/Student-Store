import * as React from "react"
import "./Home.css"
import SearchBar from "../SearchBar/SearchBar"
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import ProductView from "../ProductView/ProductView"
import Hero from "../Hero/Hero"

export default function Home() {
  return (
    <div className="home">
      <Hero/>
    </div>
  )
}