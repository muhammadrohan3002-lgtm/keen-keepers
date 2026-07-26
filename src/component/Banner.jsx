import { FaPlus } from "react-icons/fa";
import SummaryCard from "./SummaryCard";


const Banner = () => {
  return (
    <section className="text-center py-16">

      <h1 className="text-5xl font-bold">
        Friends to keep close in your life
      </h1>

      <p className="text-gray-500 mt-5">
        Browse, nurture and manage relationships.
      </p>

      <button className="btn btn-success mt-8">

        <FaPlus />

        Add a Friend

      </button>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        <SummaryCard value="8" title="Total Friends" />

        <SummaryCard value="5" title="On Track" />

        <SummaryCard value="2" title="Need Attention" />

        <SummaryCard value="18" title="Interactions" />

      </div>

    </section>
  );
};

export default Banner;