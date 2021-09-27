import React from 'react';
import {BrowserRouter as Router, Route} from "react-router-dom";
import StudentsList from "./views/StudentsList";

const App = () => {
  return (
    <Router>
      <Route exact path="/"><StudentsList /></Route>
    </Router>
  );
};

export default App;