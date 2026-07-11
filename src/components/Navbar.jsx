import React, { useState } from 'react';
import { useTheme } from '../contexts/ThemeContext';
import { useLanguage } from '../contexts/LanguageContext';
import { Moon, Sun, Globe, Menu, X } from 'lucide-react';
import { Link } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';


export default function Navbar() {
  const { theme, toggleTheme } = useTheme();
  const { lang, toggleLanguage, t } = useLanguage();
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  return (
    <>
      <nav style={{
        position: 'fixed', top: 0, width: '100%',
        background: 'var(--bg-nav)', backdropFilter: 'blur(15px)',
        borderBottom: '1px solid var(--border-color)',
        padding: '15px 5%', display: 'flex', justifyContent: 'space-between',
        alignItems: 'center', zIndex: 1000
      }}>
        <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
          <Link to="/">
            <img src='/images/logo.jpeg' alt="KMT Logo" style={{
              height: '50px', width: 'auto', objectFit: 'contain', borderRadius: '8px'
            }} />
          </Link>
        </div>

        {/* Desktop Menu */}
        <ul className="desktop-nav" style={{ display: 'flex', gap: '25px', listStyle: 'none', fontWeight: '700' }}>
          <li><Link to="/">{t('nav_home')}</Link></li>
          <li><Link to="/about">{t('nav_about')}</Link></li>
          <li><Link to="/articles">{t('nav_articles')}</Link></li>
          <li><Link to="/contact">{t('nav_contact')}</Link></li>
        </ul>

        <div style={{ display: 'flex', gap: '10px' }}>
          <div className="desktop-actions" style={{ display: 'flex', gap: '10px' }}>
            <button onClick={toggleTheme} style={btnStyle}>
              {theme === 'light' ? <Moon size={20} /> : <Sun size={20} />}
            </button>
            <button onClick={toggleLanguage} style={btnStyle}>
              <Globe size={20} style={{marginRight: lang === 'en' ? '5px' : '0', marginLeft: lang === 'ar' ? '5px' : '0'}}/>
              <span>{lang === 'ar' ? 'EN' : 'عربي'}</span>
            </button>
          </div>
          <button className="mobile-menu-btn" onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)} style={btnStyle}>
            {isMobileMenuOpen ? <X size={20} /> : <Menu size={20} />}
          </button>
        </div>
      </nav>

      {/* Mobile Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            style={{
              position: 'fixed', top: '80px', left: 0, width: '100%',
              background: 'var(--bg-primary)', borderBottom: '1px solid var(--border-color)',
              padding: '20px 5%', zIndex: 999, display: 'flex', flexDirection: 'column', gap: '20px'
            }}
          >
            <Link to="/" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>{t('nav_home')}</Link>
            <Link to="/about" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>{t('nav_about')}</Link>
            <Link to="/articles" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>{t('nav_articles')}</Link>
            <Link to="/contact" onClick={() => setIsMobileMenuOpen(false)} style={mobileLinkStyle}>{t('nav_contact')}</Link>
            <div style={{ display: 'flex', gap: '15px', marginTop: '10px' }}>
              <button onClick={() => { toggleTheme(); setIsMobileMenuOpen(false); }} style={{...btnStyle, flex: 1}}>
                {theme === 'light' ? <Moon size={20} style={{marginRight: '8px'}} /> : <Sun size={20} style={{marginRight: '8px'}} />}
                <span>{theme === 'light' ? 'Dark Mode' : 'Light Mode'}</span>
              </button>
              <button onClick={() => { toggleLanguage(); setIsMobileMenuOpen(false); }} style={{...btnStyle, flex: 1}}>
                <Globe size={20} style={{marginRight: '8px'}}/>
                <span>{lang === 'ar' ? 'English' : 'عربي'}</span>
              </button>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}

const mobileLinkStyle = {
  fontSize: '1.2rem', fontWeight: '700', color: 'var(--text-primary)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px'
};

const btnStyle = {
  background: 'var(--bg-secondary)',
  border: '1px solid var(--border-color)',
  color: 'var(--text-primary)',
  height: '45px',
  padding: '0 15px',
  borderRadius: '25px',
  cursor: 'pointer',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  fontWeight: '700',
  transition: 'var(--transition)'
};
