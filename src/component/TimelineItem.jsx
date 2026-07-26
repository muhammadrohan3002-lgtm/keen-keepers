import {
  FaPhone,
  FaComment,
  FaVideo
} from "react-icons/fa";

const TimelineItem = ({ item }) => {

  const icons = {
    Call: <FaPhone className="text-green-600" />,
    Text: <FaComment className="text-blue-500" />,
    Video: <FaVideo className="text-red-500" />
  };

  return (

    <div className="bg-white shadow rounded-lg p-5 flex gap-4 items-center">

      <div className="text-2xl">

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