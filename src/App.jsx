import Cases from "./components/Cases";
import Footer from "./components/Footer";
import Header from "./components/Header";

const App = () => {
  return (
    <div className="container mx-auto font-fira-code">
      <Header/>
      <Cases />
      <Footer/>
    </div>
  );
};

export default App;
