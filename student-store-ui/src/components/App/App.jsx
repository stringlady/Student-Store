import * as React from "react"
import { BrowserRouter } from 'react-router-dom'
import Navbar from "../Navbar/Navbar"
import Sidebar from "../Sidebar/Sidebar"
import Home from "../Home/Home"
import "./App.css"
import ProductView from "../ProductView/ProductView"
import Logo from "../Logo/Logo"
import Footer from "../Footer/Footer"



export default function App() {
  
  return (
    <div className="app">
      <BrowserRouter>
      
        <main>
          {/* YOUR CODE HERE! */}
          <Sidebar />
          <div id="all">
          <Navbar />
          <div id="everything">
          <Home/>
          
        
          <ProductView />
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
                <Logo />
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
      </BrowserRouter>
    </div>
  )
}