import ReactDOM from 'react-dom/client';

import App from './App';
import './index.css';
import {StrictMode} from "react";

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
    <StrictMode>
        <App/>
    </StrictMode>
);

