
import { useLoaderData } from "react-router-dom";
import Swal from "sweetalert2";
import { authContext } from "../../AuthProvider/AuthProvider";
import { useContext, useState } from "react";

const SingleBookDetails = () => {
    const details = useLoaderData();
    const { _id, image, description, name, Quantity, Category, } = details;
    const { user } = useContext(authContext);
    const [Book, setBook] = useState(Quantity);
    console.log(Book)

    const handleClickToaddData = (e) => {
        e.preventDefault();
        const formData = new FormData(e.target);
        const image = formData.get("image");
        const name = formData.get("name");
        const date = formData.get("date");
        const Category = formData.get("Category");
        const newBorrowedBook = { name, image, Category, date, user };
        console.log(newBorrowedBook);
        fetch('https://library-management-system-server-pi.vercel.app/Borrowed', {
            method: 'POST',
            headers: {
              'content-type': 'application/json'
            },
            body: JSON.stringify(newBorrowedBook)
          })
            .then(res => res.json())
            .then(data => {
              if (data.insertedId) {
                const updatedQuantity = Book - 1;
                fetch(`https://library-management-system-server-pi.vercel.app/update/${_id}`, {
                  method: 'PUT',
                  headers: {
                    'content-type': 'application/json'
                  },
                  body: JSON.stringify({ Quantity: updatedQuantity })
                })
                  .then(data => {
                    if (data.modifiedCount) {
                      Swal.fire(
                        'Good job!',
                        'Borrow Book successfully',
                        'success'
                      );
                    }
                    setBook(updatedQuantity);
                  })
                  .catch(error => {
                    console.error('Error updating book quantity:', error);
                  });
              }
            })
            .catch(error => {
              console.error('Error adding borrowed book:', error);
            });
          
    };

    return (
        <div className="bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-1/2 h-96" alt="Product Image" />
                <div>
                    <h1 className="text-5xl font-bold my-4">{name}</h1>
                    <h1 className="text-3xl font-medium">Quantity of Book: {Book}</h1>
                    <p className="py-6">{description}</p>
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()} disabled={Book <= 0}>Borrow</button>
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
