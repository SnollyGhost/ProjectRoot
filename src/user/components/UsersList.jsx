import React from "react";
import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div className="text-center mt-8">
        <h2 className="text-xl font-bold text-gray-800">NO USERS FOUND</h2>
        <p className="text-gray-600 mt-2">
          Looks like there are no users matching your criteria.
        </p>
      </div>
    );
  }

  return (
    <ul className="grid grid-cols-auto minmax(200px, 1fr) gap-4">
      {props.items.map((user) => (
        <UserItem
          key={user.id}
          id={user.id}
          image={user.image}
          name={user.name}
          placeCount={user.places}
        />
      ))}
    </ul>
  );
};

export default UsersList;
