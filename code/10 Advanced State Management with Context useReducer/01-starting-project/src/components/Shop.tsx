import { DUMMY_PRODUCTS } from '../dummy-products';
import Product from './Product';
import type { ReactElement } from 'react';

export default function Shop(): ReactElement {
	return (
		<section id="shop">
			<h2>Elegant Clothing For Everyone</h2>
			<ul id="products">
				{DUMMY_PRODUCTS.map((product) => (
					<li key={product.id}>
						<Product product={product} />
					</li>
				))}
			</ul>
		</section>
	);
}
