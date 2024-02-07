import { Navigate, Route, Routes } from 'react-router-dom';
import Home from './components/Home';
import ProductProvider from './context/products.context';
import CartProvider from './context/cart.context';
import ProductDetails from './components/ProductDetails';
import Layout from './components/layout/layout';
import './index.css';
import Bascket from './components/Bascket';

function App() {
  return (
    <ProductProvider>
      <CartProvider>
        <Layout>
          <Routes>
            <Route path='/products' element={<Home />} />
            <Route path='/products/:productId' element={<ProductDetails />} />
            <Route path='/bascket' element={<Bascket />} />
            <Route path='/' element={<Navigate to='/products' replace />} />
          </Routes>
        </Layout>
      </CartProvider>
    </ProductProvider>
  );
}

export default App;
