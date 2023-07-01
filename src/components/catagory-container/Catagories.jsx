// components 
import Catagory from "../catagory-item/Catagory"


// sass 
import "./catagories.styles.scss"


export default function Catagories({catagories}) {

    return (
        <div className="catagories">
            {catagories.map(catagory => {
                return <Catagory key={catagory.id} catagory={catagory} />
            })}
        </div>
    )
}