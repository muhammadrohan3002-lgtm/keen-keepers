import { useNavigate } from "react-router";

const FriendCard = ({ friend }) => {

  const navigate = useNavigate();

  const badgeColor = {
    "overdue": "badge-error",
    "almost due": "badge-warning",
    "on-track": "badge-success"
  };

  return (
    <div
      onClick={() => navigate(`/friend/${friend.id}`)}
      className="card bg-base-100 shadow cursor-pointer hover:shadow-xl duration-300"
    >

      <div className="card-body items-center">

        <img
          src={friend.picture}
          className="w-24 h-24 rounded-full object-cover"
        />

        <h2 className="font-bold text-xl">

          {friend.name}

        </h2>

        <p>

          {friend.days_since_contact} Days

        </p>

        <div className="badge badge-outline">

          {friend.tags[0]}

        </div>

        <div className={`badge ${badgeColor[friend.status]}`}>

          {friend.status}

        </div>

      </div>

    </div>
  );
};

export default FriendCard;