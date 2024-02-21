import "./App.css";
import { Route, Routes } from 'react-router-dom'
import Home from './Components/Navbar/Home/Home'
import Bookmarks from './Components/Navbar/Bookmarks/Bookmarks'
import Locations from './Components/Navbar/Locations/Locations'
import Stories from './Components/Navbar/Stories/Stories'
import Policies from './Components/Navbar/Policies/Policies'
import TopSocialSites from './Components/Navbar/Top Social Sites/TopSocialSites'
import PricingPlan from './Components/Navbar/Pricing Plan/PricingPlan'
import ContactUs from './Components/Navbar/Contact Us/ContactUs'
import Login from './Components/Topbar/Login/Login'
import Register from './Components/Topbar/Register/Register'
import MainComponent from "./Main Component/MainComponent";

function App() {
  return (
    <>
    <MainComponent />
      <Routes>
        <Route path="/login" element={<Login />} />
        <Route path="/register" element={<Register />} />
        <Route path="/" element={<Home />} />
        <Route path="/bookmarks" element={<Bookmarks />} />
        <Route path="/locations" element={<Locations />} />
        <Route path="/stories" element={<Stories />} />
        <Route path="/policies" element={<Policies />} />
        <Route path="/top-social-sites" element={<TopSocialSites />} />
        <Route path="/pricing-plans" element={<PricingPlan />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      
    </>
  );
}

export default App;
