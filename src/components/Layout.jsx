import React from 'react';
import { Outlet } from 'react-router-dom';
import Navbar from './Navbar';
import Footer from './Footer';
import FloatingWhatsApp from './FloatingWhatsApp';

export default function Layout() {
  return (
    <>
      <div className="glow-orb-1"></div>
      <div className="glow-orb-2"></div>
      <Navbar />
      <div style={{ minHeight: 'calc(100vh - 300px)' }}>
        <Outlet />
      </div>
      <Footer />
      <FloatingWhatsApp />
    </>
  );
}
