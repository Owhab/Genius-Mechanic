import "./App.css";
import Services from "./Pages/Home/Services/Services";
import Home from "./Pages/Home/Home/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import Experts from "./Pages/Home/Experts/Experts";
import About from "./Pages/Home/About/About";
import Contact from "./Pages/Contact/Contact";
import NotFound from "./Pages/NotFound/NotFound";
import Header from "./Pages/Home/Header/Header";
import Booking from "./Pages/Booking/Booking/Booking";
import Login from "./Pages/Login/Login/Login";
import AuthProvider from "./Contexts/AuthProvider";
import Profile from "./Pages/Profile/Profile";

function App() {
  return (
    <div className="App">
      <AuthProvider>
        <Router>
          <Header />
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/home" element={<Home />} />
            <Route path="services" element={<Services />} />
            <Route path="experts" element={<Experts />} />
            <Route path="about" element={<About />} />
            <Route path="contact" element={<Contact />} />
            <Route path="login" element={<Login />} />
            <Route path="profile" element={<Profile />} />
            <Route path="booking/:serviceId" element={<Booking />} />
            <Route path="*" element={<NotFound />} />
          </Routes>
        </Router>
      </AuthProvider>
    </div>
  );
}

export default App;
