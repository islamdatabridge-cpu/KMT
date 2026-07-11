import React from 'react';
import { motion } from 'framer-motion';

export default function Privacy() {
  return (
    <div style={{ maxWidth: '900px', margin: '150px auto 100px', padding: '0 20px', direction: 'rtl' }}>
      <motion.div 
        initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.5 }}
      >
        <h1 className="gradient-text" style={{ fontSize: '3.5rem', marginBottom: '10px', textAlign: 'center' }}>
          سياسة الخصوصية
        </h1>
        <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '50px' }}>آخر تحديث: يونيو 2026</p>
        
        <div style={{ 
          background: 'var(--bg-secondary)', padding: '50px', borderRadius: '20px', 
          border: '1px solid var(--border-color)', boxShadow: '0 10px 30px rgba(0,0,0,0.1)',
          color: 'var(--text-secondary)', lineHeight: '1.9', fontSize: '1.1rem'
        }}>
          <p style={{ marginBottom: '30px' }}>
            في KMT، نحترم خصوصية زوار موقعنا ونلتزم بحماية أي معلومات يتم مشاركتها أثناء استخدام الموقع.
          </p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>المعلومات التي نجمعها</h3>
          <p style={{ marginBottom: '15px' }}>لا يتطلب موقع KMT إنشاء حساب أو تسجيل دخول.</p>
          <p style={{ marginBottom: '30px' }}>ولا نقوم بجمع أي بيانات شخصية إلا إذا قام الزائر بالتواصل معنا بشكل اختياري عبر وسائل التواصل المتاحة.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>التواصل معنا</h3>
          <p style={{ marginBottom: '15px' }}>يمكنك التواصل معنا من خلال:</p>
          <ul style={{ paddingRight: '20px', marginBottom: '15px' }}>
            <li>واتساب</li>
            <li>صفحات التواصل الاجتماعي</li>
            <li>البريد الإلكتروني (إن وجد)</li>
          </ul>
          <p style={{ marginBottom: '30px' }}>وأي معلومات يتم إرسالها عبر هذه المنصات تخضع أيضًا لسياسات الخصوصية الخاصة بكل منصة.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>ملفات تعريف الارتباط (Cookies)</h3>
          <p style={{ marginBottom: '15px' }}>قد يستخدم الموقع ملفات تعريف ارتباط أساسية أو أدوات تحليل بسيطة لتحسين أداء الموقع وتجربة المستخدم.</p>
          <p style={{ marginBottom: '30px' }}>ولا يتم استخدام هذه الملفات لتحديد هوية الزائر بشكل شخصي.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>الروابط الخارجية</h3>
          <p style={{ marginBottom: '15px' }}>يحتوي الموقع على روابط لمنصات خارجية مثل Facebook, Instagram, LinkedIn, GitHub, X, YouTube, TikTok, WhatsApp.</p>
          <p style={{ marginBottom: '30px' }}>وعند الانتقال إلى أي من هذه المنصات، تصبح خاضعًا لسياسة الخصوصية الخاصة بها.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>حماية البيانات</h3>
          <p style={{ marginBottom: '30px' }}>رغم أن الموقع لا يجمع بيانات حسابات أو معلومات حساسة، فإننا نتخذ الإجراءات المناسبة للحفاظ على أمن الموقع وسلامته.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>خصوصية الأطفال</h3>
          <p style={{ marginBottom: '30px' }}>هذا الموقع غير موجه للأطفال دون سن 13 عامًا، ولا نقوم بجمع بيانات منهم عن قصد.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>التعديلات على السياسة</h3>
          <p style={{ marginBottom: '30px' }}>قد نقوم بتحديث سياسة الخصوصية عند الحاجة، وسيتم نشر أي تعديل في هذه الصفحة مع تحديث تاريخ آخر تعديل.</p>

          <h3 style={{ color: 'var(--text-primary)', fontSize: '1.5rem', marginBottom: '15px' }}>تواصل معنا</h3>
          <p>إذا كانت لديك أي استفسارات بخصوص سياسة الخصوصية، يمكنك التواصل معنا عبر أي من وسائل الاتصال الرسمية الموجودة داخل الموقع.</p>
        </div>
      </motion.div>
    </div>
  );
}
