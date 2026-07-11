import React, { useRef } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { ChevronRight, ChevronLeft, ArrowLeft } from 'lucide-react';

const projects = [
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

export default function FeaturedProject() {
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: -350, behavior: 'smooth' });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      sliderRef.current.scrollBy({ left: 350, behavior: 'smooth' });
    }
  };

  return (
    <section style={{ padding: '100px 5%', direction: 'rtl', background: 'var(--bg-secondary)', overflow: 'hidden' }}>
      <div style={{ maxWidth: '1400px', margin: '0 auto' }}>
        
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'flex-end', marginBottom: '50px', flexWrap: 'wrap', gap: '20px' }}>
          <div>
            <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '15px' }}>مقالات ومشاريع KMT</h2>
            <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px' }}>
              تعرف على أحدث مقالاتنا وأقوى منتجاتنا التي تعيد تعريف الأعمال والإدارة
            </p>
          </div>
          
          <div style={{ display: 'flex', gap: '15px' }}>
            <button onClick={slideRight} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
              <ChevronRight size={24} />
            </button>
            <button onClick={slideLeft} style={{ width: '50px', height: '50px', borderRadius: '50%', background: 'var(--bg-primary)', border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', justifyContent: 'center', cursor: 'pointer', color: 'var(--text-primary)', transition: 'all 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.borderColor = 'var(--accent-cyan)'} onMouseLeave={(e) => e.currentTarget.style.borderColor = 'var(--border-color)'}>
              <ChevronLeft size={24} />
            </button>
          </div>
        </div>

        <div 
          ref={sliderRef}
          style={{ 
            display: 'flex', 
            gap: '30px', 
            overflowX: 'auto', 
            scrollSnapType: 'x mandatory', 
            paddingBottom: '40px',
            scrollbarWidth: 'none', // Firefox
            msOverflowStyle: 'none',  // IE and Edge
            WebkitOverflowScrolling: 'touch'
          }}
          className="hide-scrollbar"
        >
          {projects.map((project, index) => (
            <motion.div 
              key={project.id}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              style={{ 
                flex: '0 0 clamp(300px, 80vw, 400px)', 
                scrollSnapAlign: 'start',
                background: 'var(--bg-primary)',
                borderRadius: '24px',
                border: '1px solid var(--border-color)',
                overflow: 'hidden',
                display: 'flex',
                flexDirection: 'column',
                boxShadow: '0 15px 35px rgba(0,0,0,0.1)',
                transition: 'transform 0.3s, box-shadow 0.3s',
                cursor: 'pointer'
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.transform = 'translateY(-10px)';
                e.currentTarget.style.boxShadow = `0 20px 40px ${project.color}22`;
                e.currentTarget.style.borderColor = project.color;
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.transform = 'translateY(0)';
                e.currentTarget.style.boxShadow = '0 15px 35px rgba(0,0,0,0.1)';
                e.currentTarget.style.borderColor = 'var(--border-color)';
              }}
            >
              <Link to={project.link} style={{ textDecoration: 'none', color: 'inherit', display: 'flex', flexDirection: 'column', height: '100%' }}>
                <div style={{ height: '240px', overflow: 'hidden', position: 'relative' }}>
                  <img src={project.image} alt={project.title} style={{ width: '100%', height: '100%', objectFit: 'cover', transition: 'transform 0.5s' }} />
                  <div style={{ position: 'absolute', top: '15px', right: '15px', padding: '6px 16px', background: 'rgba(11, 18, 32, 0.8)', backdropFilter: 'blur(10px)', border: `1px solid ${project.color}`, color: project.color, borderRadius: '20px', fontSize: '0.85rem', fontWeight: 'bold' }}>
                    {project.tag}
                  </div>
                </div>
                
                <div style={{ padding: '30px', display: 'flex', flexDirection: 'column', flex: 1 }}>
                  <h3 style={{ fontSize: '1.8rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>{project.title}</h3>
                  <p style={{ color: 'var(--text-secondary)', fontSize: '1rem', lineHeight: '1.6', marginBottom: '25px', flex: 1 }}>
                    {project.desc}
                  </p>
                  
                  <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: project.color, fontWeight: 'bold', fontSize: '1.05rem', marginTop: 'auto' }}>
                    <span>اقرأ المزيد</span>
                    <ArrowLeft size={18} />
                  </div>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
        
        {/* Hide Scrollbar Style */}
        <style dangerouslySetInnerHTML={{__html: `
          .hide-scrollbar::-webkit-scrollbar {
            display: none;
          }
        `}} />
      </div>
    </section>
  );
}
