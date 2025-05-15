import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { Fragment } from 'react';
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Providers/CartProvider.jsx';

createRoot(document.getElementById('root')).render(<Fragment>
    <CartProvider>
        <App />
    </CartProvider>
    <ToastContainer position="top-right"/>
</Fragment>)
