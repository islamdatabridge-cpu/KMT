import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { 
  CheckCircle2, Phone, Activity, HeartPulse, Building2,
  ShieldCheck, LayoutDashboard, BrainCircuit, Users
} from 'lucide-react';

export default function KmtLabArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT Lab | أفضل نظام إدارة مختبرات ومعامل التحاليل الطبية الذكي";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'برنامج إدارة مختبرات حديث ومستقر، قادر على أتمتة دورتك الطبية والإدارية والمالية المعقدة دون أخطاء.');
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
              KMT Lab | أفضل نظام إدارة مختبرات ومعامل التحاليل الطبية الذكي
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              إذا كنت تبحث عن برنامج إدارة معامل تحاليل حديث، دقيق، وسهل الاستخدام، فإن KMT Lab هو المنظومة التكنولوجية المتكاملة التي تضمن لك السرعة في استخراج النتائج، الربط الآلي مع أجهزة التحاليل، والرقابة الصارمة على الكيماويات والمصروفات.
            </p>
            
            <Link to="/kmt-lab/demo" style={{ textDecoration: 'none' }}>
              <motion.button 
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                style={{
                  background: 'var(--accent-cyan)',
                  color: '#000',
                  border: 'none',
                  padding: '15px 35px',
                  borderRadius: '30px',
                  fontSize: '1.2rem',
                  fontWeight: 'bold',
                  cursor: 'pointer',
                  marginBottom: '20px',
                  display: 'inline-flex',
                  alignItems: 'center',
                  gap: '10px',
                  boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)'
                }}
              >
                <LayoutDashboard size={22} />
                جرب النظام الآن - Live Demo
              </motion.button>
            </Link>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-lab/1.jpeg" 
            alt="KMT Lab Hero Banner" 
            caption="منصة KMT Lab البرمجية المتكاملة لإدارة معامل التحاليل والمختبرات الطبية." 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <p>
            تم تطوير KMT Lab ليكون العقل المنظم للمختبرات الطبية؛ فهو يتولى إدارة دورة العمل كاملة بدءاً من تسجيل المريض وسحب العينات (الباركود)، مروراً بالربط المباشر مع أجهزة التحليل المختلفة (LIMS)، وصولاً إلى مراجعة واعتماد النتائج طبياً وإرسالها للمريض عبر الواتساب أو التطبيق. يدير النظام أيضاً حسابات التعاقدات المعقدة ومخازن الكيماويات باحترافية عالية.
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
            لماذا تحتاج إلى نظام احترافي وذكي لإدارة معملك؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
            تُعد الدقة والسرعة هما حجر الأساس لنجاح أي معمل تحاليل طبية. أي خطأ في تسجيل اسم مريض، أو تبديل عينة، أو خطأ في نقل النتيجة من الجهاز إلى الورق قد يكلف المريض حياته ويكلف المعمل سمعته.
            </p>
            <p>
            تعتمد الكثير من المعامل حتى اليوم على الإدخال اليدوي للنتائج وبرامج غير مترابطة، مما يؤدي إلى تأخر تسليم التقارير، وصعوبة تتبع العينات المرفوضة، وهدر كبير في الكيماويات والكواشف (Reagents) لعدم وجود نظام جرد دقيق، ناهيك عن صعوبة إدارة حسابات الأطباء المحولين وشركات التأمين الصحي.
            </p>
            <p style={{ fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
            مع زيادة عدد المرضى وتطور الأجهزة الطبية، يصبح الاعتماد على برنامج إدارة مختبرات (LIMS) متطور أمراً حتمياً؛ ليضمن دقة النتائج 100%، يمنع الهدر، ويوفر تجربة سلسة واحترافية للمرضى تزيد من ثقتهم في معملك.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
            تطبيق واحد... واجهات مخصصة لسرعة الإنجاز
          </h2>
          <p style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '40px' }}>
          يتميز نظام KMT Lab بهيكلته المرنة وصلاحياته الدقيقة، حيث يوفر واجهات مخصصة تضمن سير العمل بسلاسة من الاستقبال وحتى تسليم النتيجة:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الاستقبال والتعاقدات</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>التسجيل السريع:</strong> تسجيل بيانات المريض، الطبيب المعالج، واختيار التحاليل في ثوانٍ.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>إدارة التعاقدات:</strong> حساب نسب الخصم لشركات التأمين والنقابات تلقائياً.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>طباعة الباركود:</strong> إصدار ملصقات الباركود للعينات فور التسجيل لتجنب أخطاء التبديل.</span></li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HeartPulse size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الكيميائي وسحب العينات</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>قائمة العمل (Worklist):</strong> عرض العينات المطلوبة لكل جهاز أو قسم (كيمياء، هرمونات، دم) بوضوح.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>الربط الآلي بالأجهزة:</strong> استقبال النتائج من أجهزة التحليل تلقائياً دون إدخال يدوي.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>إدخال النتائج والمراجعة:</strong> واجهة مرنة لإدخال النتائج اليدوية، مع تنبيهات فورية للنتائج غير الطبيعية (Panic Values).</span></li>
              </ul>
            </motion.div>

          </div>

          <ArticleImage 
            src="/images/kmt-lab/2.jpeg" 
            alt="KMT Lab Interfaces" 
            caption="واجهات مخصصة وسريعة للاستقبال، الكيميائيين، والإدارة العليا عبر نظام KMT Lab الموحد." 
          />
        </section>

        {/* SECTION 3 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          لوحة تحكم ذكية تساعدك على اتخاذ القرار
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
          تمنح لوحة التحكم الإدارية في KMT Lab مدير المعمل أو مالك السلسلة قدرة كاملة على المراقبة والتحليل المالي والإداري لحظة بلحظة:
          </p>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> التدفق المالي: تقارير فورية لإيرادات كل وردية، والمصروفات، وصافي الأرباح.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> إحصائيات التحاليل: معرفة التحاليل الأكثر طلباً لتحسين سياسة التسعير وشراء الكيماويات.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> حسابات الأطباء والعمولات: تقارير دقيقة توضح الحالات المحولة من كل طبيب لحساب نسب التحويل بشفافية.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> أداء الفروع: مراقبة إنتاجية ومبيعات كل فرع في السلسلة من شاشة واحدة.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-lab/3.jpeg" 
            alt="KMT Lab Dashboard" 
            caption="لوحة تحكم إحصائية متقدمة لمراقبة الماليات، حركة العينات، وأداء كافة الفروع لحظياً." 
          />
        </section>

        {/* SECTION 4 */}
        <section style={{ margin: '80px 0', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          أتمتة العمليات وإدارة المخازن الصارمة
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
          الكيماويات والكواشف هي رأس مال المعمل الحقيقي، ولذلك يقدم KMT Lab نظام جرد شديد الدقة:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>نظام إدارة الكيماويات (Reagents)</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>الخصم التلقائي: يتم خصم الكيماويات من المخزن تلقائياً بناءً على عدد التحاليل المجراة.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>تنبيهات الصلاحية والنواقص: إشعارات فورية قبل انتهاء صلاحية الكيماويات أو اقتراب نفاذ الرصيد لضمان عدم توقف العمل.</span></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>دورة الاعتماد وتسليم النتائج</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>التوقيع الإلكتروني والاعتماد الطبي.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>الإرسال عبر الواتساب: إرسال رابط النتيجة للمريض أو الطبيب المعالج عبر WhatsApp فور اعتمادها.</span></li>
              </ul>
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-lab/4.jpeg" 
            alt="KMT Lab Operations Management" 
            caption="رقابة شاملة على الكيماويات، أتمتة دورة العينات، وسهولة تامة في طباعة وتسليم النتائج." 
          />
        </section>

        {/* SECTION 5 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          تقنيات حديثة تضمن لك الصدارة
          </h2>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><BrainCircuit color="var(--accent-cyan)" /> الربط السحابي (Cloud LIMS): يمكنك متابعة المعمل وإصدار النتائج من أي مكان وفي أي وقت.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><ShieldCheck color="var(--accent-cyan)" /> حماية البيانات والتاريخ المرضي (Patient History): قاعدة بيانات مشفرة تحتفظ بالتاريخ المرضي للعميل للمقارنة.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-lab/5.jpeg" 
            alt="KMT Lab Advanced Tech" 
            caption="ميزات المستقبل: ربط سحابي آمن، تطبيقات موبايل للمرضى، وذكاء اصطناعي لقراءة التاريخ المرضي." 
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
            لماذا تختار KMT Lab لإدارة معملك الطبي؟
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            لأن النظام صُمم خصيصاً للقضاء على الأخطاء البشرية وتسريع الأداء.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px', fontSize: '1.1rem' }}>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>الدقة المتناهية بنسبة 100%</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>السرعة في الإنجاز</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>الرقابة المالية واللوجستية</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>التكامل والدعم الفني</li>
            </ul>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '20px' }}>
            ابدأ رحلة التميز والتحول الرقمي مع KMT Lab
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
              <Link to="/kmt-lab/demo" style={{ textDecoration: 'none' }}>
                <button style={{ 
                  background: 'var(--accent-cyan)', color: '#000', border: 'none', borderRadius: '25px', 
                  padding: '15px 30px', fontSize: '1.1rem', fontWeight: 'bold', cursor: 'pointer',
                  display: 'flex', alignItems: 'center', gap: '10px', boxShadow: '0 10px 25px rgba(6, 182, 212, 0.4)'
                }}>
                  <LayoutDashboard size={20} />
                  <span>جرب النظام الآن - Live Demo</span>
                </button>
              </Link>
            </div>
          </div>
        </section>

      </article>
    </div>
  );
}
