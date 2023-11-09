import { useLoaderData } from "react-router-dom";
import AllBooksDetails from "./AllBooksDetails";

const GetAllBooks = () => {
    const AllBooks = useLoaderData()
    return (
        <div>
            <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 gap-4">
                {
                    AllBooks.map(item => <AllBooksDetails key={item._id} item={item}></AllBooksDetails>)
                }
            </div>
        </div>
    );
};

export default GetAllBooks;