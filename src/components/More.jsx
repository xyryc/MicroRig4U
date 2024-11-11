import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const More = ({ item }) => {
  const { product_id, product_image, product_name, color, price } = item;

  return (
    <Link to={`/caseDetails/${product_id}`} className="flex gap-4">
      <img
        src={product_image}
        alt={product_name}
        className="h-20 object-cover"
      />
      <div className="tracking-tighter">
        <h4 className="font-medium">{product_name}</h4>
        <p className="font-medium">
          Price: <span className="font-light">{price}</span> BDT
        </p>
        <p className="font-medium">
          Color: <span className="font-light">{color}</span>
        </p>
      </div>
    </Link>
  );
};

More.propTypes = {
  item: PropTypes.object.isRequired,
};

export default More;
