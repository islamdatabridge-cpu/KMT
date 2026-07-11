import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Hero() {
  const { t } = useLanguage();

  return (
    <section id="home" style={{
      maxWidth: '1200px', margin: '150px auto 100px',
      textAlign: 'center', padding: '0 20px'
    }}>
      <motion.h1 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6 }}
        style={{ fontSize: 'clamp(2.5rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.3' }}
      >
        {t('hero_title')}
        <span className="gradient-text">{t('hero_title_span')}</span>
      </motion.h1>

      <motion.p 
        initial={{ opacity: 0, y: 20 }} 
        animate={{ opacity: 1, y: 0 }} 
        transition={{ duration: 0.6, delay: 0.2 }}
        style={{ fontSize: 'clamp(1rem, 2vw, 1.2rem)', color: 'var(--text-secondary)', maxWidth: '700px', margin: '0 auto 40px', lineHeight: '1.6' }}
      >
        {t('hero_subtitle')}
      </motion.p>

    </section>
  );
}
