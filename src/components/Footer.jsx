import React from 'react';
import { useLanguage } from '../contexts/LanguageContext';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaFacebookF, FaInstagram, FaXTwitter, FaYoutube } from 'react-icons/fa6';

export default function Footer() {
  const { t } = useLanguage();

  return (
    <footer style={{
      borderTop: '1px solid var(--border-color)',
      padding: '60px 5% 30px',
      background: 'var(--bg-secondary)',
      marginTop: 'auto'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '40px', marginBottom: '40px' }}>
        
        {/* Brand Column */}
        <div>
          <div className="gradient-text" style={{ fontSize: '28px', fontWeight: '900', marginBottom: '15px' }}>
            KMT Software
          </div>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.6', marginBottom: '20px' }}>
            {t('footer_text')}
          </p>
          <div style={{ display: 'flex', gap: '15px' }}>
            <SocialIcon url="https://www.facebook.com/profile.php?id=61591407256201" icon={<FaFacebookF size={18} />} />
            <SocialIcon url="https://www.instagram.com/kmt.solutions/" icon={<FaInstagram size={18} />} />
            <SocialIcon url="https://x.com/IslamA82541" icon={<FaXTwitter size={18} />} />
            <SocialIcon url="https://www.youtube.com/channel/UCMGPT1bU49DIxCaMBCWDW6w" icon={<FaYoutube size={18} />} />
          </div>
        </div>

        {/* Links Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{t('footer_links_title')}</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '12px' }}>
            <FooterLink text={t('nav_about')} to="/about" />
            <FooterLink text={t('nav_contact')} to="/contact" />
            <FooterLink text={t('nav_privacy')} to="/privacy" />
            <FooterLink text={t('nav_faq')} to="/faq" />
          </ul>
        </div>

        {/* Contact Column */}
        <div>
          <h4 style={{ fontSize: '1.2rem', marginBottom: '20px' }}>{t('nav_portfolio') === 'Portfolio' ? 'Contact Us' : 'تواصل معنا'}</h4>
          <ul style={{ listStyle: 'none', color: 'var(--text-secondary)', display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Phone size={18} color="var(--accent-cyan)" /> {t('contact_number')}
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Mail size={18} color="var(--accent-cyan)" /> en.eslam.mahrows@gmail.com
            </li>
            <li style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
              <MapPin size={18} color="var(--accent-cyan)" /> Cairo, Egypt
            </li>
          </ul>
        </div>
      </div>

      <div style={{ textAlign: 'center', paddingTop: '30px', borderTop: '1px solid var(--border-color)', color: 'var(--text-secondary)', fontSize: '0.9rem' }}>
        © {new Date().getFullYear()} KMT Software Solutions. All rights reserved.
      </div>
    </footer>
  );
}

function SocialIcon({ url, icon }) {
  return (
    <a href={url} target="_blank" rel="noopener noreferrer" style={{
      width: '40px', height: '40px', borderRadius: '50%',
      background: 'var(--bg-primary)', border: '1px solid var(--border-color)',
      display: 'flex', alignItems: 'center', justifyContent: 'center',
      color: 'var(--text-secondary)', transition: 'var(--transition)'
    }}
    onMouseOver={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; e.currentTarget.style.borderColor = 'var(--accent-cyan)'; }}
    onMouseOut={e => { e.currentTarget.style.color = 'var(--text-secondary)'; e.currentTarget.style.borderColor = 'var(--border-color)'; }}
    >
      {icon}
    </a>
  );
}

import { Link } from 'react-router-dom';

function FooterLink({ text, to }) {
  return (
    <li>
      <Link to={to} style={{ transition: 'var(--transition)' }}
         onMouseOver={e => { e.currentTarget.style.color = 'var(--accent-cyan)'; }}
         onMouseOut={e => { e.currentTarget.style.color = 'inherit'; }}>
        {text}
      </Link>
    </li>
  );
}
