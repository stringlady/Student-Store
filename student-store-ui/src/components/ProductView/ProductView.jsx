import './ProductView.css'
import { products } from '../../../../student-store-express-api/data/db.json'
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import { Routes, Route } from 'react-router-dom'
import { Link } from 'react-router-dom';
import ProductDetail from '../Product Detail/ProductDetail';
import App from '../App/App';

export default function ProductView() {
    return (
        <div>
            
          <ProductGrid/>
        </div>
    )
}

export function ProductGrid(props) {
    const [catName, setCatName] = useState("All Categories");
    const [searched, setSearched] = useState([...products]);
    const bar = document.getElementById('bar');
    const view = document.getElementById('p-view');

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
        console.log(searched);
        if(bar.value.length > 0){
            let searchArr = [];
            let newVal = bar.value.toLowerCase();
            products.forEach((el) => {
                if((el.name).toLowerCase().includes(newVal)) {
                    searchArr.push(el);
                }
            })
            setSearched(searchArr)
        } else {
            setSearched(products)
        }
    }

    const handleSubmit = (event) => {
        event.preventDefault();
    }

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

   const addNum = () => {
    setNum(num + 1);
   }

   const subNum = () => {
    if (num > 0) {
        setNum(num - 1);
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
                <p>${props.price}</p>
            </div>
            <div id="buttons2">
                <button onClick={addNum}>+</button>
                <button onClick={subNum}>-</button>
            </div>
            </div>
            <div className='num'>
                <p>{num}</p>
            </div>
        </div>
        <br/>
        <br/>
        </div>
    )
}