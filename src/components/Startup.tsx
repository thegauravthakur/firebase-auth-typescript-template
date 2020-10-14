import React, { useEffect, useState } from "react";
import app from "../firebase";
import { useSetRecoilState } from "recoil";
import { currentUserState } from "../recoil/atoms";

interface userInterface {
  uid: string;
}

const Startup: React.FC = ({ children }) => {
  const [loading, setLoading] = useState(false);
  const setCurrentUser = useSetRecoilState(currentUserState);
  useEffect(() => {
    setLoading(true);
    app.auth().onAuthStateChanged((user) => {
      setLoading(false);
      setCurrentUser(user?.email);
    });
  }, [setCurrentUser]);
  if (loading) return <div>loading</div>;
  return <>{children}</>;
};

export default Startup;
