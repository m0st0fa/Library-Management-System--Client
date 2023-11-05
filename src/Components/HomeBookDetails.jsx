/* eslint-disable react/prop-types */
import { Link } from "react-router-dom";
const HomeBookDetails = ({item}) => {
    const {category,image} = item
    return (
        <div className="card shadow-xl outline outline-offset-2 outline-blue-500" data-aos="flip-left"
        data-aos-easing="ease-out-cubic"
        data-aos-duration="2000">
            <figure><img className="w-full h-80" src={image} alt="Shoes" /></figure>
            <div className="card-body">
                <div className="card-actions">
                    <Link to={`/category/${category}`} className="w-full">
                        <button className="btn w-full ">{category}</button>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default HomeBookDetails;