import { useContext, useEffect, useState } from "react";
import { ProductContext } from "../App";

const Filter = ({ data, setFilteredProducts, filterKey }) => {
  const { products } = useContext(ProductContext);

  const [selected, setSelected] = useState([]);

  const handleChange = (e) => {
    const { name, checked } = e.target;
    setSelected((prev) => {
      if (checked) {
        return [...prev, name];
      } else {
        const [name, ...rest] = selected;
        name;
        return rest;
      }
    });
  };
  //   console.log("selected", selected);

  useEffect(() => {
    const filter = [...products].filter((f) => selected.includes(f[filterKey]));
    // console.log("filter", filter);
    if (filter.length > 0) {
      setFilteredProducts(filter);
    } else {
      setFilteredProducts(products);
    }
  }, [selected, filterKey, products, setFilteredProducts]);

  return data.map((elem) => (
    <div key={elem}>
      <input
        type="checkbox"
        onChange={handleChange}
        name={elem}
        id={elem}
        className="me-1"
      />{" "}
      {elem}
    </div>
  ));
};

export default Filter;
