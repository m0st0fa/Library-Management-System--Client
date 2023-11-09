/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const HomeBookDetails = ({item}) => {
    const {category,image} = item
    return (
        <div className="card outline outline-offset-2 outline-yellow-500">
            <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <Link to={`/books/${category}`} className="w-full">
                        <button className="btn w-full ">{category}</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeBookDetails;