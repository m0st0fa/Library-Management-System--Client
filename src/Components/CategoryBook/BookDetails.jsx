// import { Button, Card, CardActions, CardContent, CardMedia, Typography } from "@mui/material";
import { Link } from "react-router-dom";

/* eslint-disable react/prop-types */
const BookDetails = ({ item }) => {
    const { name, image, Author, Category, rating, _id } = item;
    return (
            <div className="card bg-base-100 shadow-xl outline outline-offset-2 outline-blue-500 my-10">
                <img className="w-full h-96 rounded-xl" src={image} alt="" />
                <hr />
                <div className="card-body">
                    <h2 className="card-title font-bold">{name}</h2>
                    <h2 className="card-title text-red-700 font-bold">Category:{Category}</h2>
                    <div className="flex justify-between ">
                        <h1 className="text-2xl font-bold decoration-slate-700">Author: {Author}</h1>
                    </div>
                    <div>
                        <h1>Review:{rating}</h1>
                    </div>
                    <div className="card-actions justify-between">
                        <div>
                            <Link to={`/details/${_id}`}>
                                <button className="btn btn-success">View Details</button>
                            </Link>
                        </div>
                    </div>
                </div>
            </div>

      
    );
};

export default BookDetails;