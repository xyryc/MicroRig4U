import { useState, useEffect } from "react";
import Case from "./Case";

const Cases = () => {
  const [cases, setCases] = useState([]);

  useEffect(() => {
    fetch("sff-case.json")
      .then((res) => res.json())
      .then((data) => setCases(data));
  }, []);

  return (
    <div className="py-16">
      <div className="grid md:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <Case key={caseItem.product_id} caseItem={caseItem} />
        ))}
      </div>
    </div>
  );
};

export default Cases;