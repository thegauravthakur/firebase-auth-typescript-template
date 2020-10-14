import React from "react";
import app from "../firebase";
import { History } from "history";

interface profilePros {
  history?: History;
}

const ProfilePage: React.FC<profilePros> = ({ history }) => {
  return (
    <div>
      user logged in
      <button
        onClick={async () => {
          await app.auth().signOut();
          if (history) history.push("/signIn");
        }}
      >
        sign out
      </button>
    </div>
  );
};

export default ProfilePage;
