// components
import Albums from "./pages/Albums";
import Home from "./pages/Home";
import About from "./pages/About";
import Biography from "./pages/Biography";
import Gallery from "./pages/Gallery";
import Socials from "./pages/Socials";
import Navbar from "./component/Navbar";
import ProtectedRoutes from "./pages/ProtectedRoutes";
import NotFound from "./component/NotFound";

// routes
import { Route, Routes } from "react-router-dom";

// Auth0
import { useAuth0 } from "@auth0/auth0-react";
import AuthLoading from "./auth/AuthLoading";
import LoginError from "./auth/LoginError";
import Footer from "./component/Footer";

function App(): JSX.Element {
  const { isLoading, error } = useAuth0();

  return (
    <>
      {error && <>{<LoginError />}</>}
      {!error && isLoading && <>{<AuthLoading />}</>}
      {!isLoading && (
        <>
          <Navbar />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route
              path="/about"
              element={
                <ProtectedRoutes>
                  <About />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/biography"
              element={
                <ProtectedRoutes>
                  <Biography />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/albums"
              element={
                <ProtectedRoutes>
                  <Albums />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/gallery"
              element={
                <ProtectedRoutes>
                  <Gallery />
                </ProtectedRoutes>
              }
            />
            <Route
              path="/socials"
              element={
                <ProtectedRoutes>
                  <Socials />
                </ProtectedRoutes>
              }
            />
            <Route path="*" element={<NotFound />} />
          </Routes>
          <Footer />
        </>
      )}
    </>
  );
}

export default App;
