import React from "react";
import { Switch, Route } from "react-router-dom";
import HomePage from "./pages/HomePage";
import SignInPage from "./pages/SignInPage";
import SignUpPage from "./pages/SignUpPage";
import ProfilePage from "./pages/ProfilePage";
import ProtectedRoute from "./components/ProtectedRoutes";
import { useRecoilValue } from "recoil";
import { currentUserState } from "./recoil/atoms";

function App() {
  const currentUser = useRecoilValue(currentUserState);
  return (
    <Switch>
      <Route exact path={"/"} component={HomePage} />
      <Route exact path={"/signIn"} component={SignInPage} />
      <Route exact path={"/signUp"} component={SignUpPage} />
      {/*<Route exact path={"/profile"} component={ProfilePage} />*/}
      <ProtectedRoute
        exact
        path={"/profile"}
        component={ProfilePage}
        isAuthenticated={!!currentUser}
      />
    </Switch>
  );
}

export default App;
