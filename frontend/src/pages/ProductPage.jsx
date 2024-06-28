import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";
import Sidebar from "../components/Sidebar";
import ProductCard from "../components/ProductCard";

const ProductPage = () => {
  const { products } = useContext(ProductContext);
  // console.log("products", products);

  const [filteredProducts, setFilteredProducts] = useState(null);

  useEffect(() => {
    setFilteredProducts(products);
  }, [products]);

  return (
    <div className="px-6 py-4 max-w-screen-xl mx-auto">
      <div className="flex flex-wrap">
        <div className=" basis-1/4">
          <Sidebar setFilteredProducts={setFilteredProducts} />
        </div>
        <div className="basis-3/4 p-4">
          <div className="flex justify-between">
            <p>
              Showing{" "}
              <span className="text-red-500 font-bold">
                {filteredProducts?.length}
              </span>{" "}
              products
            </p>
            <div>
              Sort by:{" "}
              <select
                name="sortBy"
                id="sortBy"
                className=" border border-black"
              >
                <option value="Most Popular">Most Popular</option>
                <option value="Low to High">Low to High</option>
                <option value="High to Low">High to Low</option>
              </select>
            </div>
          </div>
          <div className="flex flex-wrap">
            {filteredProducts?.map((prod) => (
              <div key={prod._id} className=" basis-1/3 p-2">
                <ProductCard prod={prod} />
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProductPage;
