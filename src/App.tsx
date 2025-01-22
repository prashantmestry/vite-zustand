import { BrowserRouter, Routes, Route } from "react-router-dom";
import Contact from "./pages/Contact";
import Home from "./pages/Home";
import About from "./pages/About";
import TopNavigation from "./component/TopNavigation";
import Login from "./pages/Login";

function App() {
  return (
    <div className="container mx-auto h-screen bg-gray-100">
      <BrowserRouter>
        <TopNavigation />
        <Routes>
          <Route path="/home" element={<Home />}></Route>
          <Route path="/about" element={<About />}></Route>
          <Route path="/contact" element={<Contact />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
