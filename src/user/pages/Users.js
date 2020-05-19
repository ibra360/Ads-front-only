import React from "react";

import UsersList from "../components/UsersList";

const Users = () => {
  const USERS = [
    {
      id: "u1",
      name: "Abdullah",
      image:
        "data:image/jpeg;base64,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",
      ads: 3,
    },
  ];
  return <UsersList items={USERS} />;
};

export default Users;