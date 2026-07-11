import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { FaWhatsapp } from 'react-icons/fa';

export default function FloatingWhatsApp() {
  const { lang } = useLanguage();

  return (
    <a 
      href="https://wa.me/201100665674" 
      target="_blank" 
      rel="noopener noreferrer"
      style={{
        position: 'fixed',
        bottom: '30px',
        [lang === 'ar' ? 'left' : 'right']: '30px',
        width: '60px',
        height: '60px',
        backgroundColor: '#25D366',
        color: 'white',
        borderRadius: '50%',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        boxShadow: '0 8px 25px rgba(37, 211, 102, 0.4)',
        zIndex: 9999,
        textDecoration: 'none',
        transition: 'transform 0.3s, box-shadow 0.3s'
      }}
      onMouseOver={e => {
        e.currentTarget.style.transform = 'scale(1.1) rotate(10deg)';
        e.currentTarget.style.boxShadow = '0 12px 30px rgba(37, 211, 102, 0.6)';
      }}
      onMouseOut={e => {
        e.currentTarget.style.transform = 'scale(1) rotate(0deg)';
        e.currentTarget.style.boxShadow = '0 8px 25px rgba(37, 211, 102, 0.4)';
      }}
    >
      <FaWhatsapp size={35} />
    </a>
  );
}
