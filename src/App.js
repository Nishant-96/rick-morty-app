import { Route, Routes } from "react-router-dom";
import { Navbar } from "./components";
import { ProfilePage } from "./pages";
import { Home } from "./pages";

function App() {
  return (
    <div className="">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/profile" element={<ProfilePage />} />
      </Routes>
    </div>
  );
}

export default App;
