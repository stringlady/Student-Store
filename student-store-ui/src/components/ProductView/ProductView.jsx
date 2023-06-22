import './ProductView.css'
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import { Link } from 'react-router-dom';
import { useEffect } from 'react';
import axios from 'axios';
import { purchases } from '../../constants';
import ShoppingCart from '../ShoppingCart/ShoppingCart';

export default function ProductView() {
    return (
        <div> 
          <ProductGrid/>
        </div>
    )
}

export function ProductGrid(props) {
    const [products, setProducts] = useState([]);
    const [err, setError] = useState('');
    const [fetching, setIsFetching] = useState(false);
    const [catName, setCatName] = useState("All Categories");
    const [searched, setSearched] = useState(products);
    const bar = document.getElementById('bar');

    useEffect(() => {
        const authUser = async () => {
          setIsFetching(true);
    
          try {
            const res = await axios.get("http://localhost:3001/store");
            if (res?.data?.products) {
              //console.log(res?.data?.products);
              setProducts(res.data.products);
              setSearched(res.data.products);
            } else {
              setError("Error fetching products.");
            }
          } catch (err) {
            console.log(err);
            const message = err?.response?.data?.error?.message;
            setError(message ?? String(err));
          } finally {
            setIsFetching(false);
          }
        };
    
        authUser();
      }, []);

    const changeCatName = (element) => {
        setCatName(element);
    }

    const categoryActive = (cat) => {
        if(catName.toLowerCase() === cat) {
            return true;
        } else if (catName === "All Categories") { 
            return true;
        } else {
            return false;
        }
    }

    const getSearchedList = () => {
        if(bar.value.length > 0){
            let searchArr = [];
            let newVal = bar.value.toLowerCase();
            products.forEach((el) => {
                if((el.name + el.category + el.description).toLowerCase().includes(newVal)) {
                    searchArr.push(el);
                }
            })
            setSearched(searchArr);
        } else {
            setSearched(products);
        }
        
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

    //console.log(searched);

    return(
        <div>
            <form className="search" onSubmit={handleSubmit}>
                <input 
                type="text" 
                placeholder="Search" 
                size={90} 
                id="bar" 
                onChange={getSearchedList}/>
                <button type='submit' id="search-button"><img src="glass2.png"/></button>
            </form>
           <br/>
            <br/>
            <div className="catView">
                {categories.map((c, idx) => {
                return (
                    <CategoryView 
                    key={idx}
                    label={c.name}
                    handleClick={() => changeCatName(c.name)}/>
                )
                })}
            </div>
            <br/>
            <h4 id="buy">Best Selling Products</h4>
            <div id='view'>
                {searched.map((s,idx) => {
                    return (
                        <div>
                        <ProductCard
                        key = {s}
                        id={s.id}
                        name={s.name}
                        image={s.image}
                        price={s.price}
                        desc={s.description}
                        isActive={categoryActive(s.category)}/>
                        </div>
                    )
                })}
            </div>
            <div id="desc">
            </div>
        </div>
    )
}

export function ProductCard(props) {
   const cardClassName = props.isActive ? 'card' : 'hide';
   const [num, setNum] = useState(0);
   const info = {
    id: props.id,
    name: props.name,
    img: props.image,
    price: props.price,
    desc: props.desc
   }

   const cart = {
    name: props.name,
    quantity: 1,
    unit: props.price,
    cost: props.price
   }

   const addNum = () => {
    setNum(num + 1);
    cart.quantity = num + 1;
    cart.cost = (cart.quantity * cart.cost).toFixed(2);
    purchases.forEach(element => {
        if(element.name === props.name) {
            element.quantity = cart.quantity;
            element.cost = cart.cost;
        }
    })
   }

   const subNum = () => {
    if (num > 0) {
        setNum(num - 1);
        cart.quantity = num - 1;
        cart.cost = (cart.quantity * cart.cost).toFixed(2);
        purchases.forEach(element => {
            if(element.name === props.name) {
                element.quantity = cart.quantity;
                element.cost = cart.cost;
            }
        })
    }
   }
    return (
        <div>
            <div className={cardClassName}>
                <img id="img" src={props.image}/>
                <div id="desc">
                    <div>
                        <Link
                            className='forColor' 
                            to='/product'
                            state={{info:info}}>
                            <p><strong>{props.name}</strong></p>
                        </Link>
                        <p>${props.price.toFixed(2)}</p>
                    </div>
                    <div id="buttons2">
                        <button onClick={addNum}>+</button>
                        <button onClick={subNum}>-</button>
                        <p>{num}</p>
                    </div>
                </div>
            </div>
            <br/>
            <br/>
        </div>
    )
}