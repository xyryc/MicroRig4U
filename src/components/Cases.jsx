import { useState, useEffect } from "react";
import Case from "./Case";
import PropTypes from "prop-types";


const Cases = ({handleCart}) => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("sff-case.json")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div className="py-10 px-4">
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <Case key={caseItem.product_id} caseItem={caseItem}  handleCart={handleCart}/>
        ))}
      </div>
    </div>
  );
};

Cases.propTypes = {
  handleCart: PropTypes.func.isRequired
}

export default Cases;
