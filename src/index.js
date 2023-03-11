import React from 'react';
import ReactDOM from 'react-dom';
import App from "./components/App"

// warning eactDOM.render decripted


 ReactDOM.render(
  <React.StrictMode>

  <App />

  </React.StrictMode>,
  document.getElementById("root")

);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<h1>Hello, World</h1>);
