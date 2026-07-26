import FriendCard from "./FriendCard";

const FriendGrid = ({ friends }) => {
  return (

    <section className="my-16">

      <h2 className="text-3xl font-bold mb-8">

        Your Friends

      </h2>

      <div className="grid gap-6

      grid-cols-1

      md:grid-cols-2

      lg:grid-cols-4">

        {
          friends.map(friend => (

            <FriendCard
              key={friend.id}
              friend={friend}
            />

          ))
        }

      </div>

    </section>

  );
};

export default FriendGrid;