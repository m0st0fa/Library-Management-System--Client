/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";


const WriterDetails = ({ item }) => {
    const { name, country, novels_written, image } = item;

    return (
        <Link>
            <div className="card shadow-xl">
                <figure><img className="w-full h-72" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="badge badge-secondary"> Nobel:{novels_written} </div>
                    </h2>
                    <p className="text-2xl font-medium ">Country:{country}</p>
                </div>
            </div>
        </Link>
    );
};

export default WriterDetails;
