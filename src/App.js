import React from "react";

import Form from "./components/form";

import "./App.css";

const handleSubmit = (user) => {
  setTimeout(() => {
    console.log(user);
    alert(JSON.stringify(user));
  }, 500);
};
const initialValues = {};

const App = () => (
  <div className="App">
    <Form handleSubmit={handleSubmit} initialValues={initialValues} />
  </div>
);

export default App;
