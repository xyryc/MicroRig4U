import { useState } from "react";
import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  const [cartItems, setCartItems] = useState([]);

  const handleCart = (caseItem) => {
    setCartItems([...cartItems, caseItem]);
  };

  return (
    <div className="container mx-auto font-fira-code">
      <Header cartItems={cartItems} />
      <Cases handleCart={handleCart} />
      <Footer />
    </div>
  );
};

export default App;
