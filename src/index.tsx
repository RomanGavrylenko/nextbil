import React from "react";
import ReactDOM from "react-dom";
import GlobalStyle from '@/styles';
import FontsStyles from '@/styles/fonts/fonts';
import App from "./App";

ReactDOM.render(
  <React.StrictMode>
    <App />
    <GlobalStyle />
    <FontsStyles />
  </React.StrictMode>,
  document.getElementById("root")
);
