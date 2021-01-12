import React from "react";

import Form from "./components/form";

import "./App.css";
import Main from "./components/form/Main";

const handleSubmit = (user) => {
  setTimeout(() => {
    console.log(user);
    alert(JSON.stringify(user));
  }, 500);
};
const initialValues = {};

const App = () => (
  <div className="App">
    <Main>
      <Form handleSubmit={handleSubmit} initialValues={initialValues} />
    </Main>
  </div>
);

export default App;
