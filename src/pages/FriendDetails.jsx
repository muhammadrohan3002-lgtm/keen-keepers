import { useEffect, useState } from "react";
import { useParams } from "react-router";

import StatsCard from "../component/StatsCard";
import GoalCard from "../component/GoalCard";
import QuickCheckin from "../component/QuickCheckin";
import Loading from "../component/Loading";

import { FaClock, FaBoxArchive, FaTrash } from "react-icons/fa6";

const FriendDetails = () => {
  const { id } = useParams();

  const [friend, setFriend] = useState(null);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        const singleFriend = data.find((f) => f.id === Number(id));

        setFriend(singleFriend);
      });
  }, [id]);

  if (!friend) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4 py-16">
      <div className="grid lg:grid-cols-3 gap-8">
        {/* Left */}

        <div>
          <div className="bg-white rounded-xl shadow p-6 text-center">
            <img
              src={friend.picture}
              className="w-32 h-32 rounded-full mx-auto"
            />

            <h2 className="text-3xl font-bold mt-5">{friend.name}</h2>

            <div className="badge badge-error mt-3">{friend.status}</div>

            <div className="mt-4">
              {friend.tags.map((tag) => (
                <div key={tag} className="badge badge-success mr-2">
                  {tag}
                </div>
              ))}
            </div>

            <p className="mt-5 italic">{friend.bio}</p>

            <p className="mt-2">{friend.email}</p>
          </div>
          <button className="btn w-full mt-4">
            <FaClock />
            Snooze 2 Weeks
          </button>

          <button className="btn w-full mt-2">
            <FaBoxArchive />
            Archive
          </button>

          <button className="btn btn-error w-full mt-2">
            <FaTrash />
            Delete
          </button>
        </div>

        {/* Right */}

        <div className="lg:col-span-2">
          <div className="grid md:grid-cols-3 gap-5">
            <StatsCard
              title="Days Since Contact"
              value={friend.days_since_contact}
            />

            <StatsCard title="Goal" value={friend.goal} />

            <StatsCard title="Next Due" value={friend.next_due_date} />
          </div>

          <GoalCard goal={friend.goal} />

          <QuickCheckin friend={friend} />
        </div>
      </div>
    </div>
  );
};

export default FriendDetails;
