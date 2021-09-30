import React, { useEffect, useState } from "react";
import { Link, useHistory } from "react-router-dom";
import { auth, signInWithEmailAndPassword, signInWithGoogle } from "../components/api/firebase";
import { useAuthState } from "react-firebase-hooks/auth";
import styled from "styled-components";

// const LoginDiv =styled.div` {
//   height: 100vh;
//   width: 100vw;
//   display: flex;
//   align-items: center;
//   justify-content: center;
// }`;

const Container =styled.div` {
display: flex;
  flex-direction: column;
  text-align: center;
  background-color: #dcdcdc;
  padding: 30px;
}`;
// const Textbox =styled.div` {
//   padding: 10px;
//   font-size: 18px;
//   margin-bottom: 10px;
// }`;
const Button =styled.div` {
  padding: 10px;
  font-size: 18px;
  margin-bottom: 10px;
  border: none;
  color: white;
  background-color: black;
}`;
const Google =styled.div` {
  background-color: #4285f4;
}`;
const Input = styled.input`
  font-size: 18px;
  padding: 10px;
  margin: 10px;
  background: papayawhip;
  border: none;
  border-radius: 3px;
  ::placeholder {
    color: palevioletred;
  }
`;



const DivLogin =styled.div` {
   margin-top: 7px;
}`;


function Login() {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [user, loading/*, error*/] = useAuthState(auth);
  const history = useHistory();

  useEffect(() => {
    if (loading) {
      // maybe trigger a loading screen
      return;
    }
    if (user) history.replace("/dashboard");
  }, [user, loading, history]);


  return (
    <DivLogin>
      <Container>
        <Input
          type="text"
          className="login__textBox"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="E-mail Address"
        />
        <Input
          type="password"
          className="login__textBox"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
        />
        <Button
          className="login__btn"
          onClick={() => signInWithEmailAndPassword(email, password)}
        >
          Login
        </Button>
        <Google className="login__btn login__google" onClick={signInWithGoogle}>
          Login with Google
        </Google>
        <DivLogin>
          <Link to="/reset">Forgot Password</Link>
        </DivLogin>
        <DivLogin>
          Don't have an account? <Link to="/register">Register</Link> now.
        </DivLogin>
      </Container>
    </DivLogin>
  );
}
export default Login;
