import { useContext, useState } from "react";

import { TimelineContext } from "../component/TimelineContext";

import TimelineItem from "../component/TimelineItem";

const Timeline = () => {

  const { timeline } = useContext(TimelineContext);

  const [filter, setFilter] = useState("All");

  const filteredTimeline =
    filter === "All"
      ? timeline
      : timeline.filter(item => item.type === filter);

  return (

    <div className="max-w-5xl mx-auto py-16 px-4">

      <h1 className="text-5xl font-bold">

        Timeline

      </h1>

      <select
        className="select select-bordered mt-8"
        value={filter}
        onChange={(e) => setFilter(e.target.value)}
      >

        <option>All</option>
        <option>Call</option>
        <option>Text</option>
        <option>Video</option>

      </select>

      <div className="space-y-5 mt-8">

        {
          filteredTimeline.length ?

          filteredTimeline.map(item =>

            <TimelineItem
              key={item.id}
              item={item}
            />

          )

          :

          <h2 className="text-center text-gray-500">

            No Timeline Found

          </h2>

        }

      </div>

    </div>

  );

};

export default Timeline;