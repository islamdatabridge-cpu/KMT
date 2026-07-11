import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { ThemeProvider } from './contexts/ThemeContext';
import { LanguageProvider } from './contexts/LanguageContext';
import Layout from './components/Layout';
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Privacy from './pages/Privacy';
import FAQ from './pages/FAQ';
import KmtClinicArticle from './pages/KmtClinicArticle';
import KmtStoreArticle from './pages/KmtStoreArticle';
import KmtSchoolArticle from './pages/KmtSchoolArticle';
import KmtLmsArticle from './pages/KmtLmsArticle';
import KmtHospitalArticle from './pages/KmtHospitalArticle';
import KmtPharmacyArticle from './pages/KmtPharmacyArticle';
import KmtLabArticle from './pages/KmtLabArticle';
import KmtLabDemo from './pages/KmtLabDemo';
import Articles from './pages/Articles';

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <BrowserRouter>
          <Routes>
            <Route path="/" element={<Layout />}>
              <Route index element={<Home />} />
              <Route path="about" element={<About />} />
              <Route path="contact" element={<Contact />} />
              <Route path="privacy" element={<Privacy />} />
              <Route path="faq" element={<FAQ />} />
              <Route path="kmt-clinic" element={<KmtClinicArticle />} />
              <Route path="kmt-store" element={<KmtStoreArticle />} />
              <Route path="kmt-school" element={<KmtSchoolArticle />} />
              <Route path="kmt-lms" element={<KmtLmsArticle />} />
              <Route path="kmt-hospital" element={<KmtHospitalArticle />} />
              <Route path="kmt-pharmacy" element={<KmtPharmacyArticle />} />
              <Route path="kmt-lab" element={<KmtLabArticle />} />
              <Route path="articles" element={<Articles />} />
            </Route>
            <Route path="/kmt-lab/demo" element={<KmtLabDemo />} />
          </Routes>
        </BrowserRouter>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
