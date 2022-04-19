import {Link} from 'react-router-dom'
import Item from '../models/Item'
import './BasicItem.css'

interface Props {
    item:Item;
}


function BasicItem({item}:Props) {
    return (
        <div className="BasicItem">
            <p>{item.name}</p>
            <p>${item.price}</p>
            <Link to ={`/details/${item.id}`}>Details</Link>
        </div>
    )
}

export default BasicItem