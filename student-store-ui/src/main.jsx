import React from "react"
import ReactDOM from "react-dom/client"
import App from "./components/App/App"
import Home from "./components/Home/Home"
import './globals.css'
import { BrowserRouter, Routes, Route } from "react-router-dom"
import ProductDetail from "./components/Product Detail/ProductDetail"

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter>
      <Routes>
        <Route path="/product" element={<ProductDetail />}/>
        <Route path="/" element={<App />}/>
      </Routes>
  </BrowserRouter>,
)
