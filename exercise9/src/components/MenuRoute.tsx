import "./MenuRoute.css"
import menu from "../menu"
import BasicItem from "./BasicItem"



function MenuRoute() {
    return (
        <div className="MenuRoute">
            {menu.map((item) =>
                <BasicItem key={item.id} item={item} />
                )} 
        </div>
    )
}

export default MenuRoute