import { useState } from "react";

function LoginForm() {
  const [form, setForm] = useState({
    username: "",
    password: ""
  });

  const [message, setMessage] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    setForm({
      ...form,
      [name]: value
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    if (
      form.username === "admin" &&
      form.password === "xminds@123"
    ) {
      setMessage("Login Successful");
    } else {
      setMessage("Try Again!!");
    }
  };

  return (
    <div>
      <h2>Login Form</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="username"
          placeholder="Enter Username"
          value={form.username}
          onChange={handleChange}
        />

        <br /><br />

        <input
          type="password"
          name="password"
          placeholder="Enter Password"
          value={form.password}
          onChange={handleChange}
        />

        <br /><br />

        <button type="submit">Login</button>
      </form>

      <h3>{message}</h3>
    </div>
  );
}

export default LoginForm;