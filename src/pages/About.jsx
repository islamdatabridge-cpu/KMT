import React from 'react';
import { motion } from 'framer-motion';

export default function About() {
  return (
    <div style={{ maxWidth: '1200px', margin: '150px auto 100px', padding: '0 20px', direction: 'rtl' }}>
      
      {/* Intro Section */}
      <motion.section 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
        style={{ textAlign: 'center', marginBottom: '80px' }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '30px' }}>من نحن</h1>
        <p style={{ fontSize: '1.2rem', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.8' }}>
          مرحبًا بكم في KMT، شركة متخصصة في تطوير البرمجيات وتقديم الحلول التقنية المتكاملة للأفراد والشركات. نهدف إلى تحويل الأفكار إلى منتجات رقمية احترافية تساعد عملاءنا على النمو وتحقيق أهدافهم باستخدام أحدث التقنيات والمعايير العالمية.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto 20px', lineHeight: '1.8' }}>
          نقدم مجموعة واسعة من الخدمات تشمل تطوير الأنظمة الإدارية (ERP)، وتخصيص وتطوير Odoo ERP، وتصميم وتطوير مواقع الويب، وتطوير تطبيقات الهواتف الذكية، بالإضافة إلى حلول الأمن السيبراني والاستشارات التقنية.
        </p>
        <p style={{ fontSize: '1.1rem', color: 'var(--text-secondary)', maxWidth: '900px', margin: '0 auto', lineHeight: '1.8' }}>
          في KMT نؤمن بأن نجاح أي مشروع يبدأ بفهم احتياجات العميل، لذلك نعمل على تقديم حلول مرنة، آمنة، وقابلة للتوسع، مع الالتزام بأعلى معايير الجودة والأداء.
        </p>
      </motion.section>

      {/* Vision, Mission, Values */}
      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px', marginBottom: '100px' }}>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} style={cardStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-cyan)' }}>رؤيتنا</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>أن نصبح من الشركات الرائدة في مجال تطوير البرمجيات والحلول الرقمية على المستوى المحلي والإقليمي.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.1 }} style={cardStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-cyan)' }}>رسالتنا</h2>
          <p style={{ color: 'var(--text-secondary)', lineHeight: '1.8' }}>تقديم حلول برمجية مبتكرة تساعد الشركات على تحسين أعمالها، ورفع كفاءتها، وتسريع التحول الرقمي.</p>
        </motion.div>
        <motion.div initial={{ opacity: 0, y: 30 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: 0.2 }} style={cardStyle}>
          <h2 style={{ fontSize: '1.8rem', marginBottom: '15px', color: 'var(--accent-cyan)' }}>قيمنا</h2>
          <ul style={{ color: 'var(--text-secondary)', lineHeight: '1.8', paddingRight: '20px' }}>
            <li>الجودة والاحترافية.</li>
            <li>الابتكار والتطوير المستمر.</li>
            <li>الشفافية والمصداقية.</li>
            <li>الالتزام بالمواعيد.</li>
            <li>بناء شراكات طويلة الأمد مع عملائنا.</li>
          </ul>
        </motion.div>
      </div>
    </div>
  );
}

const cardStyle = {
  background: 'var(--bg-secondary)', 
  border: '1px solid var(--border-color)',
  padding: '40px 30px', 
  borderRadius: '20px',
  boxShadow: '0 10px 30px rgba(0,0,0,0.1)'
};
