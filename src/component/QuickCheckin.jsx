import {
 FaPhone,
 FaComment,
 FaVideo
} from "react-icons/fa";

import { useContext } from "react";

import { TimelineContext } from "../component/TimelineContext";

import { toast } from "react-toastify";

const QuickCheckin = ({ friend }) => {

  const { addTimeline } = useContext(TimelineContext);

  const handleClick = (type) => {

    addTimeline(type, friend.name);

    toast.success(`${type} added successfully`);

  };

  return (

    <div className="bg-white shadow rounded-xl p-6 mt-6">

      <h2 className="font-bold mb-6">

        Quick Check-In

      </h2>

      <div className="grid md:grid-cols-3 gap-5">

        <button
        onClick={() => handleClick("Call")}
        className="btn">

          <FaPhone/>

          Call

        </button>

        <button
        onClick={() => handleClick("Text")}
        className="btn">

          <FaComment/>

          Text

        </button>

        <button
        onClick={() => handleClick("Video")}
        className="btn">

          <FaVideo/>

          Video

        </button>

      </div>

    </div>

  );

};

export default QuickCheckin;