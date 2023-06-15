import './ProductView.css'
import { products } from '../../../../student-store-express-api/data/db.json'
import { categories } from '../../constants'
import CategoryView from "../CategoryView/CategoryView";
import { useState } from "react";
import SearchBar from '../SearchBar/SearchBar';

export default function ProductView(props) {
    return (
        <div>
        
          <ProductGrid/>
          </div>
    )
}

export function ProductGrid() {
    const [catName, setCatName] = useState("All Categories");
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

    return(
        <div>
        <SearchBar id="search" />
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
          <div id="view">
            {products.map((pro, idx) => {
                return (
                    <ProductCard 
                    key={pro} 
                    name={pro.name}
                    image={pro.image}
                    price={pro.price}
                    isActive={categoryActive(pro.category)}/>
                )
            })}
        </div>
        </div>
    )
}

export function ProductCard(props) {
   const cardClassName = props.isActive ? 'card' : 'hide';
   const [num, setNum] = useState(0);

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
                <p><strong>{props.name}</strong></p>
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