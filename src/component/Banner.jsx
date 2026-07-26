import SummaryCard from "./SummaryCard";

const Banner = ({ friends = [] }) => {

  const total = friends.length;

  const onTrack = friends.filter(
    f => f.status === "on-track"
  ).length;

  const overdue = friends.filter(
    f => f.status === "overdue"
  ).length;

  const almost = friends.filter(
    f => f.status === "almost due"
  ).length;

  return (
    <>
      <h1 className="text-6xl font-bold text-center">
        Friends to keep close in your life.
      </h1>

      <p className="text-center mt-5">
        Keep your friendships healthy.
      </p>

      <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mt-12">

        <SummaryCard title="Friends" value={total}/>

        <SummaryCard title="On Track" value={onTrack}/>

        <SummaryCard title="Almost Due" value={almost}/>

        <SummaryCard title="Overdue" value={overdue}/>

      </div>
    </>
  );
};

export default Banner;