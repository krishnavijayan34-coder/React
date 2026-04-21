function UserStatus(props) {
  let message;

  if (props.status === "active") {
    message = "Active User";
  } else if (props.status === "inactive") {
    message = "Inactive User";
  } else {
    message = "No such user";
  }

  return (
    <div>
      <h2>{message}</h2>
    </div>
  );
}

export default UserStatus;