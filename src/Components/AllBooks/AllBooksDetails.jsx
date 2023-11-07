/* eslint-disable react/prop-types */

const AllBooksDetails = ({ item }) => {
    const { name, image } = item;
    return (
        <div>
            <h1></h1>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="w-96 h-96" src={image} alt="" /></figure>
                <div className="card-body">
                    <h2 className="card-title">{name}</h2>
                </div>
            </div>
        </div>
    );
};

export default AllBooksDetails;