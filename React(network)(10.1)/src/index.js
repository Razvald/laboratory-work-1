import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import ReactFC from "../../React(FC)(8)/withGenerated/src/index";
import FormControl from "../../React(formControl)(9)/withGenerated/src/index";
import HelloWorld from "../../React(helloWorld)(7)/withGenerated/src/index";

function App() {
   return (
      <Router>
         <Route path="/1" component={HelloWorld} />
         <Route path="/2" component={ReactFC} />
         <Route path="/3" component={FormControl} />
      </Router>
   );
}

ReactDOM.render(<App />, document.getElementById("root"));
