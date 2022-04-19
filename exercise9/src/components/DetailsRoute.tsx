import { useParams } from "react-router-dom";
import './DetailsRoute.css'
import Item from "../models/Item";
import menu from '../menu'



function DetailsRoute() {
    const id = useParams().id;
    const foundItem: Item | undefined = menu.find((item) => item.id === id);
    return (
        <div className="DetailsRoute">
            <p>Name:{foundItem?.name}</p>
            <p>Calories:{foundItem?.calories}</p>
            <p>Description:{foundItem?.description}</p>
            <p>Vegetarian:{foundItem?.vegetarian ? "yes": "no"}</p>
            <p>Price:${foundItem?.price}</p>
        </div>
    )
}

export default DetailsRoute