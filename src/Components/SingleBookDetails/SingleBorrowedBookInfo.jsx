import { useLoaderData } from "react-router-dom";
import BorrowedBookDetailsInfo from "./BorrowedBookDetailsInfo";

const SingleBorrowedBookInfo = () => {
    const BorrowedBookInfo = useLoaderData()
    // console.log(BorrowedBookInfo)
    return (
        <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
            {
                BorrowedBookInfo.map(item => <BorrowedBookDetailsInfo key={item._id} item={item}></BorrowedBookDetailsInfo>)
            }

        </div>
    );
};

export default SingleBorrowedBookInfo;