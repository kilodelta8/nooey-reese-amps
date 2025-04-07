// src/App.tsx
import { JSX } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

// Layout Components
import Header from './components/Header';
import Footer from './components/Footer'; // Assuming you have a Footer component

// Page Components
import HomePage from './pages/HomePage';
import AmplifiersPage from './pages/AmplifiersPage'; // Create this page
import CustomBuildsPage from './pages/CustomBuildsPage'; // Create this page
import RepairRestorationPage from './pages/RepairRestorationPage'; // Create this page
import ContactPage from './pages/ContactPage'; // Create this page (to hold InquiryForm)oey Reese Amps cabinets)
import SpeakerCabinetsPage from './pages/CabinetsPage';

// Styles
import './App.css'; // Your global styles

// --- Create Placeholder Page Components (if they don't exist yet) ---
// Example: src/pages/AmplifiersPage.tsx
// const AmplifiersPage = () => <div><h1>Our Amplifiers</h1><p>Details about Nooey Reese Amps coming soon...</p></div>;
// Similarly create CustomBuildsPage, RepairRestorationPage, ContactPage

function App(): JSX.Element {
  return (
    <Router>
      <div className="App">
        <Header /> {/* Navigation is here */}
        <main className="main-content">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/amplifiers" element={<AmplifiersPage />} />
            <Route path="/contact" element={<ContactPage />} />
            <Route path="/repair-restoration" element={<RepairRestorationPage />} />
            <Route path="/custom" element={<CustomBuildsPage />} />
            <Route path="/cabinets" element={<SpeakerCabinetsPage />} />
             {/* Optional: Add a 404 Not Found route */}
            {/* <Route path="*" element={<NotFoundPage />} /> */}
          </Routes>
        </main>
        <Footer /> {/* Site footer */}
      </div>
    </Router>
  );
}

export default App;