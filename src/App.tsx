// components
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import About from "./pages/About"
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials"
import LoginBtn from "./component/LoginBtn";
import LogoutBtn from "./component/LogoutBtn";
import User from "./component/User";

// routes
import { Route, Routes } from "react-router-dom";

// Auth0 hook
import { useAuth0 } from "@auth0/auth0-react";

function App(): JSX.Element {
  const { isLoading , error } = useAuth0()
  
  return (
    <>
      <div className="flex items-center justify-center text-3xl font-bold underline">
        <h1>Auth0 Login</h1>
        {error && <p>Failed Authorisation</p>}
        {!error && isLoading && <p>Authenticating</p>}
        {!error && !isLoading && (
          <>
            <LoginBtn />
            <LogoutBtn />
            <User />
          </>
        )}
      </div>

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
