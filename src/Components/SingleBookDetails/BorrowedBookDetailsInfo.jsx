/* eslint-disable react/prop-types */


const BorrowedBookDetailsInfo = ({ item }) => {
    const { name, image, Category, date,} = item;
   
    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure><img className="h-96 w-full" src={image} alt="Shoes" /></figure>
                <div className="card-body">
                    <h2 className="card-title">
                        {name}
                        <div className="btn btn-secondary">{Category}</div>
                    </h2>
                    <p>Borrowed Date:{date}</p>
                    <div className="card-actions justify-between">
                        <div className="badge btn-accent badge-outline">Return Date</div>
                        <button className="btn btn-outline btn-warning">Book Return</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBookDetailsInfo;