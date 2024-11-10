import PropTypes from "prop-types";
import { useContext } from "react";
import toast from "react-hot-toast";
import { CartContext } from "../layouts/MainLayout";
import { Link, useLocation } from "react-router-dom";

const Case = ({ caseItem }) => {
  const { pathname } = useLocation();

  const {
    product_id,
    product_image,
    product_name,
    color,
    dimension,
    cpu_max_height,
    motherboard_type,
    // expansion_slots,
    // power_supply_support,
    // fan_support,
    // i_o_port,
    weight,
    // materials,
    price,
  } = caseItem;

  const [cart, setCart] = useContext(CartContext);

  const handleCart = () => {
    toast.success("Added to cart!");
    setCart([...cart, caseItem]);
  };

  return (
    <div className="border p-10 space-y-1">
      <img src={product_image} alt={`product image of ${product_name}`} />
      <h1 className="text-xl font-semibold ">{caseItem.product_name}</h1>
      <p className="space-x-3">
        <span className="tracking-tighter font-medium">
          Mobo Type: <span className="font-light">{motherboard_type}</span>
        </span>
        <span className="tracking-tighter font-medium">
          Color: <span className="font-light">{color}</span>
        </span>
      </p>
      <p className="tracking-tighter font-medium">
        Dimension: <span className="font-light">{dimension}</span>
      </p>
      <p className="space-x-7">
        <span className="tracking-tighter font-medium">
          Max Height: <span className="font-light">{cpu_max_height}</span>
        </span>
        <span className="tracking-tighter font-medium">
          Weight: <span className="font-light">{weight}</span>
        </span>
      </p>
      <p className="tracking-tighter font-medium">
        Price: <span className="font-light">{price} BDT</span>
      </p>

      <div className="flex gap-6 items-center pt-2">
        <Link
          to={`/caseDetails/${product_id}`}
          className="btn rounded-none px-4 py-1 border-2 border-y-gray-700 border-x-gray-400"
        >
          Details
        </Link>

        <button
          onClick={() => handleCart(caseItem)}
          className={`btn rounded-none px-4 py-1 border-2 border-y-gray-700 border-x-gray-400 ${
            pathname === "/cart" ? "hidden" : ""
          }`}
        >
          Add to Cart
        </button>
      </div>
    </div>
  );
};

Case.propTypes = {
  caseItem: PropTypes.object.isRequired,
};

export default Case;
