const StatsCard = ({ title, value }) => {
  return (

    <div className="bg-white rounded-xl shadow p-6">

      <h2 className="text-4xl font-bold text-green-900">

        {value}

      </h2>

      <p className="mt-3 text-gray-500">

        {title}

      </p>

    </div>

  );
};

export default StatsCard;