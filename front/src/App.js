import './App.css';
import Footer from './components/Footer';
import ItemsList from './components/ItemsList';
import Navmenu from './components/Navmenu';
import PokemonList from './components/PokemonList';
import { BrowserRouter as Router, Switch, Route, } from 'react-router-dom'

function App() {
  return (
    <div>
      <Router>
        <style type="text/css">
          {`
          .btn-orng {
              background-color: #FF462C;
              color: #FFF;
          }
          .btn-orng:hover {
              color:#fff;
              background-color:#DB412B;
              border-color:#DB412B;
          }
          .btn-outline-orng {
              background-color: #fff;
              border-color: #FF462C;
              color: #FF462C;
          }
          .btn-outline-orng:hover {
              color:#fff;
              background-color:#FF462C;
              border-color:#FF462C
          }
          `}
        </style>
        <Navmenu />
        <Switch>
          <Route exact path='/'>
            <PokemonList />
          </Route>
          <Route exact path='/items'>
            <ItemsList />
          </Route>
        </Switch>
        <Footer />
      </Router>
    </div>
  );
}

export default App;
