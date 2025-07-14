import { type ReactElement } from 'react';

import Header from './components/Header';
import Shop from './components/Shop';
import { CartContextProvider } from './store/cartContext';

export default function App(): ReactElement {
	return (
		<CartContextProvider>
			<Header />
			<Shop />
		</CartContextProvider>
	);
}
