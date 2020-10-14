import React from "react";
import ReactDOM from "react-dom";
import App from "./App";
import { BrowserRouter } from "react-router-dom";
import { RecoilRoot } from "recoil";
import Startup from "./components/Startup";

ReactDOM.render(
  <RecoilRoot>
    <BrowserRouter>
      <Startup>
        <App />
      </Startup>
    </BrowserRouter>
  </RecoilRoot>,
  document.getElementById("root")
);
