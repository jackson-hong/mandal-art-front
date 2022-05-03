import './App.css';
import {
  BrowserRouter as Router,
  Link,
  Route,
    Switch
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";
import NavBar from "./components/views/NavBar/NavBar";


function App() {
  return (
          <div>
              <Switch>
                  <Route exact path="/" component={(LandingPage)} />
                  <Route exact path="/login" component={(LoginPage)} />
                  <Route exact path="/nav" component={(NavBar)} />
              </Switch>
          </div>
  );
}

export default App;
