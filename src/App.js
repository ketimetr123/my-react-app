import logo from "./logo.svg";
import "./App.css";
import Header from "./components/Header";
import { Routes, Route } from "react-router-dom";
import Mission from "./pages/Mission";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Main from "./pages/Main";
import MissionDetails from "./pages/MissionDetail";

function App() {
  return (
    <div className="App">
      <Header />
      <Routes>
        <Route path="/main" element={<Main />} />
        <Route path="/mission" element={<Mission />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/about" element={<About />} />
        <Route
          path="/MissionDetails/:mission_id"
          element={<MissionDetails />}
        />
      </Routes>
    </div>
  );
}

export default App;
