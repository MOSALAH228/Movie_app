import "./App.css";
import Home from "./Home/home";
import Skills from "./Skills/skills";
import "bootstrap/dist/css/bootstrap.min.css";
import Footer from "./Footer/footer";
import Portoflio from "./Portoflio/portoflio";
import UsersList from "./Users/user";
import UsersFunctional from "./Users/userFunctional";
import AddUser from "./Day2/registration";
import Registration from "./Day2/registration";
import NavBar from "./Navbar/navbar";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Login from "./Day2/user";
import Movies from "./Movies/movies";
import MoviesDetails from "./Movies/moviesDetails";

function App() {
  return (
    <Router>
      <NavBar />
      <div className="container my-5">
        <Switch>
          <Route path="/" exact component={Movies} />
          <Route path="/registration" exact component={Registration} />
          <Route path="/login" exact component={Login} />
          <Route path="/moviesDetails/:id" exact component={MoviesDetails} />
        </Switch>
      </div>
    </Router>
  );
}

export default App;
