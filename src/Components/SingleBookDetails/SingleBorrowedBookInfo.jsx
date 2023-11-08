import { useLoaderData } from "react-router-dom";
import BorrowedBookDetailsInfo from "./BorrowedBookDetailsInfo";
import { useState } from "react";

const SingleBorrowedBookInfo = () => {
    const BorrowedBookInfo = useLoaderData()
    const [borrowBook, setBorrowBook] = useState(BorrowedBookInfo)

    // console.log(BorrowedBookInfo)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                BorrowedBookInfo.map(item => <BorrowedBookDetailsInfo
                     key={item._id} 
                     borrowBook={borrowBook}
                     setBorrowBook={setBorrowBook}
                     item={item}></BorrowedBookDetailsInfo>)
            }

        </div>
    );
};

export default SingleBorrowedBookInfo;