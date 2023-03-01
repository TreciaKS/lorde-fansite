import Albums from "./pages/Albums";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials"

function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/social" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
