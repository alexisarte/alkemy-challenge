import axios from 'axios';
import swAlert from '@sweetalert/with-react'

function Login() {
  const submitHandler = e => {
    e.preventDefault();
    const email = e.target.email.value;
    const password = e.target.password.value;
    const regexEmail =
      /^(([^<>()[\]\.,;:\s@\"]+(\.[^<>()[\]\.,;:\s@\"]+)*)|(\".+\"))@(([^<>()[\]\.,;:\s@\"]+\.)+[^<>()[\]\.,;:\s@\"]{2,})$/i;

    if (email === '' || password === '') {
      swAlert(<h2>Los campos no pueden estar vacíos</h2>);
      return;
    }

    if (email !== '' && !regexEmail.test(email)) {
      swAlert(<h2>Debes escribir una dirección de correo válida</h2>);
      console.log('');
      return;
    }

    if (email !== 'challenge@alkemy.org' || password !== 'react') {
      swAlert(<h2>Credenciales incorrectas</h2>);
      return;
    }

    axios
      .post('http://challenge-react.alkemy.org', { email, password })
      .then(res => {
        swAlert(<h2>Perfect, you are in</h2>);
        console.log(res.data);
      });
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
