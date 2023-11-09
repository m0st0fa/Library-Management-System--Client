import { useEffect, useState } from "react";
import WriterDetails from "./WriterDetails";

const Writer = () => {
    const [allCart, setAllCart] = useState([]);

    useEffect(() => {
        fetch('famousWriter.json')
            .then(res => res.json())
            .then(data => setAllCart(data))
    }, []);


    return (
        <div className="mt-10">
            <h1 className=" font-extrabold text-6xl text-center text-red-600 mb-10 ">Our Best Writer</h1>
            <div className="grid md:grid-cols-3 gap-2 ">
                {allCart.map(item => <WriterDetails key={item.id} item={item} />)}

            </div>
        </div>
    );
};

export default Writer;
