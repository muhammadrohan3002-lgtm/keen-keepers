const GoalCard = ({ goal }) => {

  return (

    <div className="bg-white rounded-xl shadow p-6 mt-6">

      <div className="flex justify-between">

        <h2 className="font-bold">

          Relationship Goal

        </h2>

        <button className="btn btn-sm">

          Edit

        </button>

      </div>

      <p className="mt-4">

        Connect every <b>{goal}</b> days

      </p>

    </div>

  );

};

export default GoalCard;