/* eslint-disable react/prop-types */
import { FaRegEdit } from "react-icons/fa";
import { Link } from "react-router-dom";

const AllBooksDetails = ({ item }) => {
    const { name, image, Quantity, _id } = item;
    return (
        <div>
            <h1></h1>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-96 h-96" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                    <h2 className="text-3xl font-medium text-amber-800"> Quantity:{Quantity}</h2>
                    <Link to={`/update/${_id}`}>
                        <div className="btn w-full btn-accent">
                            <FaRegEdit />
                            <button>Update</button>
                        </div>
                    </Link>

                </div>
            </div>
        </div>
    );
};

export default AllBooksDetails;