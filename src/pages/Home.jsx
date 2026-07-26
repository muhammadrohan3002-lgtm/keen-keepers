import { useEffect, useState } from "react";

import Banner from "../component/Banner";
import FriendGrid from "../component/FriendGrid";
import Loading from "../component/Loading";

const Home = () => {
  const [friends, setFriends] = useState([]);

  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetch("/friends.json")
      .then((res) => res.json())
      .then((data) => {
        setFriends(data);

        setLoading(false);
      });
  }, []);

  if (loading) {
    return <Loading />;
  }

  return (
    <div className="max-w-7xl mx-auto px-4">
      <Banner />

      <FriendGrid friends={friends} />
    </div>
  );
};

export default Home;
