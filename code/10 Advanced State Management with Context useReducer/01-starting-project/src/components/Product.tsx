import type { ProductType } from '../types';
import type { ReactElement } from 'react';

interface ProductProps {
	product: ProductType;
	onAddToCart: (id: string) => void;
}

export default function Product({ product, onAddToCart }: Readonly<ProductProps>): ReactElement {
	const { id, image, title, price, description } = product;
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
					<button onClick={() => onAddToCart(id)}>Add to Cart</button>
				</p>
			</div>
		</article>
	);
}
