import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';

export default function Contact() {
  const { t } = useLanguage();

  return (
    <div style={{ maxWidth: '800px', margin: '150px auto 100px', padding: '0 20px' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '50px' }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>
          {t('contact_title')}
        </h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)' }}>
          {t('contact_desc')}
        </p>
      </motion.div>

      <motion.form 
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.5, delay: 0.2 }}
        style={{
          background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
          padding: '40px', borderRadius: '20px', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          display: 'flex', flexDirection: 'column', gap: '20px'
        }}
        onSubmit={e => e.preventDefault()}
      >
        <div>
          <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-primary)' }}>{t('contact_form_name')}</label>
          <input type="text" style={{
            width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none'
          }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-primary)' }}>{t('contact_form_email')}</label>
          <input type="email" style={{
            width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none'
          }} />
        </div>
        <div>
          <label style={{ display: 'block', marginBottom: '10px', color: 'var(--text-primary)' }}>{t('contact_form_msg')}</label>
          <textarea rows="5" style={{
            width: '100%', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)',
            background: 'var(--bg-primary)', color: 'var(--text-primary)', outline: 'none', resize: 'none'
          }}></textarea>
        </div>
        <button className="btn-primary" style={{ marginTop: '10px', width: '100%' }}>
          {t('contact_form_btn')}
        </button>
      </motion.form>
    </div>
  );
}
