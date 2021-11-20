import { useState } from "react";

export default function Registration() {
  const [user, setUser] = useState({
    name: "",
    username: "",
    email: "",
    password: "",
    confirmPassword: "",
  });

  const [userErrors, setUserErrors] = useState({
    name: null,
    username: null,
    email: null,
    password: null,
    confirmPassword: null,
  });

  const handelInputChange = (e) => {
    console.log(e.target.value, e.target.name);
    if (e.target.name === "username") {
      setUserErrors({
        ...userErrors,
        username:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length > 10
            ? "Max length 10 characters"
            : null,
      });
    } else if (e.target.name === "email") {
      setUserErrors({
        ...userErrors,
        email:
          e.target.value.length === 0
            ? "This Field is Required"
            : !/^[A-Z0-9._%+-]+@[A-Z0-9.-]+\.[A-Z]{2,}$/i.test(e.target.value)
            ? "Invalid email address"
            : null,
      });
    } else if (e.target.name === "name") {
      setUserErrors({
        ...userErrors,
        name:
          e.target.value.length === 0
            ? "This Field is Required"
            : e.target.value.length > 10
            ? "Max length 10 characters"
            : null,
      });
    } else if (e.target.name === "password") {
      setUserErrors({
        ...userErrors,
        password:
          e.target.value.length === 0
            ? "This Field is Required"
            : !/^[0-9-a-z]{0,9}$/i.test(e.target.value)
            ? "Invalid password"
            : null,
      });
    } else if (e.target.name === "confirmPassword") {
      setUserErrors({
        ...userErrors,
        confirmPassword:
          e.target.value.length === 0
            ? "This Field is Required"
            : !/^[0-9-a-z]{0,9}$/i.test(e.target.value)
            ? "Invalid confirmPassword"
            : null,
      });
    }
    // switch (e.target.name) {
    //   case "username":
    //     setUser({
    //       ...user,
    //       username: e.target.value,
    //     });
    //     break;
    //   case "email":
    //     setUser({
    //       ...user,
    //       email: e.target.value,
    //     });
    //     break;
    //   default:
    //     break;
    // }

    setUser({
      ...user,
      [e.target.name]: e.target.value,
    });
  };

  const submitAddUser = (e) => {
    e.preventDefault();
    if (
      !userErrors.username &&
      !userErrors.email &&
      !userErrors.name &&
      !userErrors.password &&
      !userErrors.confirmPassword
    ) {
      console.log(user);
    }
  };

  return (
    <>
      <h2>Registration</h2>
      <form onSubmit={(e) => submitAddUser(e)}>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Name
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="name"
            value={user.name}
            name="name"
            onChange={(e) => handelInputChange(e)}
          />
          <small className="text-danger">{userErrors.name}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            userName
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="userName"
            value={user.username}
            name="username"
            onChange={(e) => handelInputChange(e)}
          />
          <small className="text-danger">{userErrors.username}</small>
        </div>
        <div className="mb-3">
          <label htmlFor="formGroupExampleInput2" className="form-label">
            Email
          </label>
          <input
            type="text"
            className="form-control"
            id="formGroupExampleInput2"
            placeholder="Email"
            value={user.email}
            name="email"
            onChange={(e) => handelInputChange(e)}
          />
          <small className="text-danger">{userErrors.email}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            Password
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="password"
            value={user.password}
            name="password"
            onChange={(e) => handelInputChange(e)}
          />
          <small className="text-danger">{userErrors.password}</small>
        </div>

        <div className="mb-3">
          <label htmlFor="formGroupExampleInput" className="form-label">
            confirmPassword
          </label>
          <input
            type="password"
            className="form-control"
            id="formGroupExampleInput"
            placeholder="confirmPassword"
            value={user.confirmPassword}
            name="confirmPassword"
            onChange={(e) => handelInputChange(e)}
          />
          <small className="text-danger">{userErrors.confirmPassword}</small>
        </div>

        <button type="submit" className="btn btn-success">
          Save
        </button>
      </form>
    </>
  );
}
