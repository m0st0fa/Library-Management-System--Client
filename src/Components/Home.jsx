import { useEffect, useState } from "react";
import Banner from "./Banner";
import HomeBookDetails from "./HomeBookDetails";
import BestSellingBook from "./BestSelling/BestSellingBook";


const Home = () => {
    const [book, setBook] = useState([])
    useEffect(() => {
        fetch('bookCategory.json')
            .then(res => res.json())
            .then(data => setBook(data))
    }, [])
    return (
        <div>
            <Banner></Banner>
            <div>
                <h3 className=" text-5xl text-center font-bold text-red-500 mb-5"> Our Services</h3>
                <div className=" grid grid-cols-2 gap-5 mb-5">
                    {
                        book.map(item => <HomeBookDetails key={item.id} item={item} />)
                    }

                </div>
                <BestSellingBook></BestSellingBook>
            </div>
        </div>
    );
};

export default Home;