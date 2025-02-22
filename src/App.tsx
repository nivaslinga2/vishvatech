import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Mainpage from "./pages/home";
import Contact from "./pages/contactus";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Mainpage/>} />
        <Route path="/contact" element={<Contact/>} />
      </Routes>
    </Router>
  );
}

export default App;
