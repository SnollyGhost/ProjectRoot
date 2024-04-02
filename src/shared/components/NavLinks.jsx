import { useState } from "react";
import { NavLink } from "react-router-dom";

const NavLinks = () => {
  const [isOpen, setIsOpen] = useState(false);

  const closeDrawer = () => setIsOpen(false);

  return (
    <div>
      <button
        className="md:hidden text-white text-3xl z-20"
        onClick={() => setIsOpen(!isOpen)}
      >
        ☰
      </button>
      <div
        className={`fixed inset-0 bg-gray-800 bg-opacity-75 z-10 transform ${
          isOpen ? "translate-x-0" : "-translate-x-full"
        } transition-transform duration-300 ease-in-out md:hidden`}
        onClick={closeDrawer}
      >
        <div
          className="absolute w-full h-full"
          onClick={closeDrawer}
          style={{ pointerEvents: "none" }}
        ></div>
        <ul
          className="flex flex-col items-start p-4 space-y-4"
          onClick={(e) => e.stopPropagation()}
        >
          <li>
            <NavLink
              to="/"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg"
                  : "text-white hover:text-blue-700 text-lg"
              }
              onClick={closeDrawer}
            >
              All Users
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/u1/places"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg"
                  : "text-white hover:text-blue-700 text-lg"
              }
              onClick={closeDrawer}
            >
              My Places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/places/new"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg"
                  : "text-white hover:text-blue-700 text-lg"
              }
              onClick={closeDrawer}
            >
              Add Places
            </NavLink>
          </li>
          <li>
            <NavLink
              to="/auth"
              className={({ isActive }) =>
                isActive
                  ? "text-white text-lg"
                  : "text-white hover:text-blue-700 text-lg"
              }
              onClick={closeDrawer}
            >
              Authenticate
            </NavLink>
          </li>
        </ul>
      </div>
      <ul
        className={`hidden md:flex md:space-x-4 md:static bg-gray-700 w-full`}
      >
        <li>
          <NavLink
            to="/"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg"
                : "text-white hover:text-blue-700 text-lg"
            }
          >
            All Users
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/u1/places"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg"
                : "text-white hover:text-blue-700 text-lg"
            }
          >
            My Places
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/places/new"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg"
                : "text-white hover:text-blue-700 text-lg"
            }
          >
            Add Places
          </NavLink>
        </li>
        <li>
          <NavLink
            to="/auth"
            className={({ isActive }) =>
              isActive
                ? "text-white text-lg"
                : "text-white hover:text-blue-700 text-lg"
            }
          >
            Authenticate
          </NavLink>
        </li>
      </ul>
    </div>
  );
};

export default NavLinks;
