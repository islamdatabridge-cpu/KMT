import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { useLanguage } from '../contexts/LanguageContext';
import { ArrowLeft } from 'lucide-react';

const articlesList = [
  {
    id: 'kmt-lms',
    title: 'KMT LMS',
    tag: 'نظام إدارة التعلم',
    image: '/images/kmt-lms/1.jpeg',
    desc: 'أفضل نظام إدارة التعلم والمنصات التعليمية الذكي. يجمع بين التكنولوجيا والذكاء وسهولة الإدارة في منصة واحدة.',
    link: '/kmt-lms',
    color: 'var(--accent-cyan)'
  },
  {
    id: 'kmt-clinic',
    title: 'KMT Clinic',
    tag: 'منتج طبي مميز',
    image: '/images/kmt-clinic/p1.jpeg',
    desc: 'منصة طبية ذكية تعتمد على الذكاء الاصطناعي لتلبية احتياجات العيادات الحديثة التي تسعى للتوسع.',
    link: '/kmt-clinic',
    color: 'var(--accent-cyan)'
  },
  {
    id: 'kmt-store',
    title: 'KMT Store',
    tag: 'منصة تجارة إلكترونية',
    image: '/images/kmt-store/q1.jpeg',
    desc: 'منصة تجارة إلكترونية متكاملة لإنشاء وإدارة المتاجر الإلكترونية باحترافية وسهولة.',
    link: '/kmt-store',
    color: 'var(--accent-blue)'
  },
  {
    id: 'kmt-school',
    title: 'KMT School',
    tag: 'نظام إدارة مدارس',
    image: '/images/kmt-school/1.jpeg',
    desc: 'نظام متكامل لإدارة المدارس يساعد الإدارات التعليمية على تنظيم جميع أعمالها من مكان واحد.',
    link: '/kmt-school',
    color: 'var(--accent-cyan)'
  },
  {
    id: 'kmt-hospital',
    title: 'KMT Hospital',
    tag: 'نظام إدارة مستشفيات',
    image: '/images/kmt-hospital/1.jpeg',
    desc: 'أفضل نظام إدارة مستشفيات ذكي للتحول الرقمي الطبي المتكامل.',
    link: '/kmt-hospital',
    color: 'var(--accent-cyan)'
  },
  {
    id: 'kmt-pharmacy',
    title: 'KMT Pharmacy',
    tag: 'نظام إدارة صيدليات',
    image: '/images/kmt-pharmacy/1.jpeg',
    desc: 'أفضل نظام إدارة الصيدليات الذكي لزيادة المبيعات والأرباح.',
    link: '/kmt-pharmacy',
    color: 'var(--accent-blue)'
  },
  {
    id: 'kmt-lab',
    title: 'KMT Lab',
    tag: 'نظام إدارة مختبرات',
    image: '/images/kmt-lab/1.jpeg',
    desc: 'أفضل نظام إدارة مختبرات ومعامل التحاليل الطبية الذكي.',
    link: '/kmt-lab',
    color: 'var(--accent-cyan)'
  }
];

export default function Articles() {
  const { t } = useLanguage();

  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "مقالات KMT | Articles";
  }, []);

  return (
    <div style={{ paddingTop: '120px', paddingBottom: '100px', minHeight: '100vh', background: 'var(--bg-primary)' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto', padding: '0 5%' }}>
        
        <div style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.h1 
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            className="gradient-text" 
            style={{ fontSize: '3rem', marginBottom: '20px' }}
          >
            {t('nav_articles')}
          </motion.h1>
          <motion.p 
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ delay: 0.2 }}
            style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}
          >
            تعرف على أحدث مقالاتنا وأقوى منتجاتنا التي تعيد تعريف الأعمال والإدارة
          </motion.p>
        </div>

        <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '40px' }}>
          {articlesList.map((article, index) => (
            <motion.div
              key={article.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{
                background: 'var(--bg-secondary)',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${article.color}22`;
                e.currentTarget.style.borderColor = article.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <Link to={article.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={article.image} alt={article.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', padding: '6px 16px', background: 'rgba(11, 18, 32, 0.8)', backdropFilter: 'blur(10px)', border: `1px solid ${article.color}`, color: article.color, borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    {article.tag}
                  </div>
                </div>
                
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>{article.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>
                    {article.desc}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: article.color, fontWeight: 'bold', fontSize: '1.05rem', marginTop: 'auto' }}>
                    <span>اقرأ المزيد</span>
                    <ArrowLeft size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>

      </div>
    </div>
  );
}
