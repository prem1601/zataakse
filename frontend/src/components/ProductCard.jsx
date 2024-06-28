import PropTypes from "prop-types";

const ProductCard = ({ prod }) => {
  return (
    <div className="mb-2">
      <div className="p-1">
        <img src={prod.image} alt="Product" className="w-full h-52 rounded" />
          <p className="my-2 border-b-[1px] border-slate-400"></p>
        <div className=" flex flex-col gap-1 ps-2">
          <p className="text-slate-400 text-md">{prod.category}</p>
          <h4 className="text-lg font-bold">{prod.name}</h4>
          <p>${prod.price}</p>
        </div>
      </div>
    </div>
  );
};

ProductCard.propTypes = {
  prod: PropTypes.any,
};

export default ProductCard;
