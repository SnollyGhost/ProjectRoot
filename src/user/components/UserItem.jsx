import { Link } from "react-router-dom";

const UserItem = ({ id, image, name, placeCount }) => (
  <li className="mx-auto max-w-sm">
    <div className="p-4">
      <Link to={`/${id}/places`} className="no-underline">
        <div className="bg-indigo-100 rounded-lg shadow-md p-4 mb-4 flex items-center hover:bg-indigo-200 transition-colors duration-300">
          <div className="w-16 h-16 overflow-hidden rounded-full border-2 border-indigo-500">
            <img
              src={image}
              alt={name}
              className="w-full h-full object-cover"
            />
          </div>
          <div className="ml-4">
            <h2 className="text-lg font-semibold text-gray-800">{name}</h2>
            <h3 className="text-sm text-gray-600">
              {placeCount} {placeCount === 1 ? "Place" : "Places"}
            </h3>
          </div>
        </div>
      </Link>
    </div>
  </li>
);

export default UserItem;
