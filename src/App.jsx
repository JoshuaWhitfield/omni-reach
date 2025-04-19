import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar';
import Footer from './components/Footer';

import LandingPage from './pages/LandingPage';
import CampaignPage from './pages/CampaignPage';
import CreatorPage from './pages/CreatorPage';           // ✅ NEW
import AccessDenied from './pages/AccessDenied';
import PricingPage from './pages/PricingPage';

export default function App() {
  return (
    <Router>
      <Navbar />
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/landing" element={<LandingPage />} />

        <Route path="/config" element={<CampaignPage />} />
        <Route path="/videos" element={<CampaignPage />} />
        <Route path="/pricing" element={<PricingPage />} />
        <Route path="/persona" element={<CampaignPage />} />
        <Route path="/creators" element={<CreatorPage />} />   {/* ✅ NEW */}
        <Route path="/denied" element={<AccessDenied />} />
      </Routes>
      <Footer />
    </Router>
  );
}
