import { useContext, useEffect, useState } from "react";
import PropTypes from "prop-types";
import { ProductContext } from "../App";
import Filter from "./Filter";

const Sidebar = ({ setFilteredProducts }) => {
  const { products } = useContext(ProductContext);

  const [price, setPrice] = useState(20);

  const category = [];
  const brands = [];
  const stock = ["In Stock", "Out Of Stock"];

  for (let i = 0; i < products.length; i++) {
    const element = products[i];

    if (!category.includes(element.category)) {
      category.push(element.category);
    }

    if (!brands.includes(element.brand)) {
      brands.push(element.brand);
    }
  }

  const handlePriceChnage = (e) => {
    const { value } = e.target;
    setPrice(value);
  };

  useEffect(() => {
    const filter = [...products].filter((f) => f.price < price);
    // console.log("filter", filter);
    if (filter.length > 0) {
      setFilteredProducts(filter);
    } else {
      setFilteredProducts(products);
    }
  }, [products, setFilteredProducts, price]);

  return (
    <div className="md:pe-10">
      {/* Category filter  */}
      <div className="mb-4">
        <h2 className="text-md font-bold uppercase my-2">Categories</h2>
        <Filter
          filterKey={"category"}
          data={category}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      <div className="mb-4">
        <h2 className="text-md font-bold uppercase my-2">Price</h2>
        <input
          type="range"
          name="price"
          id="price"
          value={price}
          onChange={handlePriceChnage}
          className="w-full"
        />
        <div className="flex justify-between">
          <p>$0</p>
          <p>${price}</p>
          <p>$100</p>
        </div>
      </div>

      {/* Brands Filter  */}
      <div className="mb-4">
        <h2 className="text-md font-bold uppercase my-2">Brands</h2>
        <Filter
          filterKey={"brand"}
          data={brands}
          setFilteredProducts={setFilteredProducts}
        />
      </div>

      {/* Check stock  */}
      <div className="mb-4">
        <h2 className="text-md font-bold uppercase my-2">Avaliability</h2>
        <Filter
          filterKey={"inStock"}
          data={stock}
          setFilteredProducts={setFilteredProducts}
        />
      </div>
    </div>
  );
};

Sidebar.propTypes = {
  setFilteredProducts: PropTypes.func,
};

export default Sidebar;
