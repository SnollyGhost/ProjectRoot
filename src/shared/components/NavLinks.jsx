import { useState, useContext } from "react";
import { NavLink } from "react-router-dom";
import { AuthContext } from "../context/auth-context";

const NavLinks = () => {
  const auth = useContext(AuthContext);

  const [isOpen, setIsOpen] = useState(false);

  const toggleDrawer = () => setIsOpen(!isOpen);
  const closeDrawer = () => setIsOpen(false);

  const renderNavLink = (to, label) => (
    <NavLink
      to={to}
      className={({ isActive }) =>
        `text-white text-lg ${isActive ? "" : "hover:text-blue-700"}`
      }
    >
      {label}
    </NavLink>
  );

  return (
    <div>
      <button
        className="md:hidden text-white text-3xl z-20"
        onClick={toggleDrawer}
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
          {renderNavLink("/", "All Users")}
          {auth.isLoggedIn && renderNavLink("/u1/places", "My Places")}
          {auth.isLoggedIn && renderNavLink("/places/new", "Add Places")}
          {!auth.isLoggedIn && renderNavLink("/auth", "Authenticate")}
          {auth.isLoggedIn && (
            <button
              className="text-white text-lg hover:text-blue-700"
              onClick={auth.logout}
            >
              Logout
            </button>
          )}
        </ul>
      </div>
      <ul className="hidden md:flex md:space-x-4 md:static bg-gray-700 w-full">
        {renderNavLink("/", "All Users")}
        {auth.isLoggedIn && renderNavLink("/u1/places", "My Places")}
        {auth.isLoggedIn && renderNavLink("/places/new", "Add Places")}
        {!auth.isLoggedIn && renderNavLink("/auth", "Authenticate")}
        {auth.isLoggedIn && (
          <button
            className="text-white text-lg hover:text-blue-700"
            onClick={auth.logout}
          >
            Logout
          </button>
        )}
      </ul>
    </div>
  );
};

export default NavLinks;
