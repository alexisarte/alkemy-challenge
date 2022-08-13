function Login() {
  return (
    <>
      <h1>Login form</h1>
      <form>
        <label>
          <span>Email:</span> <br />
          <input type="email" name="email" placeholder="Username" />
        </label>
        <br />
        <label>
          <span>Password:</span> <br />
          <input type="password" name="password" placeholder="Password" />
        </label>
        <br />
        <button type="submit">Login</button>
      </form>
    </>
  );
}

export default Login;
