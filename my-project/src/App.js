// import logo from './logo.svg';
// import './App.css';

import Navbar from "./components/Navbar";
import Dashboard from "./pages/Dashboard";
import Footer from "./pages/Footer";
import Purchase from "./pages/Purchase";
import WhatWeDo from "./pages/WhatWeDo";
import WhyUs from "./pages/WhyUs";

function App() {
  return (
    <>
    <Dashboard/>
    <WhatWeDo/>
    <WhyUs/>
    <Purchase/>
    <Footer/>
    </>
  );
}

export default App;
