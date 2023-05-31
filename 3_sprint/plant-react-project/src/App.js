import { Route, Routes } from "react-router-dom";
import "./App.css";

import { app } from "./config/firebaseConfig";
import { AuthContextProvider } from "./context/AuthContext";
import ProtectedRoute from "./routes/ProtectedRoute";
import Details from "./views/Details";
import Favorites from "./views/Favorites";
import First from "./views/First";
import Login from "./views/Login";
import NoMatch from "./views/NoMatch";
import Register from "./views/Register";
import Credits from "./components/Credits";
import Navbar from "./components/Navbar";
import Chat from "./views/Chat";

function App() {
  // console.log("app :>> ", app);
  return (
    <div className="App">
      {/* AuthContextProvider should be available everywhere to know if a user is logged in */}
      <AuthContextProvider>
        <Navbar />
        <Routes>
          <Route path="/" element={<First />} />
          <Route
            path="/favorites"
            element={
              // frame with protected Route which will manage if user is logged in
              <ProtectedRoute>
                <Favorites />
              </ProtectedRoute>
            }
          />
          <Route
            path="/chat"
            element={
              <ProtectedRoute>
                <Chat />
              </ProtectedRoute>
            }
          />
          <Route path="/login" element={<Login />} />
          <Route path="/register" element={<Register />} />
          <Route path="/details/:id/:common_name" element={<Details />} />
          <Route path="*" element={<NoMatch />} />
        </Routes>
        <Credits />
      </AuthContextProvider>
    </div>
  );
}

export default App;
