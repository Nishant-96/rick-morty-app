import { useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { Navbar } from "./components";
import { ProfilePage } from "./pages";
import { Home } from "./pages";

function App() {
  const { pathname } = useLocation();
  
  // scroll to top on route change
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);

  return (
    <div className="h-screen">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile/:profileId" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
