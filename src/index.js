import { StrictMode } from "react";
import ReactDOM from "react-dom";

import TodoContainer from "./container";

const rootElement = document.getElementById("root");
ReactDOM.render(
  <StrictMode>
    <TodoContainer />
  </StrictMode>,
  rootElement
);
