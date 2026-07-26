import { useContext } from "react";

import { TimelineContext } from "../component/TimelineContext";

import AnalyticsChart from "../component/AnalyticsChart";

const Stats = () => {

  const { timeline } = useContext(TimelineContext);

  const call = timeline.filter(item => item.type === "Call").length;

  const text = timeline.filter(item => item.type === "Text").length;

  const video = timeline.filter(item => item.type === "Video").length;

  const chartData = [

    {
      name: "Call",
      value: call
    },

    {
      name: "Text",
      value: text
    },

    {
      name: "Video",
      value: video
    }

  ];

  return (

    <div className="max-w-6xl mx-auto py-16 px-4">

      <h1 className="text-5xl font-bold mb-10">

        Friendship Analytics

      </h1>

      <div className="bg-white rounded-xl shadow p-10 flex justify-center overflow-x-auto">

        <AnalyticsChart
          data={chartData}
        />

      </div>

    </div>

  );

};

export default Stats;