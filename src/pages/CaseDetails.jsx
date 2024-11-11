import { useLoaderData, useParams } from "react-router-dom";
import More from "../components/More";

const CaseDetails = () => {
  const allCaseData = useLoaderData();

  const { product_id } = useParams();
  // console.log(product_id);

  const selectedProduct = allCaseData.find(
    (item) => item.product_id === product_id
  );
  // console.log(selectedProduct);

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
    price,
  } = selectedProduct;

  return (
    <div className="grid lg:grid-cols-8 lg:gap-6">
      {/* case details */}
      <div className="lg:col-span-6 tracking-tighter">
        <img className="h-96 mx-auto" src={product_image} alt={product_name} />
        <h2 className="font-bold text-3xl my-4">{product_name}</h2>

        <p className="border-y-2 font-semibold py-1">
          Price: <span className="font-normal">{price}</span> BDT
        </p>
        <p className="border-b-2 font-semibold py-1">
          Color: <span className="font-normal">{color}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Dimension: <span className="font-normal">{dimension}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          CPU Max Height: <span className="font-normal">{cpu_max_height}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Motherboard Type:{" "}
          <span className="font-normal">{motherboard_type}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Expansion Slots:{" "}
          <span className="font-normal">{expansion_slots}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Power Supply Support:{" "}
          <span className="font-normal">{power_supply_support}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Fan Support: <span className="font-normal">{fan_support}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          I/O Port: <span className="font-normal">{i_o_port}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Weight: <span className="font-normal">{weight}</span>
        </p>
        <p className="border-b-2 font-semibold py-1">
          Materials: <span className="font-normal">{materials}</span>
        </p>
      </div>

      {/* more cases */}
      <div className="lg:col-span-2 hidden lg:block">
        <h2 className="text-xl font-bold my-4">More Cases</h2>

        <div className="flex flex-row lg:flex-col gap-6">
          {allCaseData.map((item) => (
            <More key={item.product_id} item={item}></More>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CaseDetails;
