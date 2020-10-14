import React from "react";

import { History } from "history";
import { Redirect } from "react-router-dom";
import { useRecoilValue } from "recoil";
import { currentUserState } from "../recoil/atoms";

interface ChildComponentProps {
  history: History;
}

const HomePage: React.FC<ChildComponentProps> = ({ history }) => {
  const currentUser = useRecoilValue(currentUserState);
  if (currentUser) return <Redirect to={"/profile"} />;

  return (
    <div>
      <button onClick={() => history.push("/signIn")}>Sign In</button>
      <button onClick={() => history.push("/signUp")}>Sign Up</button>
    </div>
  );
};

export default HomePage;
