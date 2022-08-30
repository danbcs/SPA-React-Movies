import { Header } from "./components/Header";

import {
  BrowserRouter as Router,
  Routes,
  Route,
} from "react-router-dom";

import { Home } from "./views/Home";
import { About } from "./views/About";
import { MovieDetail } from "./views/MovieDetail";
import { Contato } from "./views/Contato";
import { Footer } from "./views/Footer";

function App() {


  return (
    <div className="App">
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/about" element={<About />} />
          <Route path="/:type/:id" element={<MovieDetail />} />
        </Routes>
        <Contato />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
