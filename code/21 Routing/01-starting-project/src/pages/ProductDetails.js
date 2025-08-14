import {useParams} from "react-router-dom";

export default function ProductDetails() {
    const params = useParams()

    return (
        <>
            <h1>Product Details</h1>
            <p>Details about the selected product will be displayed here.</p>
            <p>{params.productId}</p>
        </>
    );
}