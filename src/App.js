import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import NewHome from "./Landing/NewHome";
import Contact from "./OfficeDetails/Contact";
import AboutUs from "./OfficeDetails/AboutUs";
import Services from "./Services/Services";



function App() {
  return (
      <Router>
          <Switch>
              <Route path="/" exact>
                  <NewHome />
              </Route>
              <Route path="/Kontakt" exact>
                  <Contact />
              </Route>
              <Route path="/O_Nama" exact>
                  <AboutUs />
              </Route>
              <Route path="/Usluge" exact>
                  <Services />
              </Route>
          </Switch>
      </Router>
  );
}


export default App;
