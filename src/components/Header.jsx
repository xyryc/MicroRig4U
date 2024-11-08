import { useContext } from "react";
import { NavLink } from "react-router-dom";
import { CartContext } from "../layouts/MainLayout";

const Header = () => {
  const [cart] = useContext(CartContext);

  const totalPrice = cart.reduce((acc, item) => acc + item.price, 0);

  return (
    <div>
      <div className="navbar bg-base-100">
        <div className="navbar-start">
          <div className="dropdown">
            <div
              tabIndex={0}
              role="button"
              className="btn btn-ghost rounded-none"
            >
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h16M4 18h7"
                />
              </svg>
            </div>
            <ul
              tabIndex={0}
              className="menu menu-sm dropdown-content bg-base-100 z-[1] mt-3 w-52 p-2 shadow-2xl rounded-none"
            >
              <li>
                <NavLink to={`/`}>Home</NavLink>
              </li>
              <li>
                <NavLink to={`/cart`}>Cart</NavLink>
              </li>
              <li>
                <NavLink to={`/about`}>About</NavLink>
              </li>
            </ul>
          </div>
        </div>
        <div className="navbar-center">
          <NavLink className="btn btn-ghost rounded-none text-xl">
            MicroRig4U
          </NavLink>
        </div>
        <div className="navbar-end">
          <button className="btn btn-ghost rounded-none">
            <i className="fa-solid fa-magnifying-glass"></i>
          </button>

          {/* cart button */}
          <div className="dropdown dropdown-end">
            <div
              tabIndex="0"
              role="button"
              className="btn btn-ghost rounded-none"
            >
              <div className="indicator">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="h-5 w-5"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2"
                    d="M3 3h2l.4 2M7 13h10l4-8H5.4M7 13L5.4 5M7 13l-2.293 2.293c-.63.63-.184 1.707.707 1.707H17m0 0a2 2 0 100 4 2 2 0 000-4zm-8 2a2 2 0 11-4 0 2 2 0 014 0z"
                  />
                </svg>
                <span className="badge badge-sm indicator-item">
                  {cart.length}
                </span>
              </div>
            </div>
            <div
              tabIndex="0"
              className="card card-compact dropdown-content bg-base-100 z-[1] mt-3 w-52 lg:w-80 shadow-2xl rounded-none"
            >
              <div className="card-body">
                <span className="text-lg font-bold">{cart.length} Items</span>
                <span>
                  {cart.map((item) => (
                    <p
                      key={item.product_id}
                      className="flex justify-between border-b"
                    >
                      <span>{item.product_name}</span>
                      <span>৳ {item.price}</span>
                    </p>
                  ))}
                </span>
                <span className="flex justify-between">
                  <span className="text-info">Subtotal: </span>
                  <span className="text-info">৳ {totalPrice}</span>
                </span>
                <div className="card-actions">
                  <button className="btn  rounded-none px-4 py-1 border-2 border-y-gray-700 border-x-gray-400">
                    Checkout
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Header;
