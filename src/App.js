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
import { TopNav } from "./components/TopNav";
import { Login } from "./components/Login";

function App() {


  return (
    <div className="App">
      <Router>
        <TopNav />
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/about" element={<About/>} />
          <Route path="/:type/:id" element={<MovieDetail/> } />
          <Route path="/login" element={<Login/> } />
        </Routes>
        <Contato />
        <Footer />
      </Router>
    </div>
  );
}

export default App;
