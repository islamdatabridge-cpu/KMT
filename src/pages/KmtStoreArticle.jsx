import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { 
  ShoppingCart, Package, Users, CreditCard, Truck, 
  Tag, BarChart3, Search, ShieldCheck, 
  CheckCircle2, Store, Phone, Activity
} from 'lucide-react';

export default function KmtStoreArticle() {
  // Scroll to top and set dynamic SEO metadata on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "KMT Store | منصة تجارة إلكترونية متكاملة لإنشاء وإدارة المتاجر الإلكترونية";
    
    let metaDescription = document.querySelector('meta[name="description"]');
    if (!metaDescription) {
      metaDescription = document.createElement('meta');
      metaDescription.setAttribute('name', 'description');
      document.head.appendChild(metaDescription);
    }
    metaDescription.setAttribute('content', 'KMT Store هي منصة تجارة إلكترونية متكاملة تم تطويرها لتمنح أصحاب الأعمال القدرة على إنشاء متجر إلكتروني احترافي وإدارته بسهولة.');
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
              KMT Store | منصة تجارة إلكترونية متكاملة لإنشاء وإدارة المتاجر الإلكترونية
            </h1>
            
            <p style={{ 
              fontSize: 'clamp(1.1rem, 2vw, 1.4rem)', 
              color: 'var(--text-primary)', 
              maxWidth: '800px', 
              margin: '0 auto 30px',
              fontWeight: '500',
              lineHeight: '1.6'
            }}>
              KMT Store – الحل الذكي لإدارة التجارة الإلكترونية
            </p>
          </motion.div>

          <ArticleImage 
            src="/images/kmt-store/q1.jpeg" 
            alt="KMT Store Hero Banner" 
            caption="منصة KMT Store لإدارة المتاجر الإلكترونية بذكاء وكفاءة" 
          />

          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            style={{ fontSize: '1.15rem', maxWidth: '900px', margin: '30px auto', textAlign: 'justify', display: 'flex', flexDirection: 'column', gap: '15px' }}
          >
            <p>أصبحت التجارة الإلكترونية من أسرع القطاعات نموًا في العالم، وأصبحت الشركات والمتاجر بحاجة إلى نظام متكامل يساعدها على إدارة المنتجات، والطلبات، والعملاء، وعمليات الدفع والشحن من مكان واحد.</p>
            <p>KMT Store هي منصة تجارة إلكترونية متكاملة تم تطويرها لتمنح أصحاب الأعمال القدرة على إنشاء متجر إلكتروني احترافي وإدارته بسهولة، مع توفير جميع الأدوات اللازمة لتنمية المبيعات وتحسين تجربة العملاء.</p>
            <p>سواء كنت تمتلك متجرًا صغيرًا أو علامة تجارية كبيرة أو شركة توزيع، فإن KMT Store توفر لك كل ما تحتاجه لإدارة نشاطك التجاري بكفاءة عالية.</p>
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
            لماذا تختار KMT Store؟
          </h2>
          
          <div style={{ display: 'flex', flexDirection: 'column', gap: '20px', fontSize: '1.15rem' }}>
            <p>
              تم تصميم KMT Store لتكون منصة سريعة وآمنة وسهلة الاستخدام، حيث تجمع بين التصميم العصري والأداء العالي وإمكانيات الإدارة المتقدمة.
            </p>
            <p>
              توفر المنصة لوحة تحكم متكاملة تساعدك على متابعة جميع العمليات اليومية، بداية من إضافة المنتجات وحتى تسليم الطلب للعميل.
            </p>
          </div>
        </section>

        {/* MAIN FEATURES GRID */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ textAlign: 'center', marginBottom: '45px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '15px', fontWeight: '700' }}>
              إدارة متكاملة لكل جوانب متجرك
            </h2>
          </div>

          <div style={{ 
            display: 'grid', 
            gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))', 
            gap: '30px',
            marginBottom: '40px'
          }}>
            {/* Products */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <Package size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>إدارة المنتجات بسهولة</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                يمكنك إنشاء عدد غير محدود من المنتجات مع إمكانية تنظيمها داخل تصنيفات رئيسية وفرعية. تشمل إدارة المنتجات:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "إضافة صور متعددة للمنتج", "وصف تفصيلي ومختصر", "السعر الأساسي وسعر الخصم", "الكمية المتاحة وإدارة المخزون", "الباركود و SKU", "العلامة التجارية والوزن والأبعاد", "المتغيرات (الألوان – المقاسات – الأحجام)", "المنتجات المرتبطة والمقترحة والأكثر مبيعًا" ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>

            {/* Orders */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-blue)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(37, 99, 235, 0.1)', color: 'var(--accent-blue)' }}>
                  <ShoppingCart size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>إدارة الطلبات</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                توفر المنصة نظامًا احترافيًا لإدارة الطلبات بداية من لحظة الشراء وحتى التسليم. تشمل مراحل الطلب:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "طلب جديد", "قيد المراجعة", "جاري التجهيز", "جاري الشحن", "تم التسليم", "ملغي", "مسترجع" ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-blue)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
              <p style={{ fontSize: '0.95rem', marginTop: '15px', color: 'var(--text-primary)', fontWeight: '600' }}>كما يمكن متابعة حالة كل طلب مع تسجيل جميع التحديثات داخل النظام.</p>
            </motion.div>

            {/* Customers */}
            <motion.div 
              whileHover={{ y: -5, borderColor: 'var(--accent-cyan)' }}
              style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', transition: 'all 0.3s' }}
            >
              <div style={{ display: 'flex', alignItems: 'center', gap: '15px', marginBottom: '20px' }}>
                <div style={{ padding: '10px', borderRadius: '12px', background: 'rgba(6, 182, 212, 0.1)', color: 'var(--accent-cyan)' }}>
                  <Users size={28} />
                </div>
                <h3 style={{ fontSize: '1.5rem', color: 'var(--text-primary)', margin: 0 }}>إدارة العملاء</h3>
              </div>
              <p style={{ fontSize: '1rem', marginBottom: '15px', color: 'var(--text-secondary)' }}>
                توفر المنصة قاعدة بيانات متكاملة للعملاء تشمل:
              </p>
              <ul style={{ listStyle: 'none', padding: 0, margin: 0, display: 'flex', flexDirection: 'column', gap: '10px' }}>
                {[ "بيانات العميل", "سجل الطلبات", "إجمالي المشتريات", "العناوين ووسائل التواصل", "الملاحظات", "العملاء الأكثر شراءً", "العملاء الجدد", "العملاء غير النشطين" ].map((item, i) => (
                  <li key={i} style={{ display: 'flex', alignItems: 'flex-start', gap: '10px', fontSize: '0.95rem' }}>
                    <CheckCircle2 size={16} color="var(--accent-cyan)" style={{ marginTop: '5px', flexShrink: 0 }} />
                    <span>{item}</span>
                  </li>
                ))}
              </ul>
            </motion.div>
          </div>

          <ArticleImage 
            src="/images/kmt-store/q2.jpeg" 
            alt="KMT Store Management Interfaces" 
            caption="واجهات ذكية وسهلة لإدارة المنتجات، الطلبات، والعملاء" 
          />
        </section>

        {/* PAYMENT AND SHIPPING */}
        <section style={{ margin: '80px 0' }}>
          <div style={{ display: 'flex', flexDirection: 'column', gap: '15px', marginBottom: '40px' }}>
            <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', fontWeight: '700' }}>
              عمليات دفع وشحن مرنة وموثوقة
            </h2>
          </div>

          <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(240px, 1fr))', gap: '20px', marginBottom: '40px' }}>
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <CreditCard size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>نظام الدفع الإلكتروني</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>يدعم KMT Store العديد من وسائل الدفع لتوفير أفضل تجربة شراء للعملاء. منها:</p>
              <ul style={{ paddingRight: '20px', margin: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li>بطاقات الائتمان</li>
                <li>بطاقات الخصم</li>
                <li>المحافظ الإلكترونية</li>
                <li>التحويل البنكي</li>
                <li>الدفع عند الاستلام</li>
                <li>بوابات الدفع المختلفة</li>
              </ul>
              <p style={{ fontSize: '0.9rem', margin: 0, fontWeight: '600' }}>كما يمكن إدارة جميع عمليات الدفع من لوحة التحكم بسهولة.</p>
            </div>

            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Truck size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>إدارة الشحن</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>يدعم النظام ربط شركات الشحن المختلفة وإدارة عمليات الشحن بالكامل. ويتضمن:</p>
              <ul style={{ paddingRight: '20px', margin: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li>إنشاء بوليصة الشحن</li>
                <li>حساب تكلفة الشحن</li>
                <li>تتبع الشحنة</li>
                <li>تحديث حالة الشحنة</li>
                <li>إدارة شركات الشحن</li>
                <li>تحديد مناطق التوصيل</li>
              </ul>
            </div>
            
            <div style={{ background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '16px', padding: '25px', display: 'flex', flexDirection: 'column', gap: '15px' }}>
              <div style={{ color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', gap: '10px' }}>
                <Tag size={28} />
                <span style={{ fontWeight: '700', color: 'var(--text-primary)', fontSize: '1.2rem' }}>إدارة الكوبونات والعروض</span>
              </div>
              <p style={{ fontSize: '0.95rem', margin: 0 }}>يمكن إنشاء عروض تسويقية متنوعة مثل:</p>
              <ul style={{ paddingRight: '20px', margin: 0, fontSize: '0.95rem', display: 'flex', flexDirection: 'column', gap: '5px' }}>
                <li>كوبونات الخصم</li>
                <li>الخصومات الثابتة وبالنسبة المئوية</li>
                <li>عروض لفترة محددة</li>
                <li>عروض شراء منتج واحصل على آخر</li>
                <li>الشحن المجاني</li>
              </ul>
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-store/q3.jpeg" 
            alt="KMT Store Logistics & Sales" 
            caption="تكامل مرن مع بوابات الدفع وشركات الشحن، بالإضافة إلى نظام قوي للعروض" 
          />
        </section>

        {/* REPORTS & DASHBOARD */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            التقارير ولوحة التحكم الاحترافية
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '30px' }}>
            توفر لوحة التحكم تقارير دقيقة تساعد أصحاب المتاجر على اتخاذ القرارات الصحيحة وتم تصميمها لتكون سهلة وسريعة لإدارة جميع أقسام المتجر من مكان واحد.
          </p>

          <div style={{
            background: 'var(--bg-secondary)',
            border: '1px solid var(--border-color)',
            borderRadius: '24px',
            padding: '35px 30px',
            marginBottom: '40px'
          }}>
            <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '25px', display: 'flex', alignItems: 'center', gap: '10px' }}>
              <BarChart3 size={24} color="var(--accent-cyan)" />
              <span>مزايا وتقارير لوحة التحكم:</span>
            </h3>
            
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))', gap: '20px' }}>
              {[
                "إجمالي المبيعات وعدد الطلبات", "المنتجات الأكثر مبيعًا", "الإيرادات والأرباح", "العملاء الجدد ومعدل التحويل",
                "متوسط قيمة الطلب", "تقارير المخزون والشحن", "إدارة المستخدمين والصلاحيات", "إعدادات المتجر والصفحات",
                "إدارة المدونة وإعدادات SEO"
              ].map((op, index) => (
                <div key={index} style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
                  <div style={{ width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-cyan)', flexShrink: 0 }}></div>
                  <span style={{ color: 'var(--text-primary)', fontSize: '1.05rem' }}>{op}</span>
                </div>
              ))}
            </div>
          </div>

          <ArticleImage 
            src="/images/kmt-store/q4.jpeg" 
            alt="KMT Store Advanced Dashboard" 
            caption="لوحة تحكم احترافية لعرض الإحصائيات والتقارير الشاملة واتخاذ القرارات" 
          />
        </section>

        {/* SEO & SECURITY */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            تحسين محركات البحث والأمان العالي
          </h2>

          <div style={{ display: 'flex', flexDirection: 'column', gap: '30px', marginBottom: '40px' }}>
            {/* SEO */}
            <div style={{ display: 'flex', gap: '25px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', flexWrap: 'wrap' }}>
              <div style={{ padding: '15px', borderRadius: '16px', background: 'rgba(6, 182, 212, 0.08)', color: 'var(--accent-cyan)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', width: '60px', flexShrink: 0 }}>
                <Search size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>تحسين محركات البحث (SEO)</h3>
                <p style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>تم تطوير KMT Store وفق أفضل ممارسات تحسين محركات البحث للظهور في النتائج الأولى.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["عناوين SEO", "Meta Description", "الكلمات المفتاحية", "روابط صديقة", "Schema Markup", "Sitemap", "Robots.txt", "تحسين السرعة", "صور محسنة"].map((item, idx) => (
                    <span key={idx} style={{ background: 'var(--bg-primary)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid var(--border-color)' }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>

            {/* Security */}
            <div style={{ display: 'flex', gap: '25px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '20px', padding: '30px', flexWrap: 'wrap' }}>
              <div style={{ padding: '15px', borderRadius: '16px', background: 'rgba(37, 99, 235, 0.08)', color: 'var(--accent-blue)', display: 'flex', alignItems: 'center', justifyContent: 'center', height: '60px', width: '60px', flexShrink: 0 }}>
                <ShieldCheck size={32} />
              </div>
              <div style={{ flex: '1 1 300px' }}>
                <h3 style={{ fontSize: '1.4rem', color: 'var(--text-primary)', marginBottom: '10px', fontWeight: '700' }}>الأمان والحماية</h3>
                <p style={{ margin: '0 0 10px', fontSize: '1.05rem' }}>تعتمد المنصة على أحدث تقنيات الحماية لضمان سلامة البيانات.</p>
                <div style={{ display: 'flex', flexWrap: 'wrap', gap: '10px' }}>
                  {["تشفير البيانات", "تسجيل العمليات", "نسخ احتياطية", "إدارة الصلاحيات", "المصادقة الثنائية", "حماية ضد الهجمات"].map((item, idx) => (
                    <span key={idx} style={{ background: 'var(--bg-primary)', padding: '5px 12px', borderRadius: '8px', fontSize: '0.9rem', border: '1px solid var(--border-color)' }}>{item}</span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* TARGET AUDIENCE & SUMMARY */}
        <section style={{ margin: '80px 0', padding: '50px 30px', background: 'var(--bg-secondary)', border: '1px solid var(--border-color)', borderRadius: '24px' }}>
          <h2 style={{ fontSize: '2rem', color: 'var(--text-primary)', marginBottom: '25px', fontWeight: '700', textAlign: 'center' }}>
            لمن تناسب منصة KMT Store؟
          </h2>
          
          <div style={{ display: 'flex', flexWrap: 'wrap', justifyContent: 'center', gap: '15px', marginBottom: '35px' }}>
            {[
              "المتاجر الإلكترونية", "الشركات التجارية", "متاجر الملابس", "متاجر الإلكترونيات",
              "متاجر الأجهزة المنزلية", "متاجر مستحضرات التجميل", "الصيدليات الإلكترونية", "متاجر الأثاث",
              "متاجر المواد الغذائية", "متاجر الأدوات الرياضية", "المكتبات", "متاجر الهدايا",
              "العلامات التجارية", "شركات التوزيع"
            ].map((adv, index) => (
              <div key={index} style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-primary)', padding: '10px 20px', borderRadius: '30px', border: '1px solid var(--border-color)' }}>
                <Store size={18} color="var(--accent-cyan)" />
                <span style={{ fontSize: '1.05rem', color: 'var(--text-primary)', fontWeight: '600' }}>{adv}</span>
              </div>
            ))}
          </div>

          <ArticleImage 
            src="/images/kmt-store/q5.jpeg" 
            alt="KMT Store Targets" 
            caption="حل متكامل لكافة أنواع المتاجر الإلكترونية والعلامات التجارية" 
          />
        </section>

        {/* CONCLUSION: WHY KMT */}
        <section style={{ margin: '80px 0' }}>
          <h2 style={{ fontSize: '2.2rem', color: 'var(--text-primary)', marginBottom: '20px', fontWeight: '700' }}>
            لماذا KMT؟
          </h2>
          <p style={{ fontSize: '1.15rem', marginBottom: '25px', textAlign: 'justify' }}>
            في KMT نؤمن أن نجاح أي متجر إلكتروني يبدأ من نظام قوي ومرن وسهل الاستخدام. لذلك قمنا بتطوير KMT Store لتكون منصة تجارة إلكترونية متكاملة تساعد الشركات على إدارة أعمالها بكفاءة، وتحسين تجربة العملاء، وزيادة المبيعات، مع إمكانية التوسع مستقبلًا دون الحاجة إلى تغيير النظام.
          </p>
          <p style={{ fontSize: '1.15rem', textAlign: 'justify', fontWeight: '600', color: 'var(--accent-cyan)' }}>
            إذا كنت تبحث عن منصة تجارة إلكترونية احترافية تجمع بين الأداء، والأمان، وسهولة الإدارة، فإن KMT Store هو الخيار الأمثل لتنمية أعمالك وتحقيق نجاح مستدام في عالم التجارة الإلكترونية.
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
            ابدأ نجاحك التجاري مع KMT Store
          </h2>
          <p style={{ fontSize: '1.25rem', color: 'var(--text-primary)', maxWidth: '750px', margin: '0 auto 35px', lineHeight: '1.6' }}>
            احصل على متجرك الإلكتروني المتكامل بلمسة احترافية وتقنيات متقدمة لدفع عجلة مبيعاتك للأمام.
          </p>
          
          <div style={{ display: 'flex', gap: '20px', justifyContent: 'center', flexWrap: 'wrap' }}>
            <a href="tel:01100665674" className="btn-primary" style={{ display: 'inline-flex', alignItems: 'center', gap: '10px', padding: '14px 35px', fontSize: '1.1rem' }}>
              <Phone size={18} />
              <span>تواصل مع فريق المبيعات: 01100665674</span>
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
