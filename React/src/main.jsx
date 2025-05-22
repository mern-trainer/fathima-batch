import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import 'bootstrap/dist/css/bootstrap.min.css';
import "./index.css"
import { ToastContainer } from 'react-toastify';
import { CartProvider } from './Providers/CartProvider.jsx';
import { Provider } from 'react-redux';
import { store } from './Redux/store.js';

createRoot(document.getElementById('root')).render(<Provider store={store}>
    <CartProvider>
        <App />
    </CartProvider>
    <ToastContainer position="top-right"/>
</Provider>)
