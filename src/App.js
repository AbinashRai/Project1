import "./App.css";
import Download from "./components/Download";
import Home from "./components/Home";
import Leading from "./components/Leading";
import Navbar from "./components/Navbar";
import Services from "./components/Services";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Leading />
      <Download />
    </div>
  );
}

export default App;
