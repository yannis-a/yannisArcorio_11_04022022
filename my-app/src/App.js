import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import { Route, Routes } from "react-router-dom";
import About from "./pages/About";
import Lodging from "./pages/Lodging";
import Navigation from "./components/Navigation";
import Logo from "./components/Logo";
import Footer from "./components/Footer";

function App() {
  return (
    <div className="App">
      <Logo />

      <Navigation />

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/lodging/:id" element={<Lodging />} />
        <Route path="/*" element={<NotFound />} />
      </Routes>

      <Footer />
    </div>
  );
}

export default App;
