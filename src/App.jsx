import { Route, Routes } from "react-router-dom";
import Nav from "./NavBar.jsx";
import Home from "./Home.jsx";
import Community from "./Community.jsx";
import History from "./History.jsx";
import Language from "./Language.jsx";
import Today from "./Today.jsx";
import Digital from "./Digital.jsx";
import Creators from "./Creators.jsx";
import "./site.css";

function App() {
  return (
    <>
      <a className="skip" href="#main">Skip to content</a>
      <Nav />
      <main id="main">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/community" element={<Community />} />
          <Route path="/history" element={<History />} />
          <Route path="/language" element={<Language />} />
          <Route path="/digital" element={<Digital />} />
          <Route path="/today" element={<Today />} />
          <Route path="/creators" element={<Creators />} />
        </Routes>
      </main>
    </>
  );
}

export default App;
