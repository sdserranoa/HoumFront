import './App.css';
import Footer from './components/Footer';
import Navmenu from './components/Navmenu';
import PokemonList from './components/PokemonList';

function App() {
  return (
    <div>
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
      <PokemonList />
      <Footer />
    </div>
  );
}

export default App;
