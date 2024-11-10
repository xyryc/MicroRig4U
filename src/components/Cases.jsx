import { useLoaderData } from "react-router-dom";
import Case from "./Case";

const Cases = () => {
  const cases = useLoaderData();

  return (
    <div>
      <div className="grid sm:grid-cols-2 lg:grid-cols-3">
        {cases.map((caseItem) => (
          <Case key={caseItem.product_id} caseItem={caseItem} />
        ))}
      </div>
    </div>
  );
};

export default Cases;
