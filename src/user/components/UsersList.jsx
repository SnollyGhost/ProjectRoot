import UserItem from "./UserItem";

const UsersList = (props) => {
  if (props.items.length === 0) {
    return (
      <div>
        <h2>NO USERS FOUND</h2>
      </div>
    );
  }

  return (
    <ul>
      {props.items.map((user) => (
        <UserItem />
      ))}
    </ul>
  );
};
export default UsersList;
