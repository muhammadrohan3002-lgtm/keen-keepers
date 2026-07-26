import { IoIosCall } from "react-icons/io";
import { PiHandshakeThin } from "react-icons/pi";
import { MdOutlineTextsms } from "react-icons/md";
import { IoVideocamOffOutline } from "react-icons/io5";

const TimelineItem = ({ item }) => {

  const icons = {
    Call: <IoIosCall className="text-green-600" />,
    Text: <MdOutlineTextsms className="text-blue-500" />,
    Video: <IoVideocamOffOutline className="text-red-500" />,
    Meetup: <PiHandshakeThin className="text-yellow-500" />
  };

  return (
    <div className="bg-white shadow rounded-lg p-5 flex gap-4 items-center">

      <div className="text-3xl">
        {icons[item.type]}
      </div>

      <div>
        <h2 className="font-semibold">
          {item.title}
        </h2>

        <p className="text-gray-500">
          {item.date}
        </p>
      </div>

    </div>
  );
};

export default TimelineItem;