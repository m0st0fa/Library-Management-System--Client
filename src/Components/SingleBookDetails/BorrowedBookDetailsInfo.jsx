/* eslint-disable react/prop-types */

import Swal from "sweetalert2";


const BorrowedBookDetailsInfo = ({ item, setBorrowBook,borrowBook }) => {
    const { name, image, Category, date,_id} = item;

    const handleClickToDelete = _id => {
        console.log(_id)
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                fetch(`http://localhost:5001/delete/${_id}`, {
                    method: 'DELETE',
                })
                    .then(res => res.json())
                    .then(data => {
                        console.log(data)
                        if (data.deletedCount > 0) {
                            Swal.fire(
                                'Return!',
                                'Your file has been deleted.',
                                'success'
                            )
                          const remaining = borrowBook.filter(singleBook => singleBook._id !== _id)
                          setBorrowBook(remaining)
                        }
                    })
            }

        })
    }
   
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
                        <div className="badge btn-accent badge-outline">Return Date:{date}</div>
                        <button className="btn btn-outline btn-warning0" onClick={() => handleClickToDelete(_id)}>Return Book</button>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default BorrowedBookDetailsInfo;