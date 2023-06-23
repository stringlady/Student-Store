import * as React from "react"
import "./Sidebar.css"
import Logo from "../Logo/Logo"
import { Link } from "react-router-dom"
import { purchases } from "../../constants"
import { useState } from "react"
import { wishlist } from "../../constants"

export default function Sidebar() {
  const bar = document.querySelector(".sidebar");
  const opening = document.getElementById("open");
  const closing = document.getElementById("close");
  const cart = document.getElementById('cart');
  const [using, setUsing] = useState(purchases);
  const [updating, setUpdating] = useState(purchases);
  const receipt = document.getElementById("rec");
  const logo = document.getElementById('logo');
  const name = document.getElementById('name');
  const email = document.getElementById('email');
  const checkbox = document.getElementById('check');
  const error = document.getElementById("error");
  const empty = document.getElementById('empty');
  const forRemove = document.getElementById('forRemove');
  const [wishing, setWishing] = useState(wishlist);

  const helper = (purchase) => {
    return purchase.quantity != 0;
  }

  const handleRemove = () => {
    if(forRemove.value.length != 0) {
      wishing.map((w,idx) => {
        if(w.name.toLowerCase().includes(forRemove.value.toLowerCase()) === true) {
          setWishing(wishing.splice(idx, 1));
        }
      })
    }
  }

  const open = () => {
    bar.style.width = '40%';
    bar.classList.add('forColor');
    opening.classList.add('hide');
    closing.classList.remove('hide');
    cart.classList.remove('hide');
    logo.classList.add('hide');
    const setForUsing = purchases.filter(helper)
    setUsing(setForUsing);
    empty.classList.add('hide');
    error.classList.add('hide');
  }
  
  const close = () => {
    bar.style.width = '4%';
    bar.classList.remove('forColor');
    closing.classList.add('hide');
    opening.classList.remove('hide');
    cart.classList.add('hide');
    receipt.classList.add('hide');
    logo.classList.remove('hide');
   
  }

  //using
  const subtotal = () => {
    var sub = 0;
    using.map((u, idx) => {
      sub += parseFloat(u.cost);
    })
    return sub.toFixed(2);
  }

  //using
  const taxes = () => {
    var taxes = 0;
    using.map((u, idx) => {
      taxes += parseFloat(u.cost * 0.088);
    })
    return taxes.toFixed(2);
  }

   //using
   const subtotalU = () => {
    var sub = 0;
    updating.map((u, idx) => {
      sub += parseFloat(u.cost);
    })
    return sub.toFixed(2);
  }

  //using
  const taxesU = () => {
    var taxes = 0;
    updating.map((u, idx) => {
      taxes += parseFloat(u.cost * 0.088);
    })
    return taxes.toFixed(2);
  }

  const handleClick = () => {
    if(name.value.length > 0 && email.value.length > 0 && checkbox.checked && using.length != 0) {
      receipt.classList.remove("hide");
      setUsing([]);
      const setForUpdating = purchases.filter(helper)
      setUpdating(setForUpdating);
      name.value = '';
      email.value = '';
      if(error.classList.contains('hide') === false || empty.classList.contains('hide') === false) {
        error.classList.add('hide');
      }
    } else if (using.length === 0) {
      empty.classList.remove('hide');
    }
     else {
      error.classList.remove('hide');
    }
  }

  const exitClick = (event) => {
    event.preventDefault();
    receipt.classList.add('hide');
    setUsing([]);
  }

  return (
    <div className="sidebar">
    <section>
      <Link id="logo" to="/"><Logo/></Link>
      <img id="open" onClick={open} src="rarrow.png" />
      <img id="close" className="hide" onClick={close} src="arrow.png" />
      <div className="hide" id="cart">
      <h4 id="heading">Wish List</h4>
      <hr/>
      <div id="options">
        <p>Name</p>
        <p>Price</p>
      </div>
      <hr/>
      {wishlist.map((w, idx) => {
        return (
          <div>
          <div id="options">
            <p>{w.name}</p>
            <p>{w.price}</p>
          </div>
          <hr/>
          </div>
        )
      })}
      <br/>
      <div id="options">
        <input id="forRemove" type="text" placeholder="Name of Item to Remove" size={50}/>
        <button id="btn" onClick={handleRemove}>Remove</button>
      </div>
      <h4 id="heading">Shopping Cart</h4>
      <hr/>
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
        <form id="form">
            <label>Name</label>
            <br/>
            <input id="name" type="text" placeholder="Student Name" size={80}/>
            <br/>
            <label>Email</label>
            <br/>
            <input id="email" type="text" placeholder="student@codepath.org" size={80}/>
            <br/>
            <input id="check" type="checkbox"/><label>I agree to the <span id="green">terms and conditions</span></label>
            <br/>
          </form>
          <div id="btn2">
          <div id="error" className="hide">
          <label >You must fill in everything</label>
          <br/>
          <br/>
          </div>
          <div id="empty" className="hide">
          <label >Your cart is empty</label>
          <br/>
          <br/>
          </div>
          <button id="btn" onClick={handleClick}>Checkout</button>
          </div>
        <div id="rec" className="hide">
          <h4>Receipt</h4>
          <form>
          <ul>
            {updating.map((u, idx) => {
              return (
                <li>{u.quantity} total {u.name} purchased at a cost of ${u.unit.toFixed(2)} for a total cost of ${u.cost}</li>
              )
            })}
            <li>Before taxes the subtotal was ${subtotalU()}</li>
            <li>After taxes and fees were applied, the total comes out to ${(parseFloat(subtotalU()) + parseFloat(taxesU())).toFixed(2)}</li>
          </ul>
          <button id="btn" className="exit" onClick={exitClick}>Exit</button>
          </form>
        </div>
      </div>
    </section>
    </div>
  )
}
