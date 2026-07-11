import React, { useRef, useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { useLanguage } from '../contexts/LanguageContext';
import { 
  Globe, Smartphone, Laptop, Box, Settings, Users, 
  Brain, Shield, Cloud, Palette, Link, Database, Wrench,
  ChevronLeft, ChevronRight
} from 'lucide-react';

export default function Services() {
  const { t, lang } = useLanguage();
  const scrollRef = useRef(null);
  const [canScrollPrev, setCanScrollPrev] = useState(false);
  const [canScrollNext, setCanScrollNext] = useState(true);

  const services = [
    { icon: <Globe size={40} color="var(--accent-cyan)" />, title: t('s1_title'), desc: t('s1_desc') },
    { icon: <Smartphone size={40} color="var(--accent-cyan)" />, title: t('s2_title'), desc: t('s2_desc') },
    { icon: <Laptop size={40} color="var(--accent-cyan)" />, title: t('s3_title'), desc: t('s3_desc') },
    { icon: <Box size={40} color="var(--accent-cyan)" />, title: t('s4_title'), desc: t('s4_desc') },
    { icon: <Settings size={40} color="var(--accent-cyan)" />, title: t('s5_title'), desc: t('s5_desc') },
    { icon: <Users size={40} color="var(--accent-cyan)" />, title: t('s6_title'), desc: t('s6_desc') },
    { icon: <Brain size={40} color="var(--accent-cyan)" />, title: t('s7_title'), desc: t('s7_desc') },
    { icon: <Shield size={40} color="var(--accent-cyan)" />, title: t('s8_title'), desc: t('s8_desc') },
    { icon: <Cloud size={40} color="var(--accent-cyan)" />, title: t('s9_title'), desc: t('s9_desc') },
    { icon: <Palette size={40} color="var(--accent-cyan)" />, title: t('s10_title'), desc: t('s10_desc') },
    { icon: <Link size={40} color="var(--accent-cyan)" />, title: t('s11_title'), desc: t('s11_desc') },
    { icon: <Database size={40} color="var(--accent-cyan)" />, title: t('s12_title'), desc: t('s12_desc') },
    { icon: <Wrench size={40} color="var(--accent-cyan)" />, title: t('s13_title'), desc: t('s13_desc') },
  ];

  const updateScrollButtons = () => {
    if (scrollRef.current) {
      const { scrollLeft, scrollWidth, clientWidth } = scrollRef.current;
      const isRtl = lang === 'ar';
      
      const absScrollLeft = Math.abs(scrollLeft);
      const maxScroll = scrollWidth - clientWidth;
      
      if (isRtl) {
        setCanScrollPrev(absScrollLeft > 5);
        setCanScrollNext(absScrollLeft < maxScroll - 5);
      } else {
        setCanScrollPrev(scrollLeft > 5);
        setCanScrollNext(scrollLeft < maxScroll - 5);
      }
    }
  };

  useEffect(() => {
    const el = scrollRef.current;
    if (el) {
      el.addEventListener('scroll', updateScrollButtons);
      window.addEventListener('resize', updateScrollButtons);
      setTimeout(updateScrollButtons, 100);
    }
    return () => {
      if (el) {
        el.removeEventListener('scroll', updateScrollButtons);
      }
      window.removeEventListener('resize', updateScrollButtons);
    };
  }, [lang]);

  const scrollNext = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('[data-card]');
      const cardWidth = card ? card.offsetWidth : 350;
      const gap = 30;
      const amount = cardWidth + gap;
      
      const factor = lang === 'ar' ? -1 : 1;
      scrollRef.current.scrollBy({ left: amount * factor, behavior: 'smooth' });
    }
  };

  const scrollPrev = () => {
    if (scrollRef.current) {
      const card = scrollRef.current.querySelector('[data-card]');
      const cardWidth = card ? card.offsetWidth : 350;
      const gap = 30;
      const amount = cardWidth + gap;
      
      const factor = lang === 'ar' ? 1 : -1;
      scrollRef.current.scrollBy({ left: amount * factor, behavior: 'smooth' });
    }
  };

  return (
    <section id="services" style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 20px' }}>
      <div style={{ 
        display: 'flex', 
        justifyContent: 'space-between', 
        alignItems: 'center', 
        marginBottom: '40px',
        flexWrap: 'wrap',
        gap: '20px'
      }}>
        <h2 style={{ fontSize: '2.5rem', margin: 0 }}>
          {t('services_title')}
        </h2>
        
        <div style={{ display: 'flex', gap: '15px' }}>
          <button 
            onClick={scrollPrev}
            disabled={!canScrollPrev}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollPrev ? 'pointer' : 'default',
              opacity: canScrollPrev ? 1 : 0.4,
              transition: 'var(--transition)',
              boxShadow: canScrollPrev ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (canScrollPrev) {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 15px var(--accent-cyan-glow)';
              }
            }}
            onMouseLeave={(e) => {
              if (canScrollPrev) {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }
            }}
          >
            {lang === 'ar' ? <ChevronRight size={24} /> : <ChevronLeft size={24} />}
          </button>
          
          <button 
            onClick={scrollNext}
            disabled={!canScrollNext}
            style={{
              width: '50px',
              height: '50px',
              borderRadius: '50%',
              background: 'var(--bg-secondary)',
              border: '1px solid var(--border-color)',
              color: 'var(--text-primary)',
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              cursor: canScrollNext ? 'pointer' : 'default',
              opacity: canScrollNext ? 1 : 0.4,
              transition: 'var(--transition)',
              boxShadow: canScrollNext ? '0 4px 12px rgba(0,0,0,0.1)' : 'none'
            }}
            onMouseEnter={(e) => {
              if (canScrollNext) {
                e.currentTarget.style.borderColor = 'var(--accent-cyan)';
                e.currentTarget.style.boxShadow = '0 0 15px var(--accent-cyan-glow)';
              }
            }}
            onMouseLeave={(e) => {
              if (canScrollNext) {
                e.currentTarget.style.borderColor = 'var(--border-color)';
                e.currentTarget.style.boxShadow = '0 4px 12px rgba(0,0,0,0.1)';
              }
            }}
          >
            {lang === 'ar' ? <ChevronLeft size={24} /> : <ChevronRight size={24} />}
          </button>
        </div>
      </div>

      <div 
        ref={scrollRef}
        className="no-scrollbar"
        style={{ 
          display: 'flex', 
          gap: '30px', 
          overflowX: 'auto', 
          scrollSnapType: 'x mandatory',
          padding: '10px 5px 30px',
          scrollBehavior: 'smooth'
        }}
      >
        {services.map((service, index) => (
          <motion.div 
            key={index}
            data-card
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.4, delay: index * 0.03 }}
            whileHover={{ y: -10, borderColor: 'var(--accent-cyan)', boxShadow: '0 15px 30px rgba(6, 182, 212, 0.15)' }}
            style={{
              flex: '0 0 350px',
              scrollSnapAlign: 'start',
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)',
              padding: '35px 30px', 
              borderRadius: '24px', 
              textAlign: 'center',
              boxShadow: '0 10px 30px rgba(0,0,0,0.05)',
              transition: 'border-color 0.3s, box-shadow 0.3s, transform 0.3s'
            }}
          >
            <div style={{ 
              marginBottom: '25px', 
              display: 'inline-flex',
              padding: '15px',
              borderRadius: '16px',
              background: 'rgba(6, 182, 212, 0.08)',
              border: '1px solid rgba(6, 182, 212, 0.1)'
            }}>
              {service.icon}
            </div>
            <h3 style={{ fontSize: '1.4rem', marginBottom: '15px', color: 'var(--text-primary)', fontWeight: '700' }}>
              {service.title}
            </h3>
            <p style={{ color: 'var(--text-secondary)', fontSize: '0.95rem', lineHeight: '1.7' }}>
              {service.desc}
            </p>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
