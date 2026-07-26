const SummaryCard = ({ title, value }) => {
  return (
    <div className="bg-white shadow rounded-lg p-6 text-center">

      <h2 className="text-3xl font-bold text-green-900">
        {value}
      </h2>

      <p className="text-gray-500 mt-2">
        {title}
      </p>

    </div>
  );
};

export default SummaryCard;