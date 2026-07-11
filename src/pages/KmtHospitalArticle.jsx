import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Phone, Activity, HeartPulse, Building2,
  ShieldCheck, LayoutDashboard, BrainCircuit, Users
} from 'lucide-react';

export default function KmtHospitalArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT Hospital | أفضل نظام إدارة مستشفيات ذكي للتحول الرقمي الطبي المتكامل";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'برنامج إدارة مستشفيات حديث ومستقر، قادر على أتمتة دورتك الطبية والإدارية والمالية المعقدة دون أخطاء.');
  }, []);

  const ArticleImage = ({ src, alt, caption }) => (
    <motion.div 
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      style={{ margin: '40px 0', width: '100%', display: 'flex', flexDirection: 'column', alignItems: 'center' }}
    >
      <div style={{
        position: 'relative',
        borderRadius: '24px',
        overflow: 'hidden',
        boxShadow: '0 15px 45px rgba(6, 182, 212, 0.15)',
        border: '1px solid var(--border-color)',
        width: '100%',
        maxWidth: '850px',
        background: 'var(--bg-secondary)',
      }}>
        <motion.img 
          src={src} 
          alt={alt} 
          whileHover={{ scale: 1.02 }}
          transition={{ duration: 0.3 }}
          style={{
            width: '100%',
            height: 'auto',
            maxHeight: '480px',
            objectFit: 'contain',
            display: 'block'
          }} 
        />
      </div>
      {caption && (
        <span style={{ 
          marginTop: '15px', 
          color: 'var(--text-secondary)', 
          fontSize: '0.9rem',
          fontStyle: 'italic',
          display: 'flex',
          alignItems: 'center',
          gap: '8px'
        }}>
          <Activity size={14} color="var(--accent-cyan)" /> {caption}
        </span>
      )}
    </motion.div>
  );

  return (
    <div style={{ 
      maxWidth: '1100px', 
      margin: '120px auto 100px', 
      padding: '0 20px', 
      direction: 'rtl', 
      lineHeight: '1.9', 
      color: 'var(--text-secondary)' 
    }}>
      
      <article>
        
        {/* HERO SECTION */}
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <h1 className="gradient-text" style={{ 
              fontSize: 'clamp(2rem, 5vw, 3.5rem)', 
              marginBottom: '20px', 
              lineHeight: '1.3',
              fontWeight: '800'
            }}>
              KMT Hospital | أفضل نظام إدارة مستشفيات ذكي للتحول الرقمي الطبي المتكامل
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              إذا كنت تبحث عن برنامج إدارة مستشفيات حديث، مستقر، وقادر على أتمتة دورتك الطبية والإدارية والمالية المعقدة دون أخطاء، فإن KMT Hospital هو النظام المتكامل الذي يجمع بين التكنولوجيا الذكية والتحكم الشامل.
            </p>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-hospital/1.jpeg" 
            alt="KMT Hospital Hero Banner" 
            caption="منصة KMT Hospital الرقمية المتكاملة لإدارة المستشفيات والمراكز الطبية الكبرى الذكية." 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <p>
            تم تطوير KMT Hospital ليكون العقل المدبر لكافة العمليات اليومية داخل المستشفيات؛ فهو يربط كافة الأقسام (العيادات الخارجية، الطوارئ، العمليات، الأقسام الداخلية، الرعاية المركزة، المختبرات، الأشعة، والمخازن) بسيرفر موحد وقاعدة بيانات مشفرة. يساعد النظام الإدارات الطبية على تحسين كفاءة الرعاية الصحية، وتقليل وقت انتظار المرضى، والرقابة المالية الصارمة من خلال لوحة تحكم ذكية وتطبيقات موبايل مخصصة.
            </p>
          </motion.div>
        </section>

        {/* SECTION 1 */}
        <section style={{ 
          margin: '80px 0', 
          padding: '40px 30px', 
          borderRadius: '24px', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)' 
        }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لماذا تحتاج إلى نظام احترافي لإدارة مستشفاك؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
            تعد إدارة المستشفيات والمؤسسات العلاجية الكبرى واحدة من أعقد المهام الإدارية والمالية على الإطلاق؛ حيث تتداخل حسابات الأطباء، مع فواتير المرضى، وحسابات شركات التأمين والنقابات، بالإضافة إلى متابعة حالات الأقسام الداخلية وغرف العمليات لحظة بلحظة.
            </p>
            <p>
            تعتمد الكثير من المستشفيات حتى الآن على المعاملات الورقية أو أنظمة برمجية منفصلة لا تتواصل مع بعضها البعض، مما يتسبب في بطء إنقاذ الحالات، وضياع السجلات الطبية للمرضى، وحدوث عجز مالي بسبب أخطاء حسابات غرف الإقامة والعمليات، فضلاً عن غياب الرقابة الفعالة على مخازن الأدوية والمستلزمات الطبية الحرجة.
            </p>
            <p style={{ fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
            مع زيادة أعداد المراجعين وتصاعد المتطلبات الطبية، يصبح الاعتماد على برنامج إدارة مستشفيات ومراكز طبية احترافي ضرورة قصوى؛ فهو يضمن الحفاظ على حياة المرضى بالسرعة والدقة، ويمنع الهدر المالي، ويرفع كفاءة الطاقم الطبي والإداري بنسبة 100%.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
            تطبيق واحد... واجهات متخصصة وصلاحيات ذكية للجميع
          </h2>
          <p style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '40px' }}>
          يعتمد KMT Hospital على نظام صلاحيات صارم ومتعدد المستويات، حيث يوفر واجهات مستخدم مخصصة لكل فرد داخل الصرح الطبي لضمان سلاسة التدفق اليومي للعمل:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HeartPulse size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الطبيب والاستشاري</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>تاريخ طبي متكامل:</strong> استعراض الأمراض السابقة، الحساسية، والروشتات القديمة للمريض بضغطة واحدة.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>الروشتة الإلكترونية:</strong> كتابة الأدوية والفحوصات إلكترونياً لترسل آلياً إلى صيدلية ومختبر المستشفى.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>متابعة المحجوزين:</strong> واجهة لمتابعة العلامات الحيوية للمرضى المقيمين.</span></li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الاستقبال والملفات</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>حجز العيادات والطوارئ:</strong> تسجيل الحالات وتوجيهها للعيادات الخارجية أو غرف الطوارئ بسرعة فائقة.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>إدارة الإقامة الداخلية:</strong> تسكين المرضى في الغرف (درجة أولى، جناح، رعاية) وحساب التكلفة تلقائياً.</span></li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <LayoutDashboard size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الحسابات والتعاقدات</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>الفاتورة الموحدة للمريض:</strong> تجميع كافة مصاريف المريض في فاتورة واحدة نهائية.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>مطالبات التأمين الصحي:</strong> معالجة حسابات شركات التأمين واحتساب نسب التحمل والخصم تلقائياً وبسرعة.</span></li>
              </ul>
            </motion.div>

          </div>

          <ArticleImage 
            src="/images/kmt-hospital/2.jpeg" 
            alt="KMT Hospital Interfaces" 
            caption="واجهات مخصصة ومترابطة للأطباء، الاستقبال، الحسابات، وصيدلية المستشفى عبر نظام KMT Hospital الموحد." 
          />
        </section>

        {/* SECTION 3 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          لوحة تحكم ذكية تساعدك على اتخاذ القرار
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
          تمنح لوحة التحكم التنفيذية في KMT Hospital مجلس إدارة المستشفيات والمديرين رؤية شاملة وتفصيلية بنسبة 360 درجة لمراقبة المستشفى في الوقت الفعلي:
          </p>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> إشغال الغرف والأسرّة: رسم بياني يوضح نسبة إشغال الأسرة في الرعاية والأقسام الداخلية فورياً.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> التدفق المالي اللحظي: تقارير فورية للإيرادات والمصروفات اليومية.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> إحصائيات العيادات الخارجية: تتبع العيادات الأكثر إقبالاً وقياس إنتاجية الأطباء.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> معدلات الاستجابة للطوارئ: مؤشرات ذكية لقياس سرعة التعامل مع حالات الطوارئ والعمليات.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-hospital/3.jpeg" 
            alt="KMT Hospital Dashboard" 
            caption="لوحة تحكم إحصائية متقدمة لمراقبة نسب إشغال الأسرّة، الماليات، وأداء كافة الأقسام الطبية لحظياً." 
          />
        </section>

        {/* SECTION 4 */}
        <section style={{ margin: '80px 0', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          أتمتة شاملة لجميع الأقسام والمخازن
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
          يتجاوز KMT Hospital كونه مجرد برنامج حجز، ليصبح بيئة تشغيل ذكية تدير المخزون والعمليات اللوجستية الحرجة:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>نظام إدارة المخازن المتعددة للمستشفيات</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>مخزن رئيسي ومخازن فرعية: تتبع المخازن بالكامل.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>الخصم التلقائي من العمليات: عند استخدام أي مستلزم طبي يتم خصمه فوراً من مخزن القسم لتجنب العجز اللوجستي.</span></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>إدارة غرف العمليات والتدخل الجراحي</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>جدولة العمليات: تنظيم مواعيد غرف العمليات وحجز طاقم التخدير والتمريض.</span></li>
              </ul>
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-hospital/4.jpeg" 
            alt="KMT Hospital Operations Management" 
            caption="أتمتة دقيقة لجدولة غرف العمليات، حركة التمريض، والرقابة الذكية على مخازن المستلزمات الطبية والأدوية." 
          />
        </section>

        {/* SECTION 5 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          تقنيات حديثة لأعلى معايير الأمان الطبي
          </h2>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><BrainCircuit color="var(--accent-cyan)" /> الذكاء الاصطناعي لحماية البيانات: تشفير تام لكافة البيانات الطبية الحساسة وفقاً لأعلى المعايير العالمية.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><ShieldCheck color="var(--accent-cyan)" /> دعم تطبيقات الموبايل للأطباء والمرضى، ومساعد ذكي للتنبيه بالمواعيد الدورية.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-hospital/5.jpeg" 
            alt="KMT Hospital Advanced Tech" 
            caption="ميزات المستقبل: تطبيقات موبايل للأطباء، ربط الفحوصات الطبية، والذكاء الاصطناعي للتنبيه المبكر." 
          />
        </section>

        {/* FOOTER CALL TO ACTION */}
        <section style={{ 
          margin: '80px 0 40px', 
          padding: '50px', 
          borderRadius: '30px', 
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(11, 18, 32, 0.8) 100%)', 
          border: '1px solid var(--accent-cyan)',
          textAlign: 'center',
          position: 'relative',
          overflow: 'hidden'
        }}>
          <div style={{ position: 'relative', zIndex: 2 }}>
            <h2 style={{ fontSize: '2.5rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: 'bold' }}>
            لماذا تختار KMT Hospital لإدارة مؤسستك الطبية؟
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            لأن النظام صُمم ليتحمل بيئات العمل الطبية الشاقة والتي لا تتوقف على مدار الـ 24 ساعة.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px', fontSize: '1.1rem' }}>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>الاستقرار والأداء العالي</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>التكامل التام</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>التوسع اللانهائي</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>الالتزام بالمعايير العالمية</li>
            </ul>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '20px' }}>
            ابدأ رحلة التحول الرقمي الشامل مع KMT Hospital
            </h3>
            
            <div style={{ display: 'flex', justifyContent: 'center', gap: '20px', flexWrap: 'wrap', marginTop: '30px' }}>
              <a href="tel:01100665674" style={{ textDecoration: 'none' }}>
                <button className="btn-primary" style={{ display: 'flex', alignItems: 'center', gap: '10px', padding: '15px 30px', fontSize: '1.1rem' }}>
                  <Phone size={20} />
                  <span>للتواصل والمبيعات: 01100665674</span>
                </button>
              </a>
              <a href="https://wa.me/201100665674" target="_blank" rel="noreferrer" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  background: '#25D366', color: 'white', border: 'none', borderRadius: '25px', 
                  padding: '15px 30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(37, 211, 102, 0.3)'
                }}>
                  <Phone size={20} />
                  <span>احجز Demo عبر الواتساب</span>
                </button>
              </a>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}
