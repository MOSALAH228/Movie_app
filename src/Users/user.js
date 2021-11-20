import React from "react";

export default class UsersList extends React.Component {
  constructor() {
    super();
    this.state = {
      isAuthentication: false,
      users: [
        {
          name: "Mohamed",
          email: "mohmad@gmail.com",
          isAdmin: true,
        },

        {
          name: "Ali",
          email: "ali@gmail.com",
          isAdmin: true,
        },

        {
          name: "Hesham",
          email: "hesham@gmail.com",
          isAdmin: false,
        },
      ],
    };
  }
  render() {
    return (
      <>
        {this.state.isAuthentication ? (
          <ul>
            {this.state.users.map((user, index) => {
              if (user.isAdmin) {
                return <li key={index}>{user.name}</li>;
              }
            })}
          </ul>
        ) : (
          <h2>Please login first</h2>
        )}
      </>
    );
  }
}
