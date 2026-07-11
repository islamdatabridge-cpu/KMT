import React, { useState } from 'react';
import { motion } from 'framer-motion';
import Lightbox from 'yet-another-react-lightbox';
import Slideshow from "yet-another-react-lightbox/plugins/slideshow";
import Thumbnails from "yet-another-react-lightbox/plugins/thumbnails";
import "yet-another-react-lightbox/styles.css";
import "yet-another-react-lightbox/plugins/thumbnails.css";
import { useLanguage } from '../contexts/LanguageContext';
import { Activity, Database, ShoppingBag, Target, MonitorSmartphone, TrendingUp, Globe, Eye, Stethoscope } from 'lucide-react';

const imagesPaths = Object.keys(import.meta.glob('/public/images/portfolio/**/*.{jpg,jpeg,png}'));

export default function Portfolio() {
  const { t } = useLanguage();
  const [isOpen, setIsOpen] = useState(false);
  const [photoIndex, setPhotoIndex] = useState(0);
  const [currentSlides, setCurrentSlides] = useState([]);

  // Group images by folder
  const groupedImages = {};
  imagesPaths.forEach(path => {
    const publicUrl = path.replace('/public', '');
    const parts = publicUrl.split('/');
    const folderName = parts[parts.length - 2];
    if (!groupedImages[folderName]) {
      groupedImages[folderName] = [];
    }
    groupedImages[folderName].push({ src: publicUrl });
  });

  const folderConfig = [
    { id: 'data_pro_app', icon: <Database size={40} />, title: 'Data Pro App' },
    { id: 'fekra_site', icon: <Globe size={40} />, title: 'Fekra Site' },
    { id: 'kfahi_app', icon: <Target size={40} />, title: 'Kfahi App' },
    { id: 'kiran_app', icon: <MonitorSmartphone size={40} />, title: 'Kiran App' },
    { id: 'nemou_app', icon: <TrendingUp size={40} />, title: 'Nemou App' },
    { id: 'clinic_app', icon: <Stethoscope size={40} />, title: 'Clinic App' },
    { id: 'venus_app', icon: <ShoppingBag size={40} />, title: 'Venus App' }
  ];

  const openLightbox = (slides) => {
    if (slides.length > 0) {
      setCurrentSlides(slides);
      setPhotoIndex(0);
      setIsOpen(true);
    }
  };

  return (
    <section id="portfolio" style={{ maxWidth: '1200px', margin: '0 auto 100px', padding: '0 20px' }}>
      <h2 style={{ textAlign: 'center', fontSize: '2.5rem', marginBottom: '50px' }}>
        {t('portfolio_title')}
      </h2>
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(280px, 1fr))', gap: '30px' }}>
        {folderConfig.map((project, index) => {
          const slides = groupedImages[project.id] || [];
          return (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, scale: 0.9 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              whileHover={{ y: -10, borderColor: 'var(--accent-cyan)' }}
              style={{
                background: 'var(--bg-secondary)', border: '1px solid var(--border-color)',
                borderRadius: '20px', padding: '40px 20px', textAlign: 'center',
                boxShadow: '0 10px 30px rgba(0,0,0,0.1)', cursor: 'pointer',
                display: 'flex', flexDirection: 'column', alignItems: 'center'
              }}
              onClick={() => openLightbox(slides)}
            >
              <div style={{
                background: 'var(--accent-cyan-glow)', padding: '20px',
                borderRadius: '50%', color: 'var(--accent-cyan)', marginBottom: '20px'
              }}>
                {project.icon}
              </div>
              <h3 style={{ fontSize: '1.5rem', marginBottom: '10px' }}>{project.title}</h3>
              <p style={{ color: 'var(--text-secondary)', display: 'flex', alignItems: 'center', gap: '8px' }}>
                <Eye size={18} /> {slides.length} Screens
              </p>
            </motion.div>
          );
        })}
      </div>

      {isOpen && (
        <Lightbox
          open={isOpen}
          close={() => setIsOpen(false)}
          slides={currentSlides}
          index={photoIndex}
          plugins={[Slideshow, Thumbnails]}
          slideshow={{ autoplay: true, delay: 2500 }}
          thumbnails={{ position: 'bottom', width: 120, height: 80, border: 1, borderRadius: 4, padding: 4, gap: 16 }}
        />
      )}
    </section>
  );
}
