import Albums from "./pages/Albums";
import { Route, Routes } from "react-router-dom";
import Home from "./pages/Home";
import About from "./pages/About"

function App(): JSX.Element {
  return (
    <>
      <h1 className="text-3xl font-bold underline">Hello World</h1>
      <Albums>Hello Worlds</Albums>

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </>
  );
}

export default App;
