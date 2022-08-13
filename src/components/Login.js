function Login() {
  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === '' || password === '') {
      console.log('Los campos no pueden estar vacíos');
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      console.log('Debes escribir una dirección de correo válida');
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      console.log('Credenciales incorrectas');
      return;
    }

    console.log('Credenciales correctas');
  };
  return (
    <>
      <h1>Login form</h1>
      <form onSubmit={submitHandler}>
        <label>
          <span>Email:</span> <br />
          <input type="text" name="email" placeholder="Username" />
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
