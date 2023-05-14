import { Route, Routes } from "react-router-dom";
import "./App.css";
import Credits from "./components/Credits";
import Navbar from "./components/Navbar";
import Details from "./views/Details";
import Favorites from "./views/Favorites";
import First from "./views/First";
import Login from "./views/Login";
import NoMatch from "./views/NoMatch";
import Register from "./views/Register";

function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<First />} />
        <Route path="/favorties" element={<Favorites />} />
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="*" element={<NoMatch />} />
        <Route path="/:details" element={<Details />} />
      </Routes>

      {/*  <First />
      <Credits /> */}
    </div>
  );
}

export default App;
