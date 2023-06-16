import * as React from "react"
import { BrowserRouter, Routes, Route } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import ProductView from "../ProductView/ProductView"
import Footer from "../Footer/Footer"
import { Link } from "react-router-dom"
import { products } from '../../../../student-store-express-api/data/db.json'
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView"
import { useLocation } from "react-router-dom"

export default function ProductDetail(props) {
    const location = useLocation();
    const info = location.state?.info;

    return (
        <div className="app">
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar />
          <div id="all">
          <Navbar />
          <div id="everything">
          <Home/>
          <form className="search">
                <input 
                type="text" 
                placeholder="Search" 
                size={90} 
                id="bar" />
                <button type='submit' id="search-button"><img src="glass2.png"/></button>
            </form>
           <br/>
            <br/>
            <div className="catView">
                {categories.map((c, idx) => {
                return (
                    <CategoryView 
                    key={idx}
                    label={c.name}/>
                )
                })}
            </div>
            <br/>
            <br/>
            <div id="info2">
                <h1>Product #{info.id}</h1>
                <img id="newImg" src={info.img}/>
                <p>{info.name}</p>
                <p>{info.desc}</p>
                <p>${info.price}</p>
                <Link to="/"><button>Back</button></Link>
            </div>
          <h4 id="about">About</h4>
          <br/>
            <div className="aboutus">
              <div id="info">
                <p>The codepath student store offers great products at great prices from a great team and for a great cause.</p>
                <p>We've searched far and wide for items that perk the interests of 
                  even the most eccentric students and decided to offer them all here in one place.</p>
                <p>All proceeds go towards bringing high quality CS education to college students around the country.</p>
              </div>
              <div id="logoo">
                
              </div>
            </div>
            <h4 id="contact">Contact Us</h4>
            <div id="contactUs">
              <div id="subContact">
              <p>Email:</p>
              <p>Phone:</p>
              <p>Address:</p>
              <p>Socials:</p>
              </div>
              <div id="subContact2">
                <p>code@codepath.org</p>
                <p>1-800-CODEPATH</p>
                <p>123 Fake Street, San Francisco, CA</p>
                <p></p>
              </div>
            </div>
            <br/>
            <br/>
          </div>
          <Footer/>
          </div>
          
        </main>
    </div>
    )
}