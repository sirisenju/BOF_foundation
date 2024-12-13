import NavBar from "./Components/navbar";
import About from "./Pages/About";
import EventsPage from "./Pages/Events";
import Home from "./Pages/Home";
import { BrowserRouter as Router, Route, Routes } from "react-router-dom";
import MediaPage from "./Pages/Media";
import { useState } from "react";
import DonateModal from "./Components/donate";
import Footer from "./Components/footer";
import Gallery from "./Pages/Gallery";
import ContactUs from "./Pages/Contact";

function App() {
  const [isModalOpen, setModalOpen] = useState(false);

  const openModal = () => {
    setModalOpen(true);
  };

  const closeModal = () => {
    setModalOpen(false);
  };

  return (
    <Router>
      <div>
        {/* navbar section */}
        <div className="w-full absolute">
          <NavBar onDonateClick={openModal} />
        </div>

        <DonateModal isOpen={isModalOpen} onClose={closeModal} />
        <Routes>
          <Route path="/" element={<Home />}/>
          <Route path="/about" element={<About />}/>
          <Route path="/media" element={<MediaPage />}/>
          <Route path="/gallery" element={<Gallery/>}/>
          <Route path="/events" element={<EventsPage />}/>
          <Route path="/contactus" element={<ContactUs/>}/>
        </Routes>

        {/* footer section */}
        <div className="w-full">
          <Footer/>
        </div>
      </div>
    </Router>
  );
}

export default App;
