import "./App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import LoginWithReddit from "./pages/Login";
import TeamPage from './pages/TeamPage';

function App() {
  return (
      <BrowserRouter>
        <Routes>
          <Route path="/login/callback" element={<LoginWithReddit/>} />
          <Route path="/team" element={<TeamPage />} />
          <Route path="/" element={<Home/>} />
        </Routes>
      </BrowserRouter>
  );
}

export default App;
