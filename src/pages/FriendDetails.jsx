import { useParams } from "react-router";

const FriendDetails = () => {

  const { id } = useParams();

  return (
    <div className="max-w-7xl mx-auto py-20">

      <h1 className="text-4xl font-bold">
        Friend {id}
      </h1>

    </div>
  );
};

export default FriendDetails;