import { NavLink } from "react-router";
import { FiHome, FiClock, FiBarChart2, FiMenu } from "react-icons/fi";

const Navbar = () => {
 const links = (
  <>
    <li>
      <NavLink
        to="/"
        end
        className={({ isActive }) =>
          isActive
            ? "bg-green-700 text-white rounded-lg"
            : ""
        }
      >
        <FiHome />
        Home
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/timeline"
        className={({ isActive }) =>
          isActive
            ? "bg-green-700 text-white rounded-lg"
            : ""
        }
      >
        <FiClock />
        Timeline
      </NavLink>
    </li>

    <li>
      <NavLink
        to="/stats"
        className={({ isActive }) =>
          isActive
            ? "bg-green-700 text-white rounded-lg"
            : ""
        }
      >
        <FiBarChart2 />
        Stats
      </NavLink>
    </li>
  </>
);

  return (
    <div className="navbar bg-base-100 shadow-sm">

      <div className="navbar-start">

        <div className="dropdown">

          <label tabIndex={0} className="btn btn-ghost lg:hidden">

            <FiMenu size={24} />

          </label>

          <ul
            tabIndex={0}
            className="menu menu-sm dropdown-content mt-3 z-10 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {links}
          </ul>

        </div>

        <a className="text-2xl font-bold text-green-700">

          KeenKeeper

        </a>

      </div>

      <div className="navbar-end hidden lg:flex">

        <ul className="menu menu-horizontal px-1">

          {links}

        </ul>

      </div>

    </div>
  );
};

export default Navbar;