import * as React from "react"
import "./Sidebar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
import { purchases } from "../../constants"
import { useState } from "react"

export default function Sidebar() {
  const bar = document.querySelector(".sidebar");
  const opening = document.getElementById("open");
  const closing = document.getElementById("close");
  const cart = document.getElementById('cart');
  const [using, setUsing] = useState(purchases);

  const helper = (purchase) => {
    return purchase.quantity != 0;
  }

  const open = () => {
    bar.style.width = '40%';
    opening.classList.add('hide');
    closing.classList.remove('hide');
    cart.classList.remove('hide');
    const setForUsing = purchases.filter(helper)
    setUsing(setForUsing);
  }
  
  const close = () => {
    bar.style.width = '4%';
    closing.classList.add('hide');
    opening.classList.remove('hide');
    cart.classList.add('hide');
  }

  const subtotal = () => {
    var sub = 0;
    using.map((u, idx) => {
      sub += parseFloat(u.cost);
    })
    return sub.toFixed(2);
  }

  const taxes = () => {
    var taxes = 0;
    using.map((u, idx) => {
      taxes += parseFloat(u.cost * 0.088);
    })
    return taxes.toFixed(2);
  }

  return (
    <section className="sidebar">
      <Link to="/"><Logo/></Link>
      <img id="open" onClick={open} src="arrow.png" />
      <img id="close" className="hide" onClick={close} src="rarrow.png" />
      <div className="hide" id="cart">
      <div id="options">
          <p>Name</p>
          <p>Quantity</p>
          <p>Unit Price</p>
          <p>Cost</p>
        </div>
        <hr/>
        {using.map((u, idx) => {
          if(u.quantity != 0) {
            return(
              <div>
              <div id="options">
              <p>{u.name}</p>
              <p>{u.quantity}</p>
              <p>{u.unit.toFixed(2)}</p>
              <p>{u.cost}</p>
              </div>
              <hr/>
              </div>
            )
          }
        })}
        <div id="helping">
        <div id="options">
        <p>Subtotal:</p>
        <p>{subtotal()}</p>
        </div>
        <hr/>
        <div id="options">
        <p>Taxes and Fees:</p>
        <p>{taxes()}</p>
        </div>
        <hr/>
        <div id="options">
        <p>Total:</p>
        <p>{(parseFloat(subtotal()) + parseFloat(taxes())).toFixed(2)}</p>
        </div>
        <hr/>
        </div>
        <div id="btn2">
        <button id="btn">Checkout</button>
        </div>
        
      </div>
      
    </section>
  )
}
