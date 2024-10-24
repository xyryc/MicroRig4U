import PropTypes from "prop-types";

const Case = ({ caseItem }) => {
  const {
    product_image,
    product_name,
    color,
    dimension,
    cpu_max_height,
    motherboard_type,
    expansion_slots,
    power_supply_support,
    fan_support,
    i_o_port,
    weight,
    materials,
    price
  } = caseItem;

  return (
    <div className="border p-10">
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
        <span className="tracking-tighter font-medium">Weight: <span className="font-light">{weight}</span></span>
      </p>
      <p className="tracking-tighter font-medium">Price: <span className="font-light">{price} BDT</span></p>
    </div>
  );
};

Case.propTypes = {
  caseItem: PropTypes.object.isRequired,
};

export default Case;
