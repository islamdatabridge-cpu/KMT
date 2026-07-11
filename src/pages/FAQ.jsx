import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronDown } from 'lucide-react';

export default function FAQ() {
  const faqs = [
    { q: "ما هي الخدمات التي تقدمها KMT؟", a: "نقدم حلول برمجية متكاملة تشمل تطوير المواقع الإلكترونية، تطبيقات الهواتف الذكية، أنظمة ERP، تطوير وتخصيص Odoo ERP، الأمن السيبراني، وتطوير البرمجيات المخصصة للشركات." },
    { q: "هل يمكنكم تطوير نظام مخصص لشركتي؟", a: "نعم، نقوم بتطوير أنظمة مخصصة بالكامل وفقًا لاحتياجات عملك، مع إمكانية التوسع وإضافة ميزات مستقبلية." },
    { q: "هل تقدمون خدمات Odoo ERP؟", a: "نعم، نقدم خدمات تركيب، تخصيص، تطوير، تكامل، وصيانة أنظمة Odoo ERP بما يتناسب مع طبيعة أعمال العملاء." },
    { q: "هل تطورون تطبيقات Android و iOS؟", a: "نعم، نقوم بتطوير تطبيقات الهواتف الذكية لكلا النظامين مع التركيز على الأداء وتجربة المستخدم." },
    { q: "هل توفرون خدمات تصميم وتطوير المواقع الإلكترونية؟", a: "نعم، نقوم بتطوير مواقع الشركات، المتاجر الإلكترونية، الأنظمة الإلكترونية، ولوحات التحكم باستخدام أحدث التقنيات." },
    { q: "هل تقدمون خدمات الأمن السيبراني؟", a: "نعم، نقدم خدمات متعلقة بالأمن السيبراني، وتأمين التطبيقات والمواقع، وتحليل الثغرات، وتطبيق أفضل الممارسات الأمنية." },
    { q: "هل يمكنكم تطوير متجر إلكتروني؟", a: "بالتأكيد، نقوم بتطوير متاجر إلكترونية احترافية مع بوابات الدفع وإدارة المنتجات والطلبات." },
    { q: "كم تستغرق مدة تنفيذ المشروع؟", a: "تعتمد مدة التنفيذ على حجم المشروع ومتطلباته، وبعد دراسة المشروع نقدم جدولًا زمنيًا واضحًا." },
    { q: "هل تقدمون الدعم الفني بعد تسليم المشروع؟", a: "نعم، نوفر خدمات الدعم الفني والصيانة والتحديثات حسب الاتفاق مع العميل." },
    { q: "كيف يمكنني طلب عرض سعر؟", a: "يمكنك التواصل معنا عبر زر WhatsApp أو من خلال صفحاتنا الرسمية على وسائل التواصل الاجتماعي، وسنقوم بدراسة مشروعك وإرسال عرض سعر مناسب." },
    { q: "هل تعملون مع العملاء خارج مصر؟", a: "نعم، نقدم خدماتنا للعملاء داخل مصر وخارجها، ويمكن إدارة المشاريع والتواصل بالكامل عن بُعد." },
    { q: "هل يمكن تعديل مشروع قائم بالفعل؟", a: "نعم، يمكننا تطوير أو تحسين الأنظمة والمواقع والتطبيقات الموجودة بالفعل، سواء قمنا بتنفيذها أو تم تطويرها بواسطة جهة أخرى." },
    { q: "ما هي التقنيات التي تستخدمونها؟", a: "نعمل باستخدام أحدث التقنيات مثل: Odoo, Python, PHP, Laravel, JavaScript, React, Flutter, Dart, Node.js, MySQL, PostgreSQL, REST APIs." },
    { q: "هل البيانات الخاصة بعملي آمنة؟", a: "نلتزم بتطبيق أفضل ممارسات الأمان والسرية للحفاظ على بيانات ومعلومات عملائنا، ولا تتم مشاركة أي بيانات مع أي طرف ثالث دون موافقة العميل." },
    { q: "كيف أبدأ العمل مع KMT؟", a: "كل ما عليك هو التواصل معنا عبر WhatsApp أو أي من حساباتنا الرسمية، وشرح فكرة مشروعك، وسيتواصل معك فريقنا لمناقشة التفاصيل ووضع خطة التنفيذ المناسبة." }
  ];

  const [openIndex, setOpenIndex] = useState(null);

  return (
    <div style={{ maxWidth: '900px', margin: '150px auto 100px', padding: '0 20px', direction: 'rtl' }}>
      <h1 className="gradient-text" style={{ fontSize: '3rem', marginBottom: '20px', textAlign: 'center' }}>
        الأسئلة الشائعة
      </h1>
      <p style={{ textAlign: 'center', color: 'var(--text-secondary)', marginBottom: '50px', fontSize: '1.2rem' }}>
        أكثر الأسئلة التي يطرحها عملاؤنا حول خدماتنا وكيفية العمل معنا.
      </p>
      
      <div style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
        {faqs.map((faq, index) => (
          <motion.div 
            key={index} 
            initial={{ opacity: 0, y: 20 }} whileInView={{ opacity: 1, y: 0 }} viewport={{ once: true }} transition={{ delay: index * 0.05 }}
            style={{
              background: 'var(--bg-secondary)', borderRadius: '15px', border: '1px solid var(--border-color)',
              overflow: 'hidden', boxShadow: '0 5px 15px rgba(0,0,0,0.05)'
            }}
          >
            <div 
              style={{ padding: '25px', display: 'flex', justifyContent: 'space-between', alignItems: 'center', cursor: 'pointer' }}
              onClick={() => setOpenIndex(openIndex === index ? null : index)}
            >
              <h3 style={{ fontSize: '1.2rem', color: 'var(--text-primary)', margin: 0, paddingLeft: '20px', lineHeight: '1.5' }}>
                {faq.q}
              </h3>
              <motion.div animate={{ rotate: openIndex === index ? 180 : 0 }}>
                <ChevronDown color="var(--accent-cyan)" size={24} />
              </motion.div>
            </div>
            
            <AnimatePresence>
              {openIndex === index && (
                <motion.div 
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: 'auto', opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  style={{ overflow: 'hidden' }}
                >
                  <div style={{ padding: '0 25px 25px', color: 'var(--text-secondary)', lineHeight: '1.8', fontSize: '1.05rem' }}>
                    {faq.a}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </motion.div>
        ))}
      </div>
    </div>
  );
}
