import { useLoaderData } from "react-router-dom";

const Books = () => {

const product = useLoaderData();

    return (
        <div>
           <h1>{product.length}</h1>
        </div>
    );
};

export default Books;