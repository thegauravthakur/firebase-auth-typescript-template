import React, { EffectCallback, useEffect, useRef, useState } from "react";
import { Redirect } from "react-router-dom";
import app from "../firebase";
import { useRecoilState } from "recoil";
import { currentUserState } from "../recoil/atoms";
import { History } from "history";

const SignUpPage: React.FC<{ history: History }> = ({ history }) => {
  const [currentUser, setCurrentUser] = useRecoilState(currentUserState);
  const [loading, setLoading] = useState(false);
  const emailRef = useRef<HTMLInputElement>(null);
  const passwordRef = useRef<HTMLInputElement>(null);

  const onFormSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const email = emailRef.current ? emailRef.current.value : "";
    const password = passwordRef.current ? passwordRef.current.value : "";
    try {
      setLoading(true);
      const { user } = await app
        .auth()
        .createUserWithEmailAndPassword(email, password);
      setLoading(false);
      setCurrentUser(user?.email);
    } catch (e) {
      setLoading(false);
      console.log(e);
    }
  };
  if (currentUser) return <Redirect to={"/profile"} />;
  return (
    <div>
      <form onSubmit={onFormSubmit}>
        email: <input ref={emailRef} />
        <br />
        password: <input ref={passwordRef} />
        <br />
        {!loading ? <button>Sign Up</button> : "Loading"}
      </form>
    </div>
  );
};

export default SignUpPage;
