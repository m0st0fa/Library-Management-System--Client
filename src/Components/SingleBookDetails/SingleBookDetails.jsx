
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const SingleBookDetails = () => {
    const { user } = useContext(authContext);
    const [book, setBook] = useState();
    console.log(book)

    const handleClickToaddData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get("image");
        const name = formData.get("name");
        const date = formData.get("date");
        const Category = formData.get("Category");
        const newBorrowedBook = { name, image, Category, date, user };
        console.log(newBorrowedBook);
        fetch('http://localhost:5001/Borrowed', {
            method: 'POST',
            headers: {
                'content-type': 'application/json'
            },
            body: JSON.stringify(newBorrowedBook)
        })
            .then(res => res.json())
            .then(data => {
                console.log(data);
                if (data.insertedId) {
                    const updatedQuantity = book - 1;
                    fetch(`http://localhost:5001/update/${id}`, {
                        method: 'PUT',
                        headers: {
                            'content-type': 'application/json'
                        },
                        body: JSON.stringify({ Quantity: updatedQuantity })
                    })
                        .then(updateBook => {
                            if (updateBook.ok) {
                                Swal.fire(
                                    'Well Done',
                                    'You successfully added this Book to your Borrowed Book!',
                                    'success'
                                );
                            }
                            setBook(updatedQuantity);
                        })
                }
            });
    };

    const details = useLoaderData();
    const { image, description, name, Quantity, Category } = details;

    return (
        <div className="bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-1/2 h-96" alt="Product Image" />
                <div>
                    <h1 className="text-5xl font-bold my-4">{name}</h1>
                    <h1 className="text-3xl font-medium">Quantity of Book: {Quantity}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Return Date</span>
                                </label>
                                <div className="form-control mt-6">
                                    <form onSubmit={handleClickToaddData}>
                                        <input type="text" name="name" value={name} hidden />
                                        <input type="text" name="image" value={image} hidden />
                                        <input type="text" name="Category" value={Category} hidden />
                                        <input type="date" name="date" className="input input-bordered" required />
                                        <button className="btn btn-secondary" type="submit">
                                            Borrow Book
                                        </button>
                                    </form>
                                </div>
                            </div>
                            <div className="modal-action">
                                <form method="dialog">
                                    <button className="btn w-full btn-accent">Close</button>
                                </form>
                            </div>
                        </div>
                    </dialog>
                    <button className="btn btn-success my-5">Read More</button>
                </div>
            </div>
        </div>
    );
};

export default SingleBookDetails;
