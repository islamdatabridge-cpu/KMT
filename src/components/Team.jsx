import React from 'react';
import { motion } from 'framer-motion';

export default function Team() {
  const team = [
    { 
      name: "إسلام عاطف", role: "Odoo ERP Developer", img: "/images/team/islam.png",
      desc: "متخصص في تطوير وتخصيص أنظمة Odoo ERP، مع خبرة في بناء الوحدات البرمجية المخصصة، وتكامل الأنظمة، وتحسين العمليات التجارية، وتطوير حلول ERP التي تساعد الشركات على إدارة أعمالها بكفاءة.",
      skills: ["Odoo Development", "Custom Modules", "ERP Implementation", "PostgreSQL", "Python", "XML", "API Integration", "Business Process Automation"]
    },
    { 
      name: "آية علام", role: "Full Stack Web Developer", img: "/images/team/aya.png",
      desc: "متخصصة في تصميم وتطوير مواقع الويب الحديثة وتطبيقات الويب، مع التركيز على الأداء، وتجربة المستخدم، والحلول القابلة للتوسع باستخدام أحدث تقنيات الويب.",
      skills: ["HTML5", "CSS3", "JavaScript", "React.js", "PHP / Laravel", "Node.js", "MySQL", "REST API"]
    },
    { 
      name: "منى الدرملي", role: "Mobile Application Developer", img: "/images/team/mona.png",
      desc: "متخصصة في تطوير تطبيقات الهواتف الذكية لأنظمة Android و iOS، مع الاهتمام بالأداء وتجربة المستخدم وبناء تطبيقات حديثة وسريعة وآمنة.",
      skills: ["Flutter", "Dart", "Android Development", "iOS Development", "Firebase", "REST API", "State Management", "App Publishing"]
    }
  ];

  return (
    <section id="team" style={{ padding: '100px 5%', direction: 'rtl' }}>
      <div style={{ textAlign: 'center', marginBottom: '80px' }}>
        <h2 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px' }}>فريق العمل</h2>
        <p style={{ color: 'var(--text-secondary)', fontSize: '1.2rem', maxWidth: '600px', margin: '0 auto' }}>
          تعرف على الخبراء والمبدعين خلف نجاح KMT
        </p>
      </div>

      <div style={{ maxWidth: '1200px', margin: '0 auto', display: 'flex', flexDirection: 'column', gap: '80px' }}>
        {team.map((member, index) => {
          const isEven = index % 2 === 0;
          return (
            <div 
              key={index} 
              style={{
                display: 'flex', 
                flexDirection: 'row',
                alignItems: 'center',
                gap: '50px',
                flexWrap: 'wrap'
              }}
              className={`team-row ${isEven ? 'row-normal' : 'row-reverse'}`}
            >
              {/* Image Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? 50 : -50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ flex: '1 1 400px', display: 'flex', justifyContent: 'center' }}
              >
                <div style={{
                  position: 'relative',
                  width: '100%',
                  maxWidth: '400px',
                  aspectRatio: '1/1',
                  borderRadius: '20px',
                  padding: '10px',
                  background: 'linear-gradient(45deg, var(--accent-cyan), var(--accent-blue))',
                  boxShadow: '0 20px 50px rgba(6, 182, 212, 0.2)'
                }}>
                  <img src={member.img} alt={member.name} style={{
                    width: '100%', height: '100%', objectFit: 'cover', borderRadius: '15px',
                    filter: 'grayscale(20%) contrast(110%)', transition: 'filter 0.3s'
                  }} 
                  onMouseOver={e => e.currentTarget.style.filter = 'grayscale(0%)'}
                  onMouseOut={e => e.currentTarget.style.filter = 'grayscale(20%) contrast(110%)'}
                  />
                </div>
              </motion.div>

              {/* Text Side */}
              <motion.div 
                initial={{ opacity: 0, x: isEven ? -50 : 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
                style={{ flex: '1 1 500px', textAlign: isEven ? 'right' : 'left' }}
                className="team-text-side"
              >
                <h3 style={{ fontSize: '2.5rem', marginBottom: '10px', color: 'var(--text-primary)' }}>{member.name}</h3>
                <p style={{ color: 'var(--accent-cyan)', fontWeight: '700', fontSize: '1.4rem', marginBottom: '25px' }}>{member.role}</p>
                <p style={{ color: 'var(--text-secondary)', lineHeight: '1.9', marginBottom: '35px', fontSize: '1.15rem' }}>
                  {member.desc}
                </p>
                
                <div style={{ 
                  display: 'flex', flexWrap: 'wrap', gap: '10px', 
                  justifyContent: isEven ? 'flex-start' : 'flex-end',
                  direction: 'rtl'
                }}>
                  {member.skills.map((skill, i) => (
                    <span key={i} style={{
                      background: 'var(--bg-secondary)', border: '1px solid var(--accent-blue)',
                      padding: '8px 15px', borderRadius: '25px', fontSize: '0.95rem', 
                      color: 'var(--text-primary)', fontWeight: '600',
                      boxShadow: '0 5px 15px rgba(0,0,0,0.1)'
                    }}>
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
