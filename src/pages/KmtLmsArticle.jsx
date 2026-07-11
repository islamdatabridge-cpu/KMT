import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Phone, Activity, BookOpen, GraduationCap, MonitorPlay, 
  ShieldCheck, LayoutDashboard, BrainCircuit, ShieldAlert
} from 'lucide-react';

export default function KmtLmsArticle() {
  // Scroll to top and set dynamic SEO metadata on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT LMS | أفضل نظام إدارة التعلم والمنصات التعليمية الذكي";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'إذا كنت تبحث عن نظام إدارة تعلم حديث، سريع، وسهل الاستخدام، فإن KMT LMS هو الحل الذي يجمع بين التكنولوجيا والذكاء وسهولة الإدارة في منصة واحدة.');
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
              KMT LMS | أفضل نظام إدارة التعلم والمنصات التعليمية الذكي
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              إذا كنت تبحث عن نظام إدارة تعلم حديث، سريع، وسهل الاستخدام، فإن KMT LMS هو الحل الذي يجمع بين التكنولوجيا والذكاء وسهولة الإدارة في منصة واحدة.
            </p>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-lms/1.jpeg" 
            alt="KMT LMS Hero Banner" 
            caption="منصة KMT LMS التعليمية الذكية لإدارة المنصات والمؤسسات التعليمية" 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <p>تم تطوير KMT LMS ليكون أكثر من مجرد برنامج لرفع الفيديوهات أو حفظ بيانات الطلاب، فهو منصة متكاملة تساعد المحاضرين، المعلمين، والمؤسسات التعليمية على إدارة جميع العمليات اليومية من خلال تطبيق موبايل ولوحة تحكم موحدة، مع واجهات مخصصة لكل مستخدم، وتقنيات حديثة تجعل التعليم والتعلم الرقمي أكثر سرعة ودقة وسلاسة.</p>
          </motion.div>
        </section>

        {/* WHY CHOOSE */}
        <section style={{ 
          margin: '80px 0', 
          padding: '40px 30px', 
          borderRadius: '24px', 
          background: 'var(--bg-secondary)', 
          border: '1px solid var(--border-color)' 
        }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لماذا تحتاج إلى نظام لإدارة التعلم (LMS)؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
              تعتمد الكثير من المنصات والمراكز التعليمية حتى اليوم على الطرق التقليدية أو مجموعات التواصل غير المنظمة لتوصيل المحتوى، مما يؤدي إلى تسريب المواد التعليمية، ضياع الوقت، كثرة الأخطاء الإدارية، وصعوبة تقييم مستوى الطلاب بشكل دقيق ومستمر.
            </p>
            <p>
              مع زيادة عدد الطلاب وتوسع المحتوى الرقمي، يصبح من الضروري الاعتماد على نظام إدارة تعلم احترافي يساعد على تنظيم العملية التعليمية وتحسين تجربة الطالب، ويوفر للمحاضر الوقت الكافي للتركيز على جودة الشرح والمحتوى بدلاً من الانهماك في الأمور الإدارية والتقنية المعقدة.
            </p>
            <p style={{ fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
              لهذا جاء KMT LMS ليقدم تجربة حديثة تعتمد على أحدث التقنيات في تطوير التطبيقات والمنصات التعليمية.
            </p>
          </div>
        </section>

        {/* MAIN FEATURES GRID */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>
              تطبيق واحد... واجهات مختلفة وصلاحيات ذكية
            </h2>
            <p style={{ fontSize: '1.1rem', maxWidth: '700px', margin: '0 auto' }}>
              من أهم المميزات التي تميز KMT LMS أنه يعتمد على نظام مرن ومتكامل؛ بعد تسجيل الدخول يحصل كل مستخدم على الواجهة المناسبة له حسب صلاحياته ودوره في المنظومة التعليمية.
            </p>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Teacher */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <BookOpen size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>👨‍🏫 واجهة المحاضر / المعلم</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                تساعد المحاضر على إدارة المحتوى التعليمي والطلاب بسهولة وبخطوات بسيطة:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "رفع وتنظيم الدورات التدريبية والمحاضرات (فيديو، صوت، ملفات PDF).", "إنشاء وتعديل الاختبارات الإلكترونية والواجبات وتحديد درجاتها.", "متابعة نسب تقدم الطلاب وإحصائيات مشاهدة الدروس أولاً بأول.", "التفاعل المباشر مع أسئلة واستفسارات الطلاب داخل المنصة.", "إصدار الشهادات الإلكترونية للطلاب المتفوقين مجانًا أو بعد اجتياز الاختبار." ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Admin */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-blue)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)' }}>
                  <LayoutDashboard size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>👩‍💻 واجهة الإدارة / السكرتارية</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                توفر جميع الأدوات اللازمة لإدارة العمل وحركة الاشتراكات اليومية:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "تسجيل الطلاب الجدد وتفعيل الأكواد أو باقات الاشتراك.", "إدارة الأمور المالية والمبيعات، وتتبع فواتير شراء الدورات.", "تنظيم جداول البث المباشر والمحاضرات التفاعلية.", "متابعة حضور وتفاعل الطلاب وتقييم التزامهم بالمنهج.", "مراجعة طلبات الدعم الفني والتقني من المستخدمين وحلها." ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Student */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <GraduationCap size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>🎓 واجهة الطالب</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                تمنح الطالب تجربة رقمية متكاملة تسهل تصفحه ومذاكرته للمحتوى:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "تصفح ومشاهدة المحاضرات بجودة عالية وبدون تقطيع.", "حل الاختبارات الإلكترونية وتلقي النتيجة والتقييم فورًا.", "تحميل الملخصات، الواجبات، والمرفقات التعليمية بضغطة واحدة.", "استعراض مساره التعليمي ونسبة إنجازه في كل كورس.", "استقبال الإشعارات الفورية والتذكيرات بمواعيد الاختبارات أو الحصص المباشرة." ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>
            تم تصميم جميع الواجهات بأسلوب بسيط وحديث، بحيث يستطيع أي مستخدم التعامل مع المنصة والتطبيق بسهولة منذ اليوم الأول.
          </p>

          <ArticleImage 
            src="/images/kmt-lms/2.jpeg" 
            alt="KMT LMS Interfaces" 
            caption="🖥️ واجهات مخصصة وذكية للمحاضر، الإدارة، والطالب عبر منصة واحدة" 
          />
        </section>

        {/* DASHBOARD SECTION */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لوحة تحكم ذكية تساعدك على اتخاذ القرار
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
            لا تقتصر لوحة التحكم في KMT LMS على عرض الأرقام الفيدرالية فقط، بل تقدم تحليلات ذكية تساعد أصحاب المنصات والمؤسسات التعليمية على متابعة الأداء بشكل لحظي ودقيق:
          </p>

          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '35px 30px',
            marginBottom: '40px'
          }}>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                "عدد الطلاب المشتركين: متابعة أعداد المسجلين والنشطين بدقة.", 
                "الكورسات الأكثر مبيعًا: معرفة الدورات والخدمات الأكثر رواجًا وطلبًا.", 
                "معدل إكمال المناهج: مؤشر لقياس مدى التزام الطلاب وجودة تفاعلهم مع الشرح.", 
                "الإيرادات اليومية: تقارير مالية فورية للمقبوضات وحجم المبيعات لكل كورس.",
                "تفاعل الطلاب: تحليل شامل لنتائج الاختبارات ومتوسط درجات المجموعات.", 
                "إحصائيات البث المباشر: مقارنة لحظية لنسب حضور المحاضرات التفاعلية واللايف."
              ].map((op, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'flex-start' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', flexShrink: 0, marginTop: '10px' }}></div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{op}</span>
                </div>
              ))}
            </div>
            <p style={{ marginTop: '20px', fontSize: '1.05rem', fontWeight: 'bold' }}>
              تعتمد لوحة التحكم على رسوم بيانية تفاعلية ومؤشرات واضحة تساعد الإدارة على اتخاذ قرارات سريعة مبنية على بيانات دقيقة.
            </p>
          </div>

          <ArticleImage 
            src="/images/kmt-lms/3.jpeg" 
            alt="KMT LMS Dashboard" 
            caption="📊 لوحة تحكم إحصائية وذكية لمراقبة أداء المنصة والماليات لحظياً" 
          />
        </section>

        {/* CONTENT MANAGEMENT */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            إدارة المحتوى والامتحانات بسهولة
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
            تم تصميم KMT LMS ليغطي جميع مراحل رحلة الطالب داخل المنصة. ابتداءً من تفعيل حسابه لأول مرة، مروراً بمشاهدة الدروس وإجراء الاختبارات، وحتى الحصول على شهادة التخرج والنجاح.
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <MonitorPlay size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>تنظيم المحتوى</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>جدولة ذكية لعرض المحاضرات (مثل فتح الدروس تدريجيًا بناءً على الوقت أو اجتياز الامتحان السابق).</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>الاختبارات الذكية</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>بنك أسئلة متطور يدعم مختلف أنواع الأسئلة (اختياري، مقالي، صح وخطأ) مع تصحيح تلقائي.</p>
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <ShieldCheck size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>أمان وحماية المحتوى</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>تقنيات متقدمة لمنع تصوير الشاشة أو تحميل الفيديوهات لضمان عدم تسريب جهدك وحقوقك.</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Activity size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>الفواتير والاشتراكات والشهادات</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>نظام محاسبي مبسط لإدارة بوابات الدفع الإلكتروني والمحافظ الذكية، بالإضافة إلى قوالب شهادات تصدر تلقائيًا.</p>
            </div>
          </div>

          <p style={{ textAlign: 'center', fontSize: '1.1rem', fontWeight: 'bold' }}>
            كل هذه العمليات تتم داخل بيئة تعليمية واحدة دون الحاجة إلى استخدام أكثر من نظام.
          </p>

          <ArticleImage 
            src="/images/kmt-lms/4.jpeg" 
            alt="KMT LMS Content Management" 
            caption="📚 إدارة متكاملة للمحتوى الرقمي، بنك الأسئلة، وحماية الفيديوهات من السرقة" 
          />
        </section>

        {/* ADVANCED TECH */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            تقنيات حديثة تجعل التعليم أكثر ذكاءً
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
            {/* Security */}
            <div style={{ display: 'flex', gap: '25px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', flexWrap: 'wrap' }}>
              <div style={{ padding: '15px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.08)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', width: '60px', flexShrink: 0 }}>
                <ShieldAlert size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>مكافحة التزوير والسرقة</h3>
                <p style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>حظر حسابات الطلاب في حال محاولة فتح الحساب من عدة أجهزة في نفس الوقت، مع وضع علامات مائية (Watermark) باسم ورقم الطالب على الفيديوهات.</p>
              </div>
            </div>

            {/* AI */}
            <div style={{ display: 'flex', gap: '25px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', flexWrap: 'wrap' }}>
              <div style={{ padding: '15px', borderRadius: '16px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', width: '60px', flexShrink: 0 }}>
                <BrainCircuit size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>الذكاء الاصطناعي ودعم البث المباشر</h3>
                <p style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>يتضمن النظام مساعداً ذكياً لإنشاء الأسئلة وتلخيص الدروس، وربط مباشر مع خدمات البث (Zoom, Teams) لتقديم محاضرات تفاعلية.</p>
              </div>
            </div>
          </div>
          
          <ArticleImage 
            src="/images/kmt-lms/5.jpeg" 
            alt="KMT LMS Advanced Tech" 
            caption="✨ ميزات متقدمة: أمان أقصى للمحتوى، ربط البث المباشر، ومساعد الذكاء الاصطناعي" 
          />
        </section>

        {/* WHY KMT */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لماذا تختار KMT LMS؟
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '25px', textAlign: 'justify' }}>
            لأننا لم نبنِ مجرد موقع تعليمي، بل صممنا منصة حديثة تجمع بين:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px', marginBottom: '25px' }}>
              {[
                "سهولة الاستخدام والسرعة الفائقة.",
                "الأمان التام وحماية الملكية الفكرية.",
                "الأداء العالي وتحمل آلاف الطلاب في نفس اللحظة.",
                "المرونة وقابلية التوسع المستقبلي لتشمل فروعًا متعددة.",
                "تقارير ذكية ولوحات تحكم تفاعلية متقدمة.",
                "تجربة مستخدم حديثة وبسيطة تناسب جميع الأعمار."
              ].map((op, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{op}</span>
                </div>
              ))}
          </div>

          <p style={{ fontSize: '1.15rem', textAlign: 'justify', fontWeight: '600', color: 'var(--accent-cyan)' }}>
            سواء كنت مدرسًا مستقلاً، أو تدير مركزًا تعليميًا، أو جامعة، فإن KMT LMS يمنحك منصة متكاملة تساعدك على تنظيم العمل، وتحسين تجربة الطلاب، وزيادة وصولك وانتشارك.
          </p>
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
            ابدأ رحلتك مع KMT LMS
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', maxWidth: '750px', margin: '0 auto 35px', lineHeight: '1.6' }}>
            إذا كنت تبحث عن أفضل برنامج ونظام لإدارة المنصات التعليمية يجمع بين سهولة الاستخدام، والتقنيات الحديثة، والأداء الاحترافي، فإن KMT LMS هو الخيار المناسب.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:01100665674" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 35px', fontSize: '1.1rem' }}>
              <Phone size={18} />
              <span>تواصل مع فريق KMT: 01100665674</span>
            </a>
            
            <a href="https://wa.me/201100665674" target="_blank" rel="noopener noreferrer" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 35px', borderRadius: '30px', background: '#25D366', color: 'white', fontWeight: '700', fontSize: '1.1rem', boxShadow: '0 10px 20px rgba(37, 211, 102, 0.2)', transition: 'transform 0.3s' }} onMouseEnter={(e) => e.currentTarget.style.transform = 'scale(1.05)'} onMouseLeave={(e) => e.currentTarget.style.transform = 'scale(1)'}>
              <span>تواصل عبر الواتساب مباشرة</span>
            </a>
          </div>
        </section>

      </article>
    </div>
  );
}
