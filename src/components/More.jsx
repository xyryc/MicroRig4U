import PropTypes from "prop-types";

const More = ({ item }) => {
  const { product_image, product_name, color, price } = item;

  return (
    <div className="flex gap-4">
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
    </div>
  );
};

More.propTypes = {
  item: PropTypes.object.isRequired,
};

export default More;
