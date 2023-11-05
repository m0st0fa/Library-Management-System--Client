/* eslint-disable react/prop-types */
const BookDetails = ({item}) => {
    const {name} = item;
    return (
        <div>
            <h1>{name}</h1>
        </div>
    );
};

export default BookDetails;