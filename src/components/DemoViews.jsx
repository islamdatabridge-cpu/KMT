import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Users, FlaskConical, PlusSquare, FileText, PieChart, 
  Receipt, Package, Wallet, Building2, Stethoscope, Settings,
  Search, Plus, Printer, CheckCircle2, AlertCircle, Edit, Trash, BarChart, Download, QrCode, ShoppingCart, Send
} from 'lucide-react';

const Card = ({ children, title, action }) => (
  <div style={{ background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border-color)', padding: '15px', marginBottom: '20px' }}>
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '15px', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>
      <h3 style={{ fontSize: '1.1rem', margin: 0, fontWeight: 'bold', color: 'var(--text-main)' }}>{title}</h3>
      {action}
    </div>
    {children}
  </div>
);

const Table = ({ headers, rows }) => (
  <div style={{ overflowX: 'auto' }}>
    <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
      <thead>
        <tr style={{ color: 'var(--text-muted)', background: 'var(--border-color)' }}>
          {headers.map((h, i) => <th key={i} style={{ padding: '10px', fontWeight: 'normal', borderRadius: i===0 ? '0 5px 5px 0' : i===headers.length-1 ? '5px 0 0 0' : '0' }}>{h}</th>)}
        </tr>
      </thead>
      <tbody>
        {rows.map((row, i) => (
          <tr key={i} style={{ borderBottom: '1px solid var(--border-color)' }}>
            {row.map((cell, j) => <td key={j} style={{ padding: '12px', color: j===0 ? 'var(--text-main)' : 'var(--text-muted)', fontWeight: j===0 ? 'bold' : 'normal' }}>{cell}</td>)}
          </tr>
        ))}
      </tbody>
    </table>
  </div>
);

export const PatientsView = () => {
  const [showAddModal, setShowAddModal] = useState(false);
  const [selectedMedicalFile, setSelectedMedicalFile] = useState(null);

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
      <Card title="سجل المرضى وتاريخ الزيارات" action={
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="بحث بالرقم القومي أو الهاتف..." style={{ padding: '6px 15px', borderRadius: '5px', background: 'var(--border-color)', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.8rem' }} />
          <button onClick={() => setShowAddModal(true)} style={{ background: 'var(--accent-cyan)', color: 'var(--bg-main)', border: 'none', padding: '6px 15px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem', display: 'flex', alignItems: 'center', gap: '5px' }}><Plus size={16}/> إضافة مريض</button>
        </div>
      }>
        <Table 
          headers={['الاسم', 'السن', 'الجنس', 'الهاتف', 'ملاحظات طبية', 'آخر زيارة', 'إجراء']}
          rows={[
            ['أحمد محمود علي', '34 سنة', 'ذكر', '01012345678', 'مريض سكري', '21 مايو 2026', <button onClick={() => setSelectedMedicalFile('أحمد محمود علي')} style={{background:'transparent', border:'1px solid var(--accent-blue)', color:'var(--accent-blue)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>الملف الطبي</button>],
            ['سارة إبراهيم', '28 سنة', 'أنثى', '01198765432', 'حامل - الشهر الرابع', '18 مايو 2026', <button onClick={() => setSelectedMedicalFile('سارة إبراهيم')} style={{background:'transparent', border:'1px solid var(--accent-blue)', color:'var(--accent-blue)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>الملف الطبي</button>],
            ['محمد مصطفى', '55 سنة', 'ذكر', '01234567890', 'ضغط دم مرتفع', '10 مايو 2026', <button onClick={() => setSelectedMedicalFile('محمد مصطفى')} style={{background:'transparent', border:'1px solid var(--accent-blue)', color:'var(--accent-blue)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>الملف الطبي</button>]
          ]}
        />
      </Card>

      {/* Add Patient Modal */}
      <AnimatePresence>
        {showAddModal && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ background: 'var(--bg-card)', padding: '25px', borderRadius: '15px', border: '1px solid var(--border-color)', width: '500px', maxWidth: '90%' }}>
              <h2 style={{ margin: '0 0 20px 0', color: 'var(--text-main)', borderBottom: '1px solid var(--border-color)', paddingBottom: '10px' }}>إضافة مريض جديد</h2>
              <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '15px' }}>
                <input type="text" placeholder="الاسم الرباعي" style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', gridColumn: 'span 2' }} />
                <input type="number" placeholder="العمر" style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)' }} />
                <select style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)' }}>
                  <option>ذكر</option><option>أنثى</option>
                </select>
                <input type="text" placeholder="رقم الهاتف الأساسي" style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)' }} />
                <input type="text" placeholder="رقم الواتس آب (لإرسال النتائج)" style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)' }} />
                <input type="text" placeholder="الرقم القومي" style={{ padding: '10px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', gridColumn: 'span 2' }} />
              </div>
              <div style={{ display: 'flex', gap: '10px', marginTop: '20px', justifyContent: 'flex-end' }}>
                <button onClick={() => setShowAddModal(false)} style={{ background: 'transparent', border: '1px solid var(--accent-red)', color: 'var(--accent-red)', padding: '8px 15px', borderRadius: '5px', cursor: 'pointer' }}>إلغاء</button>
                <button onClick={() => setShowAddModal(false)} style={{ background: 'var(--accent-green)', border: 'none', color: 'var(--text-main)', padding: '8px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold' }}>حفظ المريض</button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>

      {/* Medical File Modal */}
      <AnimatePresence>
        {selectedMedicalFile && (
          <div style={{ position: 'fixed', top: 0, left: 0, right: 0, bottom: 0, background: 'rgba(0,0,0,0.6)', display: 'flex', alignItems: 'center', justifyContent: 'center', zIndex: 1000 }}>
            <motion.div initial={{ scale: 0.9, opacity: 0 }} animate={{ scale: 1, opacity: 1 }} exit={{ scale: 0.9, opacity: 0 }} style={{ background: 'var(--bg-card)', padding: '25px', borderRadius: '15px', border: '1px solid var(--border-color)', width: '700px', maxWidth: '95%' }}>
              <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', borderBottom: '1px solid var(--border-color)', paddingBottom: '15px', marginBottom: '20px' }}>
                <div>
                  <h2 style={{ margin: '0', color: 'var(--text-main)' }}>الملف الطبي</h2>
                  <div style={{ color: 'var(--accent-blue)', fontSize: '0.9rem', marginTop: '5px' }}>المريض: {selectedMedicalFile}</div>
                </div>
                <button onClick={() => setSelectedMedicalFile(null)} style={{ background: 'var(--border-color)', color: 'var(--text-main)', border: 'none', width: '30px', height: '30px', borderRadius: '50%', cursor: 'pointer' }}>✕</button>
              </div>
              
              <div style={{ marginBottom: '20px', overflowX: 'auto' }}>
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ color: 'var(--text-muted)', background: 'var(--border-color)' }}>
                      <th style={{ padding: '10px' }}>التاريخ</th>
                      <th style={{ padding: '10px' }}>التحليل</th>
                      <th style={{ padding: '10px' }}>النتيجة</th>
                      <th style={{ padding: '10px' }}>الحالة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>10 مايو 2026</td>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>HbA1c</td>
                      <td style={{ padding: '10px', color: 'var(--accent-red)', fontWeight: 'bold' }}>7.2% (مرتفع)</td>
                      <td style={{ padding: '10px', color: 'var(--accent-green)' }}>معتمد</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>10 مايو 2026</td>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>Fasting Blood Sugar</td>
                      <td style={{ padding: '10px', color: 'var(--accent-red)', fontWeight: 'bold' }}>145 mg/dL</td>
                      <td style={{ padding: '10px', color: 'var(--accent-green)' }}>معتمد</td>
                    </tr>
                  </tbody>
                </table>
              </div>

              <div style={{ display: 'flex', gap: '10px', justifyContent: 'flex-end' }}>
                <button style={{ background: '#25D366', border: 'none', color: 'var(--text-main)', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Send size={16} /> إرسال النتائج عبر واتساب
                </button>
                <button style={{ background: 'var(--accent-blue)', border: 'none', color: 'var(--text-main)', padding: '10px 20px', borderRadius: '5px', cursor: 'pointer', fontWeight: 'bold', display: 'flex', alignItems: 'center', gap: '8px' }}>
                  <Printer size={16} /> طباعة التقرير الشامل
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export const TestsView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="دليل التحاليل (Tests Catalog)" action={<button style={{ background: 'var(--accent-cyan)', color: 'var(--bg-main)', border: 'none', padding: '6px 15px', borderRadius: '5px', fontWeight: 'bold', cursor: 'pointer', fontSize: '0.8rem' }}>إضافة تحليل جديد</button>}>
      <Table 
        headers={['اسم التحليل', 'القيم المرجعية (Normal Range)', 'الوحدة', 'السعر النقدي', 'سعر التعاقد', 'الكاشف المرتبط', 'إجراء']}
        rows={[
          ['CBC (صورة دم كاملة)', 'Male: 13.5-17.5 | Female: 12.0-15.5', 'g/dL', '150 جنيه', '120 جنيه', 'CBC Reagent Kit', <Edit size={16} color="var(--accent-blue)" cursor="pointer"/>],
          ['Fasting Blood Sugar (سكر صائم)', '70 - 99', 'mg/dL', '80 جنيه', '65 جنيه', 'Glucose Kit', <Edit size={16} color="var(--accent-blue)" cursor="pointer"/>],
          ['TSH (الغدة الدرقية)', '0.4 - 4.0', 'mIU/L', '250 جنيه', '200 جنيه', 'TSH Reagent', <Edit size={16} color="var(--accent-blue)" cursor="pointer"/>]
        ]}
      />
    </Card>
  </motion.div>
);

export const NewOrderView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <Card title="بيانات المريض والجهة">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <input type="text" placeholder="ابحث برقم الهاتف لسحب بيانات المريض..." style={{ padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }} />
        <input type="text" placeholder="اسم المريض (جديد)" style={{ padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }} />
        <div style={{ display: 'flex', gap: '10px' }}>
          <select style={{ flex: 1, padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }}>
            <option>دفع نقدي (مريض خاص)</option>
            <option>تعاقد: شركة البترول</option>
            <option>تعاقد: نقابة المهندسين</option>
          </select>
          <select style={{ flex: 1, padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }}>
            <option>الطبيب المحول (اختياري)</option>
            <option>د. أحمد زكي (باطنة)</option>
          </select>
        </div>
      </div>
    </Card>
    <Card title="نقطة البيع (التحاليل والدفع)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', gap: '10px' }}>
          <input type="text" placeholder="ابحث عن التحليل..." style={{ flex: 1, padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }} />
          <button style={{ background: 'var(--accent-green)', border: 'none', color: 'var(--text-main)', padding: '0 15px', borderRadius: '5px', cursor: 'pointer', fontSize: '0.8rem' }}>إضافة</button>
        </div>
        <div style={{ background: 'var(--border-color)', padding: '15px', borderRadius: '5px', minHeight: '80px', display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', fontSize: '0.85rem' }}><span>CBC</span> <span>150 جنيه</span></div>
          <div style={{ display: 'flex', justifyContent: 'space-between', color: 'var(--text-main)', fontSize: '0.85rem' }}><span>Lipid Profile</span> <span>220 جنيه</span></div>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)', borderTop: '1px solid var(--border-color)', paddingTop: '10px' }}>
          <span>الإجمالي:</span>
          <span style={{ color: 'var(--accent-green)' }}>370 جنيه</span>
        </div>
        <button style={{ width: '100%', background: 'var(--accent-cyan)', color: 'var(--bg-main)', padding: '10px', border: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '0.9rem', cursor: 'pointer', display: 'flex', justifyContent: 'center', alignItems: 'center', gap: '8px' }}>
          <Printer size={18} /> حفظ الطلب وطباعة الباركود
        </button>
      </div>
    </Card>
  </motion.div>
);

export const ResultsView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="اعتماد النتائج (Auto-Validation)">
      <div style={{ display: 'flex', gap: '10px', marginBottom: '15px' }}>
        <button style={{ background: 'var(--accent-blue)', color: 'var(--text-main)', border: 'none', padding: '6px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>جاري العمل (12)</button>
        <button style={{ background: 'var(--border-color)', color: 'var(--text-muted)', border: '1px solid var(--border-color)', padding: '6px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>جاهز للاعتماد (4)</button>
        <button style={{ background: 'var(--border-color)', color: 'var(--text-muted)', border: '1px solid var(--border-color)', padding: '6px 15px', borderRadius: '20px', fontSize: '0.8rem' }}>تمت المراجعة</button>
      </div>
      <Table 
        headers={['رقم العينة', 'المريض', 'التحليل', 'النتيجة المدخلة', 'المدى الطبيعي', 'حالة النتيجة', 'إجراء']}
        rows={[
          ['#5821', 'أحمد محمود', 'Fasting Blood Sugar', <input type="text" defaultValue="145" style={{width:'60px', padding:'3px', background:'var(--accent-red)20', color:'var(--accent-red)', border:'1px solid var(--accent-red)', borderRadius:'3px', textAlign:'center', fontWeight:'bold'}}/>, '70 - 99', <span style={{color:'var(--accent-red)', fontSize:'0.75rem'}}><AlertCircle size={12}/> قيمة مرتفعة حرجة</span>, <button style={{background:'var(--accent-green)', border:'none', color:'var(--text-main)', borderRadius:'5px', padding:'4px 10px', cursor:'pointer', fontSize:'0.75rem'}}>اعتماد</button>],
          ['#5822', 'سارة إبراهيم', 'Hemoglobin', <input type="text" defaultValue="13.2" style={{width:'60px', padding:'3px', background:'var(--accent-green)20', color:'var(--accent-green)', border:'1px solid var(--accent-green)', borderRadius:'3px', textAlign:'center', fontWeight:'bold'}}/>, '12.0 - 15.5', <span style={{color:'var(--accent-green)', fontSize:'0.75rem'}}><CheckCircle2 size={12}/> طبيعي</span>, <button style={{background:'var(--accent-green)', border:'none', color:'var(--text-main)', borderRadius:'5px', padding:'4px 10px', cursor:'pointer', fontSize:'0.75rem'}}>اعتماد</button>]
        ]}
      />
    </Card>
  </motion.div>
);

export const ReportsView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <div style={{ display: 'grid', gridTemplateColumns: 'repeat(3, 1fr)', gap: '15px', marginBottom: '20px' }}>
      <Card title="تقرير مالي"><div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent-green)'}}>125,000 ج.م</div><div style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>أرباح الشهر الحالي</div></Card>
      <Card title="تقرير تشغيلي"><div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent-blue)'}}>24 دقيقة</div><div style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>متوسط وقت إصدار النتيجة (TAT)</div></Card>
      <Card title="تقرير طبي"><div style={{fontSize:'1.5rem', fontWeight:'bold', color:'var(--accent-orange)'}}>CBC</div><div style={{fontSize:'0.75rem', color:'var(--text-muted)'}}>التحليل الأكثر طلباً هذا الشهر</div></Card>
    </div>
    <Card title="الإيرادات النقدية الشهرية" action={<button style={{ background: 'var(--border-color)', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '6px 15px', borderRadius: '5px', fontSize: '0.8rem', display:'flex', gap:'5px', alignItems:'center' }}><Download size={14}/> تصدير PDF/Excel</button>}>
      <div style={{ display: 'flex', alignItems: 'flex-end', justifyContent: 'space-around', padding: '20px 0', borderTop: '1px solid var(--border-color)', height: '200px' }}>
        {[
          { height: '40%', label: 'يناير', value: '45k' },
          { height: '60%', label: 'فبراير', value: '62k' },
          { height: '50%', label: 'مارس', value: '55k' },
          { height: '80%', label: 'أبريل', value: '88k' },
          { height: '100%', label: 'مايو', value: '125k', active: true }
        ].map((bar, i) => (
          <div key={i} style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '10px', height: '100%', justifyContent: 'flex-end' }}>
            <span style={{ fontSize: '0.75rem', color: bar.active ? 'var(--accent-green)' : 'var(--text-muted)' }}>{bar.value}</span>
            <div style={{ width: '40px', height: bar.height, background: bar.active ? 'var(--accent-green)' : 'var(--accent-blue)', borderRadius: '5px 5px 0 0', transition: 'height 0.5s' }}></div>
            <span style={{ fontSize: '0.8rem', color: 'var(--text-muted)' }}>{bar.label}</span>
          </div>
        ))}
      </div>
    </Card>
  </motion.div>
);

export const SalesView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="المبيعات والفواتير (Invoicing)">
      <Table 
        headers={['رقم الفاتورة', 'المريض / الجهة', 'الإجمالي', 'الخصم', 'الصافي', 'المدفوع', 'المتبقي', 'حالة الدفع']}
        rows={[
          ['INV-1001', 'أحمد محمود', '370', '0', '370', '370', '0', <span style={{color:'var(--accent-green)'}}>خالص</span>],
          ['INV-1002', 'شركة البترول', '1500', '200', '1300', '0', '1300', <span style={{color:'var(--accent-orange)'}}>آجل (مطالبة)</span>],
          ['INV-1003', 'سارة إبراهيم', '450', '50', '400', '200', '200', <span style={{color:'var(--accent-red)'}}>متبقي جزء</span>]
        ]}
      />
    </Card>
  </motion.div>
);

export const InventoryView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="المخزون واللوجستيات" action={<button style={{ background: 'var(--accent-cyan)', color: 'var(--bg-main)', border: 'none', padding: '6px 15px', borderRadius: '5px', fontWeight: 'bold', fontSize: '0.8rem' }}>تسجيل وارد جديد</button>}>
      <Table 
        headers={['الصنف', 'التصنيف', 'الكمية الحالية', 'حد إعادة الطلب', 'تاريخ الصلاحية', 'حالة المخزون']}
        rows={[
          ['CBC Reagent Kit', 'كواشف', '5', '10', '2027-01-15', <span style={{color:'var(--accent-red)', fontWeight:'bold'}}>تحذير: نفاذ قريب</span>],
          ['أنابيب سحب دم (أحمر)', 'مستلزمات', '450', '100', '-', <span style={{color:'var(--accent-green)'}}>آمن</span>],
          ['Glucose Kit', 'كواشف', '22', '15', '2026-08-30', <span style={{color:'var(--accent-green)'}}>آمن</span>]
        ]}
      />
    </Card>
  </motion.div>
);

export const ExpensesView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="المصروفات">
      <Table 
        headers={['البيان', 'التصنيف', 'المبلغ', 'التاريخ', 'المسؤول', 'الإيصال']}
        rows={[
          ['فاتورة كهرباء شهر مايو', 'مصروفات ثابتة', '1200 جنيه', '20 مايو 2026', 'محمود (حسابات)', <FileText size={16} color="var(--text-muted)" cursor="pointer"/>],
          ['شراء مستلزمات نظافة', 'مصروفات متغيرة', '350 جنيه', '18 مايو 2026', 'أحمد (استقبال)', <FileText size={16} color="var(--text-muted)" cursor="pointer"/>],
          ['صيانة جهاز السنترفيوج', 'صيانة', '2500 جنيه', '15 مايو 2026', 'د. إسلام', <FileText size={16} color="var(--text-muted)" cursor="pointer"/>]
        ]}
      />
    </Card>
  </motion.div>
);

export const PurchasesView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="المشتريات وإدارة الموردين" action={<button style={{ background: 'var(--accent-cyan)', color: 'var(--bg-main)', border: 'none', padding: '6px 15px', borderRadius: '5px', fontWeight: 'bold', fontSize: '0.8rem' }}>إضافة فاتورة شراء</button>}>
      <Table 
        headers={['رقم الفاتورة', 'المورد', 'الأصناف المشتراة', 'الإجمالي', 'التاريخ', 'الحالة']}
        rows={[
          ['PUR-801', 'الشركة المتحدة للمستلزمات', 'أنابيب سحب، كحول، قطن', '5,400 ج.م', '20 مايو 2026', <span style={{color:'var(--accent-green)'}}>تم الاستلام والدفع</span>],
          ['PUR-802', 'ألفا ميديكال للكواشف', 'كواشف CBC و Glucose', '12,500 ج.م', '18 مايو 2026', <span style={{color:'var(--accent-orange)'}}>آجل - لم يسدد بالكامل</span>]
        ]}
      />
    </Card>
  </motion.div>
);

export const CompaniesView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="الشركات والتعاقدات (B2B)">
      <Table 
        headers={['اسم الجهة', 'نسبة الخصم', 'سقف الائتمان', 'إجمالي الديون المستحقة', 'حالة التعاقد', 'إجراء']}
        rows={[
          ['شركة البترول الوطنية', '15%', '50,000 ج.م', '12,400 ج.م', <span style={{color:'var(--accent-green)'}}>نشط</span>, <button style={{background:'transparent', border:'1px solid var(--accent-blue)', color:'var(--accent-blue)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>إصدار مطالبة</button>],
          ['نقابة المهندسين', '25%', '100,000 ج.م', '85,000 ج.م', <span style={{color:'var(--accent-orange)'}}>اقترب من السقف</span>, <button style={{background:'transparent', border:'1px solid var(--accent-blue)', color:'var(--accent-blue)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>إصدار مطالبة</button>]
        ]}
      />
    </Card>
  </motion.div>
);

export const DoctorsView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="الأطباء المحولين (Referring Doctors)">
      <Table 
        headers={['اسم الطبيب', 'التخصص', 'عدد الحالات المُحولة', 'التحليل الأكثر طلباً', 'نسبة التعاون', 'إجراء']}
        rows={[
          ['د. أحمد زكي', 'باطنة وسكر', '145 حالة', 'HbA1c', '10%', <button style={{background:'transparent', border:'1px solid var(--accent-green)', color:'var(--accent-green)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>كشف حساب</button>],
          ['د. سمر عبد الله', 'نساء وتوليد', '89 حالة', 'Pregnancy Test', '0%', <button style={{background:'transparent', border:'1px solid var(--accent-green)', color:'var(--accent-green)', borderRadius:'5px', padding:'3px 8px', cursor:'pointer'}}>كشف حساب</button>]
        ]}
      />
    </Card>
  </motion.div>
);

export const UsersView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }}>
    <Card title="المستخدمين وصلاحيات الوصول (Access Control)">
      <Table 
        headers={['الاسم', 'اسم المستخدم', 'الدور (Role)', 'آخر تسجيل دخول', 'حالة الحساب', 'إجراء']}
        rows={[
          ['د. إسلام', 'islam_admin', <span style={{background:'var(--accent-blue)20', color:'var(--accent-blue)', padding:'2px 8px', borderRadius:'10px'}}>مدير النظام</span>, 'منذ دقيقتين', <span style={{color:'var(--accent-green)'}}>مفعل</span>, <Edit size={16} color="var(--text-muted)" cursor="pointer"/>],
          ['أحمد محمود', 'ahmed_rec', <span style={{background:'var(--accent-orange)20', color:'var(--accent-orange)', padding:'2px 8px', borderRadius:'10px'}}>موظف استقبال</span>, 'اليوم 08:00 AM', <span style={{color:'var(--accent-green)'}}>مفعل</span>, <Edit size={16} color="var(--text-muted)" cursor="pointer"/>],
          ['د. منى', 'mona_lab', <span style={{background:'var(--accent-green)20', color:'var(--accent-green)', padding:'2px 8px', borderRadius:'10px'}}>طبيب معمل / كيميائي</span>, 'أمس 14:30 PM', <span style={{color:'var(--accent-green)'}}>مفعل</span>, <Edit size={16} color="var(--text-muted)" cursor="pointer"/>]
        ]}
      />
    </Card>
  </motion.div>
);

export const SettingsView = () => (
  <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
    <Card title="إعدادات الهوية (تظهر على التقارير)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '5px' }}>اسم المعمل المطبوع</label>
          <input type="text" defaultValue="KMT LAB - معمل كيمت للتحاليل الطبية" style={{ width: '100%', padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }} />
        </div>
        <div>
          <label style={{ fontSize: '0.8rem', color: 'var(--text-muted)', display: 'block', marginBottom: '5px' }}>أرقام الهواتف (تطبع أسفل التقرير)</label>
          <input type="text" defaultValue="01100665674 - 01012345678" style={{ width: '100%', padding: '8px', background: 'var(--border-color)', border: '1px solid var(--border-color)', borderRadius: '5px', color: 'var(--text-main)', fontSize: '0.85rem' }} />
        </div>
        <button style={{ width: '100px', background: 'var(--accent-cyan)', color: 'var(--bg-main)', padding: '8px', border: 'none', borderRadius: '5px', fontWeight: 'bold', fontSize: '0.85rem', cursor: 'pointer' }}>
          حفظ
        </button>
      </div>
    </Card>
    <Card title="إعدادات الربط التقني (Integrations)">
      <div style={{ display: 'flex', flexDirection: 'column', gap: '15px' }}>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--border-color)', padding: '10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>ربط أجهزة التحاليل الآلي (LIS)</span>
          <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem', fontWeight: 'bold' }}>متصل نشط</span>
        </div>
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--border-color)', padding: '10px', borderRadius: '5px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>بوابة إرسال WhatsApp التلقائية</span>
          <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem', fontWeight: 'bold' }}>متصل</span>
        </div>
        
        <div style={{ background: 'var(--bg-main)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', flexDirection: 'column', alignItems: 'center', gap: '15px' }}>
          <div style={{ background: 'var(--text-main)', padding: '10px', borderRadius: '10px' }}>
            <QrCode size={120} color="var(--bg-main)" />
          </div>
          <div style={{ textAlign: 'center' }}>
            <div style={{ color: 'var(--text-main)', fontWeight: 'bold', marginBottom: '5px' }}>واتساب ويب (WhatsApp Web)</div>
            <div style={{ color: 'var(--text-muted)', fontSize: '0.8rem', marginBottom: '15px' }}>قم بمسح الكود أعلاه من تطبيق واتساب لربط رقم المعمل وإرسال النتائج آلياً للمرضى.</div>
            <button style={{ background: 'var(--accent-red)', color: 'var(--text-main)', border: 'none', padding: '6px 15px', borderRadius: '5px', fontSize: '0.8rem', cursor: 'pointer' }}>قطع الاتصال (Logout)</button>
          </div>
        </div>

        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', background: 'var(--border-color)', padding: '10px', borderRadius: '5px', marginTop: '10px' }}>
          <span style={{ fontSize: '0.85rem', color: 'var(--text-main)' }}>النسخ الاحتياطي السحابي (Backup)</span>
          <span style={{ color: 'var(--accent-green)', fontSize: '0.8rem', fontWeight: 'bold' }}>مفعل (يومياً 2:00 AM)</span>
        </div>
      </div>
    </Card>
  </motion.div>
);
