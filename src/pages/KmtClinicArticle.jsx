import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  Stethoscope, Users, Smartphone, Shield, Cpu, WifiOff, 
  Network, Sparkles, Clock, Coins, BarChart3, Layers, 
  Zap, Check, Database, Calendar, Phone, Activity
} from 'lucide-react';

export default function KmtClinicArticle() {
  // Scroll to top and set dynamic SEO metadata on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT Clinic | أفضل برنامج إدارة العيادات والمراكز الطبية الذكي";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'برنامج إدارة العيادات الذكي KMT Clinic يجمع بين التكنولوجيا والذكاء وسهولة الإدارة من خلال تطبيق موبايل واحد بواجهات مخصصة للطبيب، السكرتارية، والمريض.');
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
      
      {/* Article Container */}
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
              KMT Clinic | أفضل برنامج إدارة العيادات والمراكز الطبية الذكي
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              إذا كنت تبحث عن برنامج إدارة عيادات حديث، سريع، وسهل الاستخدام، فإن KMT Clinic هو الحل الذي يجمع بين التكنولوجيا والذكاء وسهولة الإدارة في منصة واحدة.
            </p>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-clinic/p1.jpeg" 
            alt="KMT Clinic Hero Banner" 
            caption="منصة KMT Clinic الطبية الذكية لإدارة العيادات والمراكز الطبية" 
          />

          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify' }}
          >
            تم تطوير KMT Clinic ليكون أكثر من مجرد برنامج لإدارة المواعيد أو حفظ بيانات المرضى، فهو منصة متكاملة تساعد الأطباء، والسكرتارية، وأصحاب العيادات على إدارة جميع العمليات اليومية من خلال تطبيق موبايل واحد، مع واجهات مخصصة لكل مستخدم، وتقنيات حديثة تجعل العمل أكثر سرعة ودقة.
          </motion.p>
        </section>

        {/* SECTION: WHY WE NEED CLINIC MANAGEMENT */}
        <section style={{ 
          margin: '80px 0', 
          padding: '40px 30px', 
          borderRadius: '24px', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)' 
        }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لماذا تحتاج إلى برنامج لإدارة العيادات؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
              تعتمد الكثير من العيادات حتى اليوم على الطرق التقليدية في إدارة المواعيد، والملفات الطبية، والفواتير، مما يؤدي إلى ضياع الوقت، وكثرة الأخطاء، وصعوبة الوصول إلى بيانات المرضى.
            </p>
            <p>
              مع زيادة عدد المرضى وتوسع العيادات، يصبح من الضروري الاعتماد على برنامج إدارة عيادات احترافي يساعد على تنظيم العمل وتحسين تجربة المرضى، ويوفر للطبيب الوقت الكافي للتركيز على العلاج بدلاً من الأعمال الإدارية.
            </p>
            <p style={{ fontWeight: '600', color: 'var(--accent-cyan)' }}>
              لهذا جاء KMT Clinic ليقدم تجربة حديثة تعتمد على أحدث التقنيات في تطوير التطبيقات الطبية.
            </p>
          </div>
        </section>

        {/* SECTION: THREE INTERFACES */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>
              تطبيق واحد... ثلاث واجهات مختلفة
            </h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              من أهم المميزات التي تميز KMT Clinic أنه يعتمد على تطبيق واحد فقط، ولكن بعد تسجيل الدخول يحصل كل مستخدم على الواجهة المناسبة له حسب صلاحياته.
            </p>
          </div>

          {/* Cards for interfaces */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Interface 1: Doctor */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '20px', 
                padding: '30px',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <Stethoscope size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>واجهة الطبيب</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                تساعد الطبيب على إدارة جميع الزيارات بسهولة وبخطوات بسيطة:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "الاطلاع على الملف الطبي للمريض.",
                  "كتابة التشخيص الطبي بدقة.",
                  "إصدار الروشتة الإلكترونية فوراً.",
                  "مراجعة الزيارات والسجلات السابقة.",
                  "متابعة نتائج التحاليل والأشعة.",
                  "الاطلاع على جدول المواعيد اليومي."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <Check size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interface 2: Secretary */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-blue)' }}
              style={{ 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '20px', 
                padding: '30px',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)' }}>
                  <Users size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>واجهة السكرتارية</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                توفر جميع الأدوات اللازمة لإدارة العمل وحركة المرضى اليومية:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "تسجيل بيانات المرضى الجدد.",
                  "حجز وتعديل المواعيد.",
                  "إإدارة طابور الانتظار بمرونة.",
                  "إصدار الفواتير وطباعتها.",
                  "تحصيل وإدارة المدفوعات والماليات.",
                  "متابعة حضور وتأخر المرضى."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <Check size={16} color="var(--accent-blue)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Interface 3: Patient */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ 
                background: 'var(--bg-secondary)', 
                border: '1px solid var(--border-color)', 
                borderRadius: '20px', 
                padding: '30px',
                transition: 'all 0.3s'
              }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <Smartphone size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>واجهة المريض</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                يمنح المريض تجربة رقمية متكاملة تسهل تواصله مع العيادة:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[
                  "حجز المواعيد عن بعد بسهولة.",
                  "متابعة حالة الحجز والانتظار لحظة بلحظة.",
                  "استعراض وتحميل الروشتات الإلكترونية.",
                  "مراجعة التاريخ والملف الطبي الخاص به.",
                  "استقبل الإشعارات الفورية والتذكيرات بالموعد."
                ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <Check size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p style={{ fontSize: '1.1rem', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)', marginBottom: '30px' }}>
            تم تصميم جميع الواجهات بأسلوب بسيط وحديث، بحيث يستطيع أي مستخدم التعامل مع التطبيق بسهولة منذ اليوم الأول.
          </p>

          <ArticleImage 
            src="/images/kmt-clinic/p2.png" 
            alt="KMT Clinic Responsive Interfaces" 
            caption="واجهات مخصصة وذكية للطبيب، السكرتارية، والمريض عبر تطبيق واحد" 
          />
        </section>

        {/* SECTION: SMART DASHBOARD */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: '700' }}>
              لوحة تحكم ذكية تساعدك على اتخاذ القرار
            </h2>
            <p style={{ fontSize: '1.15rem' }}>
              لا تقتصر لوحة التحكم في KMT Clinic على عرض الأرقام فقط، بل تقدم تحليلات ذكية تساعد أصحاب العيادات والمراكز الطبية على متابعة الأداء بشكل لحظي ودقيق.
            </p>
          </div>

          {/* Metric Grid Visual Representation */}
          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(220px, 1fr))', 
            gap: '20px',
            marginBottom: '40px'
          }}>
            {[
              { icon: <Users size={22} />, title: "عدد المرضى اليوم", desc: "متابعة أعداد الزوار بشكل دقيق" },
              { icon: <Calendar size={22} />, title: "عدد المواعيد", desc: "جدول المواعيد المحجوزة والملغاة" },
              { icon: <Clock size={22} />, title: "متوسط وقت الانتظار", desc: "مؤشر لسرعة وكفاءة الخدمة" },
              { icon: <Coins size={22} />, title: "الإيرادات اليومية", desc: "تقارير مالية فورية للمقبوضات" },
              { icon: <Stethoscope size={22} />, title: "أداء الأطباء", desc: "تحليل وقت الكشوفات ومعدل الزيارات" },
              { icon: <Zap size={22} />, title: "أكثر الخدمات طلباً", desc: "معرفة الخدمات أو الكشوفات الأكثر رواجاً" },
              { icon: <Layers size={22} />, title: "مقارنة أداء الفروع المختلفة", desc: "مقارنة لحظية لنمو فروع مركزك" }
            ].map((metric, index) => (
              <div key={index} style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '20px',
                display: 'flex',
                flexDirection: 'column',
                gap: '10px'
              }}>
                <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                  {metric.icon}
                  <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.05rem' }}>{metric.title}</span>
                </div>
                <p style={{ fontSize: '0.9rem', margin: 0 }}>{metric.desc}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
            تعتمد لوحة التحكم على رسوم بيانية تفاعلية ومؤشرات واضحة تساعد الإدارة على اتخاذ قرارات سريعة مبنية على بيانات دقيقة.
          </p>

          <ArticleImage 
            src="/images/kmt-clinic/p3.png" 
            alt="KMT Clinic Smart Dashboard" 
            caption="لوحة تحكم إحصائية وذكية لمراقبة أداء فروع العيادة والماليات لحظياً" 
          />
        </section>

        {/* SECTION: APPOINTMENTS & MEDICAL RECORDS */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            إدارة المواعيد والملفات الطبية بسهولة
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
            تم تصميم KMT Clinic ليغطي جميع مراحل رحلة المريض داخل العيادة. ابتداءً من تسجيل بياناته لأول مرة، مروراً بحجز الموعد وإدارة الطابور، وحتى انتهاء الكشف وإصدار الروشتة الإلكترونية وحفظ الزيارة داخل الملف الطبي.
          </p>

          {/* Workflow Checklist Card */}
          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '35px 30px',
            marginBottom: '40px'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <Activity size={24} color="var(--accent-cyan)" />
              <span>يشمل النظام:</span>
            </h3>
            
            <div style={{ 
              display: 'grid', 
              gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', 
              gap: '20px'
            }}>
              {[
                { title: "إدارة المرضى", desc: "سجل كامل وتاريخي لكل مريض" },
                { title: "حجز المواعيد", desc: "جدولة ذكية تمنع التداخل أو التأخير" },
                { title: "تنظيم الطوابير", desc: "شاشات لعرض الدور الفعلي للمرضى" },
                { title: "الملف الطبي الإلكتروني", desc: "تخزين آمن للتقارير والأشعة والتشخيص" },
                { title: "الروشتة الإلكترونية", desc: "قوالب روشتات جاهزة وسريعة للطباعة والإرسال" },
                { title: "سجل الزيارات", desc: "مراجعة سهلة لزيارات المريض السابقة" },
                { title: "الفواتير والمدفوعات", desc: "نظام محاسبي مبسط للمستحقات" }
              ].map((op, index) => (
                <div key={index} style={{ display: 'flex', gap: '12px', alignItems: 'flex-start' }}>
                  <div style={{
                    width: '24px', height: '24px', borderRadius: '50%', 
                    background: 'rgba(6, 182, 212, 0.15)', color: 'var(--accent-cyan)',
                    display: 'flex', alignItems: 'center', justifyContent: 'center', 
                    fontSize: '12px', fontWeight: 'bold', flexShrink: 0, marginTop: '2px'
                  }}>
                    {index + 1}
                  </div>
                  <div>
                    <h4 style={{ color: 'var(--text-primary)', fontSize: '1.05rem', margin: '0 0 4px' }}>{op.title}</h4>
                    <p style={{ fontSize: '0.9rem', margin: 0 }}>{op.desc}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          <p style={{ fontSize: '1.15rem', fontWeight: '600', color: 'var(--text-primary)', textAlign: 'center', marginBottom: '30px' }}>
            كل هذه العمليات تتم داخل تطبيق واحد دون الحاجة إلى استخدام أكثر من نظام.
          </p>

          <ArticleImage 
            src="/images/kmt-clinic/p4.png" 
            alt="KMT Clinic Electronic Health Records" 
            caption="إدارة متكاملة للملف الطبي، جدول الحجوزات، وكتابة الروشتات الإلكترونية" 
          />
        </section>

        {/* SECTION: SMART FEATURES (OFFLINE, BRANCHES, AI) */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>
              تقنيات حديثة تجعل العيادة أكثر ذكاءً
            </h2>
            <p style={{ fontSize: '1.15rem', maxWidth: '800px', margin: '0 auto' }}>
              تم تطوير KMT Clinic باستخدام أحدث التقنيات ليكون جاهزاً لمتطلبات المستقبل.
            </p>
          </div>

          {/* Glowing Feature Blocks */}
          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
            {/* Block 1: Offline Mode */}
            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '20px', 
              padding: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                padding: '15px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.08)', 
                color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '60px', width: '60px', flexShrink: 0
              }}>
                <WifiOff size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>العمل بدون إنترنت</h3>
                <p style={{ margin: 0, fontSize: '1.05rem' }}>
                  يمكن للعيادة الاستمرار في العمل حتى في حالة انقطاع الإنترنت، حيث يتم حفظ العمليات الأساسية داخل الهاتف ثم مزامنتها تلقائياً عند عودة الاتصال.
                </p>
              </div>
            </div>

            {/* Block 2: Multi Branch */}
            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '20px', 
              padding: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                padding: '15px', borderRadius: '16px', background: 'rgba(37, 99, 235, 0.08)', 
                color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '60px', width: '60px', flexShrink: 0
              }}>
                <Network size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>دعم تعدد الفروع</h3>
                <p style={{ margin: 0, fontSize: '1.05rem' }}>
                  إذا كنت تمتلك أكثر من فرع، يمكنك إدارة جميع الفروع من خلال منصة واحدة، مع تقارير مستقلة لكل فرع وتقارير مجمعة على مستوى المؤسسة بالكامل.
                </p>
              </div>
            </div>

            {/* Block 3: AI Assistant */}
            <div style={{ 
              display: 'flex', 
              gap: '25px', 
              background: 'var(--bg-secondary)', 
              border: '1px solid var(--border-color)', 
              borderRadius: '20px', 
              padding: '30px',
              flexWrap: 'wrap'
            }}>
              <div style={{ 
                padding: '15px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.08)', 
                color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center',
                height: '60px', width: '60px', flexShrink: 0
              }}>
                <Sparkles size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>الذكاء الاصطناعي</h3>
                <p style={{ margin: 0, fontSize: '1.05rem' }}>
                  يتضمن النظام مساعداً ذكياً يساعد الطبيب في تلخيص التاريخ المرضي، وتنظيم البيانات الطبية، وتقديم تنبيهات مهمة أثناء الكشف، مع بقاء القرار الطبي النهائي للطبيب.
                </p>
              </div>
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-clinic/p5.png" 
            alt="KMT Clinic Advanced Tech Features" 
            caption="ميزات متقدمة: العمل بدون اتصال، إدارة الفروع، ومساعد الذكاء الاصطناعي" 
          />
        </section>

        {/* SECTION: WHY CHOOSE KMT CLINIC */}
        <section style={{ 
          margin: '80px 0', 
          padding: '50px 30px', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)',
          borderRadius: '24px'
        }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '25px', fontWeight: '700', textAlign: 'center' }}>
            لماذا تختار KMT Clinic؟
          </h2>
          <p style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '35px' }}>
            لأننا لم نبنِ مجرد برنامج لإدارة العيادات، بل صممنا منصة حديثة تجمع بين:
          </p>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', 
            gap: '20px',
            marginBottom: '35px'
          }}>
            {[
              "سهولة الاستخدام", "السرعة", "الأمان",
              "الأداء العالي", "المرونة", "قابلية التوسع",
              "دعم تعدد الفروع", "العمل بدون إنترنت", "الذكاء الاصطناعي",
              "التقارير الذكية", "واجهات استخدام احترافية", "تجربة مستخدم حديثة"
            ].map((adv, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <div style={{
                  width: '24px', height: '24px', borderRadius: '50%', background: 'rgba(6, 182, 212, 0.1)',
                  display: 'flex', alignItems: 'center', justifyContent: 'center', color: 'var(--accent-cyan)', flexShrink: 0
                }}>
                  <Check size={14} strokeWidth={3} />
                </div>
                <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: '600' }}>{adv}</span>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1.1rem', textAlign: 'center', fontStyle: 'italic', borderTop: '1px solid rgba(6, 182, 212, 0.1)', paddingTop: '20px', margin: 0 }}>
            كل جزء داخل النظام تم تصميمه ليجعل إدارة العيادة أكثر سهولة واحترافية.
          </p>
        </section>

        {/* SECTION: TECH STACK */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            التكنولوجيا المستخدمة
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '35px' }}>
            يعتمد KMT Clinic على أحدث تقنيات تطوير البرمجيات لضمان الأداء والاستقرار، ومنها:
          </p>

          <div style={{ 
            display: 'flex', 
            gap: '20px', 
            flexWrap: 'wrap',
            justifyContent: 'center',
            marginBottom: '35px'
          }}>
            {[
              { tech: "Flutter", role: "لتطوير تطبيقات الهاتف" },
              { tech: "Laravel", role: "للخادم الخلفي" },
              { tech: "PostgreSQL", role: "لإدارة قواعد البيانات" },
              { tech: "REST API", role: "للتكامل بين جميع مكونات النظام" },
              { tech: "Firebase", role: "للإشعارات الفورية" }
            ].map((techObj, index) => (
              <div key={index} style={{
                background: 'var(--bg-secondary)',
                border: '1px solid var(--border-color)',
                borderRadius: '16px',
                padding: '20px 25px',
                textAlign: 'center',
                flex: '1 1 200px',
                minWidth: '200px'
              }}>
                <h4 className="gradient-text" style={{ fontSize: '1.4rem', fontWeight: '800', marginBottom: '8px' }}>
                  {techObj.tech}
                </h4>
                <p style={{ fontSize: '0.9rem', margin: 0, color: 'var(--text-secondary)' }}>{techObj.role}</p>
              </div>
            ))}
          </div>

          <p style={{ fontSize: '1.15rem', textAlign: 'center', fontWeight: '600', color: 'var(--text-primary)' }}>
            تم اختيار هذه التقنيات لضمان السرعة، والأمان، وسهولة التوسع مستقبلاً.
          </p>
        </section>

        {/* SECTION: FUTURE OF CLINICS */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            مستقبل إدارة العيادات يبدأ من هنا
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '25px', textAlign: 'justify' }}>
            يمثل KMT Clinic بداية جيل جديد من أنظمة إدارة العيادات، حيث يجمع بين التكنولوجيا الحديثة وتجربة المستخدم المتميزة، ليمنح الأطباء وأصحاب العيادات الأدوات التي يحتاجون إليها لإدارة أعمالهم بكفاءة أكبر.
          </p>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px', textAlign: 'justify' }}>
            سواء كنت تمتلك عيادة صغيرة، أو مركزاً طبياً، أو سلسلة من الفروع، فإن KMT Clinic يمنحك منصة متكاملة تساعدك على تنظيم العمل، وتحسين تجربة المرضى، وزيادة كفاءة فريقك، مع رؤية واضحة للتطوير المستمر.
          </p>

          <ArticleImage 
            src="/images/kmt-clinic/p6.jpeg" 
            alt="KMT Clinic Closing Banner" 
            caption="بوابتك لتطوير وتحسين كفاءة العمل الطبي في عيادتك أو مركزك الطبي" 
          />
        </section>

        {/* BOTTOM CTA: START JOURNEY */}
        <section style={{ 
          textAlign: 'center', 
          padding: '60px 40px', 
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1) 0%, rgba(37, 99, 235, 0.1) 100%)',
          borderRadius: '30px', 
          border: '1px solid var(--border-color)', 
          marginTop: '60px',
          boxShadow: '0 20px 50px rgba(0,0,0,0.1)'
        }}>
          <h2 className="gradient-text" style={{ fontSize: '2.5rem', marginBottom: '20px', fontWeight: '800' }}>
            ابدأ رحلتك مع KMT Clinic
          </h2>
          <p style={{ 
            fontSize: '1.25rem', 
            color: 'var(--text-primary)', 
            maxWidth: '750px', 
            margin: '0 auto 35px',
            lineHeight: '1.6'
          }}>
            إذا كنت تبحث عن أفضل برنامج لإدارة العيادات والمراكز الطبية يجمع بين سهولة الاستخدام، والتقنيات الحديثة، والأداء الاحترافي، فإن KMT Clinic هو الخيار المناسب.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a 
              href="tel:01100665674" 
              className="btn-primary" 
              style={{ 
                display: 'inline-flex', 
                alignItems: 'center', 
                gap: '10px', 
                padding: '14px 35px',
                fontSize: '1.1rem'
              }}
            >
              <Phone size={18} />
              <span>تواصل مع فريق KMT: 01100665674</span>
            </a>
            
            <a 
              href="https://wa.me/201100665674" 
              target="_blank" 
              rel="noopener noreferrer"
              style={{
                display: 'inline-flex',
                alignItems: 'center',
                gap: '10px',
                padding: '14px 35px',
                borderRadius: '30px',
                background: '#25D366',
                color: 'white',
                fontWeight: '700',
                fontSize: '1.1rem',
                boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)',
                transition: 'transform 0.3s'
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'}
              onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}
            >
              <span>تواصل عبر الواتساب مباشرة</span>
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
