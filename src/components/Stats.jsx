import React from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { Smile, CheckCircle, HeadphonesIcon, Clock } from 'lucide-react';

export default function Stats() {
  const { t } = useLanguage();

  const stats = [
    { icon: <Smile size={40} />, number: "+37", label: t('stat_clients') },
    { icon: <CheckCircle size={40} />, number: "+42", label: t('stat_projects') },
    { icon: <HeadphonesIcon size={40} />, number: "24/7", label: t('stat_support') },
    { icon: <Clock size={40} />, number: "+4", label: t('stat_years') },
  ];

  return (
    <section style={{ 
      maxWidth: '1200px', margin: '0 auto 100px', padding: '60px 20px',
      background: 'var(--bg-secondary)', borderRadius: '30px', border: '1px solid var(--border-color)',
      boxShadow: '0 20px 40px rgba(0,0,0,0.1)'
    }}>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '30px', textAlign: 'center' }}>
        {stats.map((stat, index) => (
          <motion.div 
            key={index}
            initial={{ opacity: 0, scale: 0.8 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
          >
            <div style={{ 
              display: 'inline-flex', alignItems: 'center', justifyContent: 'center',
              width: '80px', height: '80px', borderRadius: '50%',
              background: 'var(--accent-blue-glow)', color: 'var(--accent-blue)',
              marginBottom: '20px'
            }}>
              {stat.icon}
            </div>
            <h3 className="gradient-text" style={{ fontSize: '3rem', fontWeight: '900', marginBottom: '10px' }}>
              {stat.number}
            </h3>
            <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', fontWeight: '600' }}>
              {stat.label}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
