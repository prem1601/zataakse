import { createContext, useEffect, useState } from "react";
import Header from "./components/Header";
import ProductListing from "./pages/ProductPage";
import axios from "axios";
import Footer from "./components/Footer";
import Shimmer from "./components/Shimmer";

export const ProductContext = createContext(null);

function App() {
  const [products, setProducts] = useState([]);

  const fetchProducts = async () => {
    try {
      const dataResponse = await axios.get("http://localhost:8000/api/products");
      // console.log("data response", dataResponse);

      setProducts(dataResponse.data.data);
    } catch (error) {
      console.log("error fetching products", error);
    }
  };

  console.log('products', products);

  useEffect(() => {
    fetchProducts();
  }, []);

  return (
    <ProductContext.Provider value={{ products }}>
      <div className="container">
        <Header />
        {products.length > 0 ? <ProductListing /> : <Shimmer />}
        <Footer />
      </div>
    </ProductContext.Provider>
  );
}

export default App;
