import { useContext } from "react";
import { CartContext } from "../layouts/MainLayout";
import Case from "../components/Case";

const Cart = () => {
  const [cart] = useContext(CartContext);

  return (
    <div className="py-10 px-4">
      <h1 className="tracking-tighter font-medium text-3xl text-center my-4">
        Total Items Added to Cart: {cart.length}
      </h1>

      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {cart.map((caseItem) => (
          <Case key={caseItem.product_id} caseItem={caseItem} />
        ))}
      </div>
    </div>
  );
};

export default Cart;
