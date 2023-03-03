// components
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import About from "./pages/About"
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials"
import Navbar from "./component/Navbar";

// routes
import { Route, Routes } from "react-router-dom";

// Auth0
import { useAuth0 } from "@auth0/auth0-react"
import AuthLoading from "./auth/AuthLoading";
import LoginError from "./auth/LoginError";

function App(): JSX.Element {
  const { isLoading, error} = useAuth0()

  return (
    <>
      {error && <p>{<LoginError />}</p>}
      {!error && isLoading && <p>{<AuthLoading />}</p>}
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/biography" element={<Biography />} />
        <Route path="/albums" element={<Albums />} />
        <Route path="/gallery" element={<Gallery />} />
        <Route path="/socials" element={<Socials />} />
      </Routes>
    </>
  );
}

export default App;
