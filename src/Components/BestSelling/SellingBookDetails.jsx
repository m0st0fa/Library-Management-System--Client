/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const SellingBookDetails = ({ item }) => {
  const { image, title, author, genre, rating, price } = item;

  return (
    <div className="card shadow-xl">
      <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
      <div className="card-body">
        <h2 className="card-title">
          {title}
          <div className="badge badge-secondary">{price}$</div>
        </h2>
        <p> Customer Review:{rating}</p>
        <Link>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Add Cart</div>
            <div className="badge badge-outline">View More</div>
          </div>
        </Link>
      </div>
    </div>
  );
};

export default SellingBookDetails;
