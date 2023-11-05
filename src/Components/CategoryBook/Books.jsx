import { useLoaderData } from "react-router-dom";
import BookDetails from "./BookDetails";

const Books = () => {

const product = useLoaderData();

    return (
        <div>
           <h1>{product.length}</h1>
           {
            product.map(item => <BookDetails key={item._id} item ={item}></BookDetails>)
           }
        </div>
    );
};

export default Books;

