import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  GraduationCap, Users, BookOpen, Clock, FileText, 
  DollarSign, PieChart, ShieldCheck, CheckCircle2, MonitorSmartphone
} from 'lucide-react';

export default function KmtSchoolArticle() {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT School | نظام إدارة المدارس الذكي لتطوير العملية التعليمية";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KMT School – الحل المتكامل لإدارة المدارس الحديثة. نظام إدارة متكامل يساعد الإدارات التعليمية على تنظيم جميع أعمالها.');
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
          <MonitorSmartphone size={14} color="var(--accent-cyan)" /> {caption}
        </span>
      )}
    </motion.div>
  );

  const SectionTitle = ({ icon: Icon, children }) => (
    <h2 style={{ 
      display: 'flex', alignItems: 'center', gap: '15px', 
      fontSize: '2rem', color: 'var(--text-primary)', 
      marginTop: '50px', marginBottom: '25px',
      borderBottom: '1px solid var(--border-color)',
      paddingBottom: '15px'
    }}>
      <div style={{ 
        background: 'var(--accent-cyan-glow)', padding: '12px', 
        borderRadius: '12px', display: 'flex', color: 'var(--accent-cyan)'
      }}>
        <Icon size={28} />
      </div>
      {children}
    </h2>
  );

  const FeatureList = ({ items }) => (
    <ul style={{ listStyle: 'none', padding: 0, margin: '20px 0', display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
      {items.map((item, idx) => (
        <motion.li 
          key={idx}
          initial={{ opacity: 0, x: 20 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ delay: idx * 0.1 }}
          style={{ display: 'flex', alignItems: 'center', gap: '10px', fontSize: '1.1rem', background: 'var(--bg-secondary)', padding: '15px', borderRadius: '12px', border: '1px solid var(--border-color)' }}
        >
          <CheckCircle2 size={20} color="var(--accent-cyan)" style={{ flexShrink: 0 }} />
          <span>{item}</span>
        </motion.li>
      ))}
    </ul>
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
        <section style={{ textAlign: 'center', marginBottom: '60px' }}>
          <motion.div initial={{ opacity: 0, y: -20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}>
            <h1 className="gradient-text" style={{ fontSize: 'clamp(2rem, 5vw, 3.5rem)', marginBottom: '20px', lineHeight: '1.3', fontWeight: '800' }}>
              KMT School | نظام إدارة المدارس الذكي لتطوير العملية التعليمية
            </h1>
            <p style={{ fontSize: '1.3rem', maxWidth: '800px', margin: '0 auto', color: 'var(--text-secondary)' }}>
              KMT School – الحل المتكامل لإدارة المدارس الحديثة
            </p>
          </motion.div>
        </section>

        <ArticleImage src="/images/kmt-school/1.jpeg" alt="KMT School Dashboard" caption="واجهة KMT School العصرية لتجربة إدارة سلسة" />

        <section>
          <p style={{ fontSize: '1.2rem', marginBottom: '30px', textAlign: 'justify' }}>
            في ظل التحول الرقمي الذي يشهده قطاع التعليم، أصبحت إدارة المدارس بالطرق التقليدية تمثل تحديًا كبيرًا بسبب كثرة البيانات والعمليات اليومية. لذلك تم تطوير KMT School ليكون نظامًا متكاملاً لإدارة المدارس يساعد الإدارات التعليمية على تنظيم جميع أعمالها من مكان واحد، بدايةً من تسجيل الطلاب وحتى إصدار النتائج وإدارة الرسوم الدراسية والتواصل مع أولياء الأمور.
          </p>
          <p style={{ fontSize: '1.2rem', marginBottom: '40px', textAlign: 'justify' }}>
            يهدف النظام إلى تقليل الأعمال الورقية، وتحسين كفاءة الإدارة، وتوفير الوقت والجهد، مع تقديم تجربة استخدام سهلة وسريعة لجميع المستخدمين.
          </p>
        </section>

        <SectionTitle icon={GraduationCap}>إدارة الطلاب بسهولة واحترافية</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يتيح النظام إنشاء ملف إلكتروني متكامل لكل طالب يحتوي على جميع بياناته التعليمية والشخصية، مع إمكانية متابعة:
        </p>
        <FeatureList items={[
          "بيانات الطالب الأساسية",
          "الصف الدراسي والفصل",
          "الحالة الدراسية",
          "السجل الأكاديمي",
          "الحضور والغياب",
          "الدرجات والنتائج",
          "الرسوم الدراسية",
          "المستندات الرسمية"
        ]} />
        <p style={{ fontSize: '1.1rem', marginTop: '15px' }}>
          وبذلك تصبح جميع معلومات الطالب متاحة في ثوانٍ دون الحاجة إلى البحث في الملفات الورقية.
        </p>

        <ArticleImage src="/images/kmt-school/2.jpeg" alt="Students Management" caption="إدارة متكاملة لبيانات الطلاب بضغطة زر" />

        <SectionTitle icon={Users}>إدارة المعلمين والموظفين</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يوفر KMT School نظامًا متقدمًا لإدارة أعضاء هيئة التدريس والإداريين، حيث يمكن تسجيل جميع بيانات المعلمين وربطهم بالمواد الدراسية والفصول والجداول اليومية. كما يساعد في متابعة:
        </p>
        <FeatureList items={[
          "بيانات المعلمين",
          "المواد الدراسية",
          "الجداول الأسبوعية",
          "الحضور والانصراف",
          "الأداء الوظيفي",
          "المهام التعليمية"
        ]} />

        <SectionTitle icon={BookOpen}>إدارة الفصول والجداول الدراسية</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يساعد النظام في تنظيم الهيكل الدراسي بالكامل ويمنع حدوث التعارض بين الجداول المختلفة من خلال إدارة:
        </p>
        <FeatureList items={[
          "المراحل التعليمية",
          "الصفوف والفصول",
          "المواد الدراسية",
          "الجداول الأسبوعية",
          "توزيع المعلمين",
          "الطاقة الاستيعابية لكل فصل"
        ]} />

        <ArticleImage src="/images/kmt-school/3.jpeg" alt="Classes and Schedules" caption="تنظيم الفصول والجداول بذكاء لمنع أي تعارض" />

        <SectionTitle icon={Clock}>الحضور والانصراف</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يمكن تسجيل حضور الطلاب والمعلمين بسهولة سواء يدويًا أو إلكترونيًا، مع إنشاء تقارير فورية توضح:
        </p>
        <FeatureList items={[
          "نسب الحضور والغياب",
          "التأخير والإنذارات",
          "الإحصائيات اليومية والشهرية",
          "إشعارات فورية لأولياء الأمور"
        ]} />

        <SectionTitle icon={FileText}>الامتحانات والدرجات</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يدير النظام دورة الامتحانات بالكامل بداية من إنشاء الامتحانات وحتى إعلان النتائج. يشمل ذلك:
        </p>
        <FeatureList items={[
          "إعداد جداول الامتحانات",
          "إدخال الدرجات واحتساب المجموع",
          "احتساب التقديرات",
          "استخراج الشهادات وكشوف النتائج",
          "تقارير الأداء الأكاديمي"
        ]} />

        <ArticleImage src="/images/kmt-school/4.jpeg" alt="Exams and Results" caption="دورة امتحانات سلسة وموثوقة لضمان دقة الدرجات" />

        <SectionTitle icon={DollarSign}>إدارة الرسوم الدراسية</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يحتوي النظام على نظام مالي متكامل يساعد المدرسة على متابعة الموقف المالي لكل طالب بسهولة عبر:
        </p>
        <FeatureList items={[
          "إنشاء الرسوم والأقساط",
          "المدفوعات والمتبقي",
          "الخصومات والغرامات",
          "الإيصالات والتقارير المالية"
        ]} />

        <SectionTitle icon={MonitorSmartphone}>بوابة أولياء الأمور</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يوفر KMT School بوابة إلكترونية تعزز التواصل المستمر بين المدرسة والأسرة وتمكن ولي الأمر من الاطلاع على:
        </p>
        <FeatureList items={[
          "الحضور والغياب",
          "الواجبات والنتائج",
          "الرسوم الدراسية",
          "الإشعارات وأخبار المدرسة",
          "التقويم الدراسي"
        ]} />

        <ArticleImage src="/images/kmt-school/5.jpeg" alt="Parents Portal" caption="تواصل فعّال بين المدرسة والأسرة" />

        <SectionTitle icon={PieChart}>التقارير والإحصائيات</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          يعتمد النظام على لوحة تحكم ذكية تعرض أهم مؤشرات الأداء داخل المدرسة وتساعد الإدارة في اتخاذ قرارات مبنية على بيانات دقيقة، تشمل:
        </p>
        <FeatureList items={[
          "أعداد الطلاب والمعلمين",
          "نسب الحضور",
          "نتائج الامتحانات",
          "الإيرادات والمصروفات والرسوم المتأخرة",
          "أداء الفصول والمواد الدراسية"
        ]} />

        <SectionTitle icon={ShieldCheck}>الأمان وحماية البيانات</SectionTitle>
        <p style={{ fontSize: '1.1rem', marginBottom: '15px' }}>
          تم تصميم KMT School وفق أحدث معايير الأمان لضمان حماية بيانات المدرسة ويوفر:
        </p>
        <FeatureList items={[
          "صلاحيات متعددة للمستخدمين",
          "تشفير البيانات والنسخ الاحتياطي",
          "سجل كامل للعمليات",
          "حماية الحسابات وتسجيل الأنشطة"
        ]} />

        <div style={{
          marginTop: '60px',
          background: 'linear-gradient(135deg, rgba(6, 182, 212, 0.1), rgba(37, 99, 235, 0.1))',
          padding: '40px',
          borderRadius: '24px',
          border: '1px solid var(--accent-cyan)'
        }}>
          <h2 style={{ fontSize: '2rem', marginBottom: '20px', color: 'var(--text-primary)', textAlign: 'center' }}>لماذا تختار KMT School؟</h2>
          <p style={{ fontSize: '1.1rem', marginBottom: '20px', textAlign: 'center' }}>
            لأن النظام يجمع جميع احتياجات المدرسة داخل منصة واحدة سهلة الاستخدام، مما يساعد على:
          </p>
          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '15px', marginBottom: '30px' }}>
            {["تحسين كفاءة الإدارة", "تقليل الأعمال الورقية", "تسريع إنجاز المهام", "رفع جودة العملية التعليمية", "تحسين التواصل مع أولياء الأمور", "متابعة الأداء الأكاديمي بدقة", "إدارة مالية احترافية", "توفير تقارير لحظية لاتخاذ القرارات"].map((item, i) => (
              <div key={i} style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CheckCircle2 size={18} color="var(--accent-cyan)" />
                <span style={{ fontSize: '1.05rem', fontWeight: 'bold' }}>{item}</span>
              </div>
            ))}
          </div>

          <div style={{ textAlign: 'center', marginTop: '40px' }}>
            <h3 style={{ fontSize: '1.5rem', marginBottom: '15px' }}>ابدأ رحلة التحول الرقمي مع KMT School</h3>
            <p style={{ fontSize: '1.1rem', marginBottom: '25px', color: 'var(--text-secondary)' }}>
              إذا كنت تبحث عن نظام احترافي لإدارة المدارس يواكب التطور الرقمي ويساعدك على تنظيم جميع العمليات التعليمية والإدارية والمالية من خلال منصة واحدة، فإن KMT School هو الخيار المثالي.
            </p>
            <a href="https://wa.me/201100665674" target="_blank" rel="noopener noreferrer" style={{ textDecoration: 'none' }}>
              <button className="btn-primary" style={{ padding: '15px 40px', fontSize: '1.2rem', display: 'inline-flex', alignItems: 'center', gap: '10px' }}>
                تواصل معنا للحصول على عرض توضيحي
              </button>
            </a>
          </div>
        </div>

      </article>
    </div>
  );
}
