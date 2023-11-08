/* eslint-disable no-unused-vars */
/* eslint-disable react/prop-types */


const SellingBookDetails = ({ item }) => {
    const { image,title,author,genre,rating,price } = item;

    return (
        <div className="card shadow-xl">
        <figure><img src={image} alt="Shoes" /></figure>
        <div className="card-body">
          <h2 className="card-title">
           {title}
            <div className="badge badge-secondary">{price}$</div>
          </h2>
          <p> Customer Review:{rating}</p>
          <div className="card-actions justify-end">
            <div className="badge badge-outline">Fashion</div> 
            <div className="badge badge-outline">Products</div>
          </div>
        </div>
      </div>
    );
};

export default SellingBookDetails;
