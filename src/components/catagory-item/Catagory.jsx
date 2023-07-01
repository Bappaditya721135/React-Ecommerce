
// sass 
import "./catagory.styles.scss"

export default function Catagory({catagory}) {
    return (
        <div className="catagory">
            <img className="catagory-background-img" src={catagory.imageUrl} alt={`${catagory.title}-image`} />
            <div className="catagory-body">
                <h2>{catagory.title}</h2>
                <p>shop now</p>
            </div>
        </div>
    )
}