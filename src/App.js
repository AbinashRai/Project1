import "./App.css";
import Article from "./components/Article";
import Contact from "./components/Contact";
import Download from "./components/Download";
import Footer from "./components/Footer";
import Home from "./components/Home";
import Leading from "./components/Leading";
import Navbar from "./components/Navbar";
import Services from "./components/Services";
import Testimonials from "./components/Testimonials";

function App() {
  return (
    <div>
      <Navbar />
      <Home />
      <Services />
      <Leading />
      <Download />
      <Testimonials />
      <Article />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
