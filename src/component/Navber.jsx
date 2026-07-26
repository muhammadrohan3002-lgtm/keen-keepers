import { NavLink } from "react-router";

import { FiHome } from "react-icons/fi";
import { FiClock } from "react-icons/fi";
import { FiBarChart2 } from "react-icons/fi";

const Navbar = () => {
  return (
    <div className="border-b">
      <div className="max-w-7xl mx-auto flex justify-between items-center py-5 px-4">

        <h1 className="text-2xl font-bold text-green-900">
          KeenKeeper
        </h1>

        <div className="flex gap-5">

          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-2 rounded flex items-center gap-2"
                : "flex items-center gap-2"
            }
          >
            <FiHome />
            Home
          </NavLink>

          <NavLink
            to="timeline"
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-2 rounded flex items-center gap-2"
                : "flex items-center gap-2"
            }
          >
            <FiClock />
            Timeline
          </NavLink>

          <NavLink
            to="stats"
            className={({ isActive }) =>
              isActive
                ? "bg-green-900 text-white px-4 py-2 rounded flex items-center gap-2"
                : "flex items-center gap-2"
            }
          >
            <FiBarChart2 />
            Stats
          </NavLink>

        </div>
      </div>
    </div>
  );
};

export default Navbar;