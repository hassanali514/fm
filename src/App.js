import React from 'react'
import './App.css'
import { BrowserRouter as Router, Route, Switch,Redirect } from "react-router-dom";
import Home from './Component/Home/Home';
import About from './Component/About/About';
import Services from './Component/Services/Services';
import Team from './Component/Team/Team';
import Collaboration from './Component/Collaboration/Collaboration';
import Contact from './Component/Contact/Contact';
import JobSeeker from './Component/JobSeeker/JobSeeker';
import Error from './Component/Error/Error';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css'

const App = () => {
  return (
    <Router>
      <Switch>
        <Route exact path="/" component={Home} />
        <Route exact path="/about" component={About} />
        <Route exact path="/services" component={Services} />
        <Route exact path="/team" component={Team} />
        <Route exact path="/collaboration" component={Collaboration} />
        <Route exact path="/contact" component={Contact} />
        <Route exact path="/job-seeker" component={JobSeeker} />
        <Route exact path="/*" component={Error} />
      </Switch>
    </Router>
  )
}

export default App