import "./App.css";
import Contact from "./views/Contact";
import HomePage from "./views/HomePage";
import MyComponent from "./MyComponent";
import Phoenixes from "./Phoenixes";
import Characters from "./Characters";
import Counter from "./components/Counter";

function App() {
  return (
    <div className="App">
      <h1>Hello World</h1>
      <MyComponent />
      <HomePage />
      <Contact />
      <Phoenixes />
      <Counter />
      <Characters />
    </div>
  );
}

export default App;
