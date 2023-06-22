import { purchases } from "../../constants"
export default function ShoppingCart(props) {
    return (
        <div>
            <p>{props.name}</p>
        </div>
    )
}

// {purchases.forEach(element => {
//     <div>
//         <p>{element.name}</p>
//         <p>{element.quantity}</p>
//         <p>{element.unit}</p>
//         <p>{element.cost}</p>
//     </div>
// })}