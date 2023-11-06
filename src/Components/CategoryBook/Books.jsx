import { useLoaderData } from "react-router-dom";
import BookDetails from "./BookDetails";

const Books = () => {

    const product = useLoaderData();

    return (
            <div className=" grid md:grid-cols-3 gap-4">
                {
                    product.map(item => <BookDetails key={item._id} item={item}></BookDetails>)
                }
            </div>
       
    );
};

export default Books;

