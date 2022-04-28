import './App.css';
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Link
} from "react-router-dom";
import LandingPage from "./components/views/LandingPage/LandingPage";
import LoginPage from "./components/views/LoginPage/LoginPage";


function App() {
  return (
      <Router>
        <div>
          <Routes>
            <Route path="/" element={<LandingPage/>}>
            </Route>
            <Route path="/login" element={<LoginPage/>}>
            </Route>
          </Routes>
        </div>
      </Router>
  );
}

export default App;
