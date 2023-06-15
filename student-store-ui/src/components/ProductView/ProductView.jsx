import './ProductView.css'
import { products } from '../../../../student-store-express-api/data/db.json'

export default function ProductView() {
    return (
            <ProductGrid/>
    )
}

export function ProductGrid() {
    return(
        <div id="view">
            {products.map((pro, idx) => {
                return (
                    <ProductCard 
                    key={pro} 
                    name={pro.name}
                    image={pro.image}
                    price={pro.price}/>
                )
            })}
        </div>
    )
}

export function ProductCard(props) {
    return (
        <div>
        <div id="card">
            <img id="img" src={props.image}/>
            <p><strong>{props.name}</strong></p>
            <p>${props.price}</p>
            
        </div>
        <br/>
        <br/>
        </div>
    )
}