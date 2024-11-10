import Header from "../components/Header";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";
import { createContext, useState } from "react";

export const CartContext = createContext();

const MainLayout = () => {
  const [cart, setCart] = useState([]);

  return (
    <div className="font-fira container mx-auto">
      <CartContext.Provider value={[cart, setCart]}>
        <Header />

        <div className="py-10 px-4">
          <Outlet />
        </div>

        <Footer />
      </CartContext.Provider>
    </div>
  );
};

export default MainLayout;
