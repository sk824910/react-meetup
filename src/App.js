import { Route, Switch } from "react-router-dom";
import AllMeetupsPage from "./pages/AllMeetups";
import NewMeetupPage from "./pages/NewMeetup";
import FavoritesPage from "./pages/Favorites";
import Layout from "./components/layout/Layout";
import Login from "./pages/Login";
import { ModalExample } from "./pages/ModalPage";

function App() {

  //localhost:3000
  //my-page.com


  return (
    <Layout>
      <Switch>
        <Route path="/" exact>
          <AllMeetupsPage />
        </Route>
        <Route path="/new-meetups">
          <NewMeetupPage />
        </Route>
        <Route path="/favorites">
          <FavoritesPage />
        </Route>
        <Route path="/modalpage">
          <ModalExample />
        </Route>
        <Route  path="/loginpage">
          <Login/>
        </Route>
      </Switch>
    </Layout>
  );
}

export default App;
