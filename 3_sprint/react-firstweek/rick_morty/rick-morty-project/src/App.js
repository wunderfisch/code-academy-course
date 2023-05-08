import "./App.css";
import Card2 from "./components/Card2";
import Grid from "./components/Grid";
import Morepages from "./components/Morepages";

import Searchbar from "./components/Searchbar";
import Characters from "./views/Characters";

function App() {
  return (
    <div className="App">
      <h1>Rick & Morty project</h1>
      <Searchbar />
      {/* <Grid /> */}
      {/* <Card2 /> */}
      <Characters />
      <Morepages />
    </div>
  );
}

export default App;
