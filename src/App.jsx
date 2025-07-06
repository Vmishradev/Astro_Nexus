import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Navbar from "./components/Navbar/Navbar";
import Home from "./pages/Home/Home";
import About from "./pages/About";
import Explore from "./pages/Missions/MissionsPage";
import Footer from "./components/Footer/Footer"

function App() {
  return (
    <Router>
      <div className="App">
        <Navbar />
        <main className="main-content">
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/explore" element={<Explore />} />
          </Routes>
        </main>
        <Footer />
      </div>
    </Router>
  );
}

export default App;
