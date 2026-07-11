import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  CheckCircle2, Phone, Activity, HeartPulse, Building2,
  ShieldCheck, LayoutDashboard, BrainCircuit, Users
} from 'lucide-react';

export default function KmtPharmacyArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT Pharmacy | أفضل نظام إدارة الصيدليات الذكي لزيادة المبيعات والأرباح";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'برنامج إدارة صيدلية حديث، سريع، وخالٍ من تعقيدات الجرد والأخطاء الحسابية.');
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
              KMT Pharmacy | أفضل نظام إدارة الصيدليات الذكي لزيادة المبيعات والأرباح
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              إذا كنت تبحث عن برنامج إدارة صيدلية حديث، سريع، وخالٍ من تعقيدات الجرد والأخطاء الحسابية، فإن KMT Pharmacy هو المنظومة التكنولوجية المتكاملة التي تضمن لك الأتمتة الكاملة، الرقابة الصارمة على المخزون، وسهولة الإدارة من مكان واحد.
            </p>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-pharmacy/1.jpeg" 
            alt="KMT Pharmacy Hero Banner" 
            caption="منصة KMT Pharmacy البرمجية المتكاملة لإدارة الصيدليات وسلاسل الصيدليات الذكية." 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <p>
            تم تطوير KMT Pharmacy ليتجاوز المفهوم التقليدي لكاشير الصيدلية، فهو نظام متكامل لإدارة موارد وإمدادات الصيدليات يساعد الصيادلة والمديرين على أتمتة كافة العمليات اليومية. من أول مبيعات النقد الآلية والتعامل مع الروشتات، مروراً بإدارة تواريخ الصلاحية وبدائل الأدوية، وحتى الربط الذكي مع الشركات والمخازن الكبرى عبر لوحة تحكم تفاعلية وتطبيقات ذكية مخصصة.
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
            لماذا تحتاج إلى نظام احترافي وذكي لإدارة صيدليتك؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
            تعد إدارة الصيدليات من أكثر الأنشطة التجارية والطبية تعقيداً؛ نظراً للعدد الهائل من الأصناف التجارية، التغير المستمر في الأسعار، والحاجة الدائمة لمراقبة تواريخ الصلاحية لتجنب الخسائر الفادحة.
            </p>
            <p>
            تعتمد الكثير من الصيدليات حتى اليوم على الدفاتر أو البرمجيات القديمة والبطيئة، مما يؤدي إلى حدوث أخطاء في العجز والزيادة عند الجرد، وتراكم الأصناف الراكدة، وضياع المبيعات بسبب غياب معرفة البدائل الفورية للأدوية الناقصة، ناهيك عن صعوبة إدارة حسابات شركات التأمين والنقابات بدقة.
            </p>
            <p style={{ fontWeight: 'bold', color: 'var(--accent-cyan)' }}>
            مع التسارع التقني وزيادة حدة المنافسة، يصبح من الضروري الاعتماد على برنامج إدارة صيدليات متطور؛ ليحمي أرباحك، وينظم مخزنك بالكامل، ويقدم تجربة سريعة ومريحة لعملائك تضمن ولائهم الدائم لعلامتك التجارية.
            </p>
          </div>
        </section>

        {/* SECTION 2 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', textAlign: 'center', fontWeight: 'bold' }}>
            تطبيق واحد... واجهات مخصصة وصلاحيات ذكية
          </h2>
          <p style={{ fontSize: '1.15rem', textAlign: 'center', marginBottom: '40px' }}>
          يتميز نظام KMT Pharmacy بهيكلته المرنة وصلاحياته الدقيقة، حيث يمنح كل فرد في طاقم العمل واجهة مخصصة تضمن الأمان التام وسرعة الأداء:
          </p>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            
            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <HeartPulse size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الصيدلي</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>البحث الذكي والبدائل:</strong> العثور على أي دواء بالاسم، المادة الفعالة، أو الباركود، مع إظهار البدائل فوراً.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>قراءة الروشتات الإلكترونية:</strong> إمكانية استقبال وقراءة الروشتات الرقمية والصرف بضغطة واحدة.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>تنبيهات التعارضات:</strong> إصدار تحذيرات تلقائية عند صرف أدوية قد تتعارض حرصاً على سلامة المرضى.</span></li>
              </ul>
            </motion.div>

            <motion.div whileHover={{ y: -10 }} style={{ background: 'var(--bg-secondary)', padding: '30px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>
              <div style={{ width: '60px', height: '60px', borderRadius: '15px', background: 'rgba(6, 182, 212, 0.1)', display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
                <Users size={30} color="var(--accent-cyan)" />
              </div>
              <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: 'bold' }}>واجهة الكاشير والاستقبال</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>نظام مبيعات سريع:</strong> واجهة بيع مرنة تدعم الاختصارات السريعة وتتعامل مع المبيعات النقدية والفيزا.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>إدارة حسابات التعاقدات:</strong> حساب نسب الخصم والتحمل لشركات التأمين الصحي تلقائياً.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span><strong>المرتجعات:</strong> معالجة المرتجعات وإصدار الفواتير المطبوعة بدقة واحترافية.</span></li>
              </ul>
            </motion.div>

          </div>

          <ArticleImage 
            src="/images/kmt-pharmacy/2.jpeg" 
            alt="KMT Pharmacy Interfaces" 
            caption="واجهات مخصصة وسريعة للصيادلة، الكاشير، وموظفي التوصيل عبر نظام KMT Pharmacy الموحد." 
          />
        </section>

        {/* SECTION 3 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          لوحة تحكم ذكية تساعدك على اتخاذ القرار
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '20px' }}>
          لا تقتصر لوحة التحكم الإدارية في KMT Pharmacy على رصد المبيعات فحسب، بل توفر عقلاً تحليلياً متقدماً يقدم لصاحب الصيدلية أو مديري السلاسل تقارير لحظية مجمعة وتفصيلية:
          </p>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> مؤشرات البيع والأرباح: تتبع صافي الأرباح، وحجم المبيعات اليومية، والمصروفات بدقة متناهية.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> النواقص والأصناف الراكدة: تقارير ذكية توضح الأصناف الأكثر مبيعاً والأصناف الراكدة.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> أداء الفروع والموظفين: مراقبة مبيعات كل فرع على حدة، ومتابعة إنتاجية ومبيعات الصيادلة في كل وردية.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><CheckCircle2 color="var(--accent-cyan)" /> حسابات الموردين والشركات: تنظيم مواعيد سداد الفواتير والمقبوضات.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-pharmacy/3.jpeg" 
            alt="KMT Pharmacy Dashboard" 
            caption="لوحة تحكم إحصائية وذكية لمراقبة الماليات، المبيعات، وحجم حركة المخازن في جميع الفروع لحظياً." 
          />
        </section>

        {/* SECTION 4 */}
        <section style={{ margin: '80px 0', padding: '40px', background: 'var(--bg-secondary)', borderRadius: '24px', border: '1px solid var(--border-color)' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          أتمتة العمليات وإدارة المخازن الصارمة
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
          صُمم KMT Pharmacy ليحكم قبضتك الإدارية على مخزون صيدليتك، ويمنع تماماً أي هدر أو تلاعب بالموارد:
          </p>
          
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', gap: '30px' }}>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>نظام الجرد والرقابة التلقائية</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>تنبيهات تواريخ الصلاحية: نظام تحذيري مبكر ينبه الإدارة بالأصناف التي تقترب تواريخ صلاحيتها من الانتهاء.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>الحد الأدنى للطلب: إرسال إشعارات فورية عندما يوشك صنف أساسي على النفاذ لطلبه.</span></li>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>تعدد المخازن والأرفف: تنظيم الأدوية لتسهيل الوصول والجرد.</span></li>
              </ul>
            </div>
            <div>
              <h3 style={{ fontSize: '1.5rem', color: 'var(--accent-cyan)', marginBottom: '15px' }}>إدارة خدمات التوصيل</h3>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                <li style={{ display: 'flex', gap: '10px' }}><CheckCircle2 size={20} color="var(--text-primary)" style={{ flexShrink: 0, marginTop: '5px' }} /> <span>تتبع الطيارين: نظام مخصص لتسجيل وإدارة طلبات الدليفري ومتابعة حسابات الطيارين وحالة الأوردر.</span></li>
              </ul>
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-pharmacy/4.jpeg" 
            alt="KMT Pharmacy Operations Management" 
            caption="رقابة شاملة على المخزون الذكي، تواريخ الصلاحية، وإدارة حسابات شركات التأمين والتوصيل." 
          />
        </section>

        {/* SECTION 5 */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '30px', fontWeight: 'bold' }}>
          تقنيات حديثة تضمن لك الصدارة
          </h2>
          <ul style={{ fontSize: '1.15rem', listStyle: 'none', padding: 0, display: 'flex', flexDirection: 'column', gap: '15px' }}>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><BrainCircuit color="var(--accent-cyan)" /> الربط السحابي والأمان الفائق: قاعدة بيانات مشفرة ومؤمنة بالكامل تحمي بيانات عملائك.</li>
            <li style={{ display: 'flex', gap: '10px', alignItems: 'center' }}><ShieldCheck color="var(--accent-cyan)" /> دعم تعدد الفروع المستدام: ربط كافة صيدليات السلسلة بسيرفر موحد مما يسمح بنقل الأصناف بين الفروع.</li>
          </ul>

          <ArticleImage 
            src="/images/kmt-pharmacy/5.jpeg" 
            alt="KMT Pharmacy Advanced Tech" 
            caption="ميزات المستقبل: ذكاء اصطناعي للنواقص، ربط فوري للفروع، وحماية فائقة لقواعد البيانات." 
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
            لماذا تختار KMT Pharmacy لإدارة صيدليتك؟
            </h2>
            <p style={{ fontSize: '1.2rem', marginBottom: '30px', maxWidth: '800px', margin: '0 auto 30px' }}>
            لأن النظام يجمع في جوهره بين تلبية المعايير الطبية الدقيقة والمتطلبات التجارية الذكية.
            </p>
            <ul style={{ listStyle: 'none', padding: 0, display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '20px', marginBottom: '40px', fontSize: '1.1rem' }}>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>السرعة الفائقة</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>سهولة الاستخدام</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>المرونة القابلة للتوسع</li>
              <li style={{ background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '20px', border: '1px solid var(--border-color)' }}>الدعم الفني المتواصل</li>
            </ul>

            <h3 style={{ fontSize: '1.8rem', color: 'var(--accent-cyan)', marginBottom: '20px' }}>
            ابدأ رحلة النجاح والتحول الرقمي مع KMT Pharmacy
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
