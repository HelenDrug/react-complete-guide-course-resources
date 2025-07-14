import type { ProductType } from '../types';
import type { ReactElement } from 'react';
import { useCartContext } from '../store/cartContext';

interface ProductProps {
	product: ProductType;
}

export default function Product({ product }: Readonly<ProductProps>): ReactElement {
	const { id, image, title, price, description } = product;

	const { addItemToCart } = useCartContext();
	return (
		<article className="product">
			<img src={image} alt={title} />
			<div className="product-content">
				<div>
					<h3>{title}</h3>
					<p className="product-price">${price}</p>
					<p>{description}</p>
				</div>
				<p className="product-actions">
					<button onClick={() => addItemToCart(id)}>Add to Cart</button>
				</p>
			</div>
		</article>
	);
}
