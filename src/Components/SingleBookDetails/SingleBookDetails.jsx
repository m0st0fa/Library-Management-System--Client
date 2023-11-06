import { useLoaderData } from "react-router-dom";


const SingleBookDetails = () => {
    // Assuming useLoaderData is properly imported or defined
    const details = useLoaderData();
    const { image, description, name } = details;
    return (
        <div className="bg-gray-200">
            <div className="hero-content flex-col lg:flex-row">
                <img src={image} className="w-1/2 h-96" alt="Product Image" />
                <div>
                    <h1 className="text-5xl font-bold">{name}</h1>
                    <p className="py-6">{description}</p>
                    {/* Open the modal using document.getElementById('ID').showModal() method */}
                    <button className="btn" onClick={() => document.getElementById('my_modal_5').showModal()}>Borrow</button>
                    <dialog id="my_modal_5" className="modal modal-bottom sm:modal-middle">
                        <div className="modal-box">
                            <div className="form-control">
                                <label className="label">
                                    <span className="label-text ">Return Date</span>
                                </label>
                                <input type="date" name="date" className="input input-bordered" required />
                            </div>
                            <div className="form-control mt-6">
                                <button className="btn btn-accent">Submit</button>
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


// export default SingleBookDetails;