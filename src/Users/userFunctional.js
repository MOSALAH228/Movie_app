import { useState, useEffect } from "react";

export default function UsersFunctional() {
  const [users, setUsers] = useState([
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
  ]);
  const [isAuthanticated, setUserAuthanticated] = useState(true);

  const toggleLogin = () => {
    setUserAuthanticated(!isAuthanticated);
  };

  useEffect(() => {
    console.log("DID MOUNTED");
  }, []);

  useEffect(() => {
    console.log("DID UPDATED");
  }, [isAuthanticated]);

  return (
    <>
      {isAuthanticated ? (
        <ul>
          {users.map((user, index) => {
            if (user.isAdmin) {
              return <li key={index}>{user.name}</li>;
            }
          })}
        </ul>
      ) : (
        <h2>Please login first</h2>
      )}
      <button className="btn btn-primary" onClick={() => toggleLogin()}>
        Click ME
      </button>
    </>
  );
}
