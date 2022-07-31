import "./App.css";
import ProductContext from "./context/ProductContext";
import Store from "./components/Store";
import DetailProduct from "./components/DetailProduct";
import { Route, Routes,Navigate } from "react-router-dom";
import CartContext from "./context/CartContext";
import NavBar from "./components/NavBar";
import Buy from "./components/Buy";
import Footer from "./components/Footer";

function App() {
  return (
    <div>
      <ProductContext>
        <CartContext>
          <NavBar />
          <Routes>
            <Route path="/product" element={<Store />} />
            <Route path="/product/:id" element={<DetailProduct />} />
            <Route path="/buy" element={<Buy />} />
            <Route path="/" element={<Navigate to="/product"/>} />
          </Routes>
          <Footer />
        </CartContext>
      </ProductContext>
    </div>
  );
}

export default App;
