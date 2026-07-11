import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip as RechartsTooltip, Legend, ResponsiveContainer,
  PieChart, Pie, Cell, BarChart, Bar, AreaChart, Area
} from 'recharts';
import { Download, Calendar, Filter, DollarSign, Activity, AlertCircle, PieChart as PieIcon, TrendingUp, Clock, Users } from 'lucide-react';

const Card = ({ children, title, action, icon: Icon, color = 'var(--accent-blue)' }) => (
  <div style={{ background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border-color)', overflow: 'hidden' }}>
    <div style={{ padding: '15px 20px', borderBottom: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
      <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
        {Icon && <div style={{ background: `${color}15`, padding: '8px', borderRadius: '8px' }}><Icon size={18} color={color} /></div>}
        <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: 'bold', color: 'var(--text-main)' }}>{title}</h3>
      </div>
      {action && <div>{action}</div>}
    </div>
    <div style={{ padding: '20px' }}>
      {children}
    </div>
  </div>
);

const financialData = [
  { name: '1 مايو', cash: 4000, visa: 2400, credit: 1200 },
  { name: '5 مايو', cash: 3000, visa: 1398, credit: 2210 },
  { name: '10 مايو', cash: 2000, visa: 9800, credit: 2290 },
  { name: '15 مايو', cash: 2780, visa: 3908, credit: 2000 },
  { name: '20 مايو', cash: 1890, visa: 4800, credit: 2181 },
  { name: '25 مايو', cash: 2390, visa: 3800, credit: 2500 },
];

const medicalData = [
  { name: 'CBC', value: 400 },
  { name: 'Fasting Sugar', value: 300 },
  { name: 'Lipid Profile', value: 300 },
  { name: 'Liver Enzymes', value: 200 },
  { name: 'TSH', value: 150 },
];
const COLORS = ['#3b82f6', '#10b981', '#f59e0b', '#ef4444', '#8b5cf6'];

const operationalData = [
  { name: 'السبت', tat: 25, target: 30 },
  { name: 'الأحد', tat: 28, target: 30 },
  { name: 'الاثنين', tat: 35, target: 30 },
  { name: 'الثلاثاء', tat: 22, target: 30 },
  { name: 'الأربعاء', tat: 24, target: 30 },
];

export default function ReportsAnalytics() {
  const [activeTab, setActiveTab] = useState('financial');

  const TabButton = ({ id, label, icon: Icon }) => (
    <button 
      onClick={() => setActiveTab(id)}
      style={{
        display: 'flex', alignItems: 'center', gap: '8px',
        padding: '10px 20px', border: 'none', borderRadius: '8px', cursor: 'pointer', fontWeight: 'bold', fontSize: '0.9rem',
        background: activeTab === id ? 'var(--accent-blue)' : 'transparent',
        color: activeTab === id ? '#ffffff' : 'var(--text-muted)',
        transition: 'all 0.3s'
      }}
    >
      <Icon size={18} /> {label}
    </button>
  );

  return (
    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
      
      {/* Global Filters */}
      <div style={{ background: 'var(--bg-card)', padding: '15px', borderRadius: '10px', border: '1px solid var(--border-color)', display: 'flex', justifyContent: 'space-between', alignItems: 'center', flexWrap: 'wrap', gap: '15px' }}>
        <div style={{ display: 'flex', gap: '10px', alignItems: 'center' }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-main)', padding: '8px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem' }}>
            <Calendar size={16} color="var(--accent-blue)" />
            <select style={{ background: 'transparent', border: 'none', color: 'var(--text-main)', fontWeight: 'bold' }}>
              <option>الشهر الحالي</option>
              <option>اليوم</option>
              <option>أمس</option>
              <option>آخر 7 أيام</option>
              <option>تخصيص...</option>
            </select>
          </div>
          
          <div style={{ display: 'flex', alignItems: 'center', gap: '8px', background: 'var(--bg-main)', padding: '8px 15px', borderRadius: '8px', border: '1px solid var(--border-color)', color: 'var(--text-main)', fontSize: '0.85rem', cursor: 'pointer' }}>
            <Filter size={16} color="var(--accent-orange)" />
            <span>فلاتر متقدمة (الفرع، الطبيب، الشركة)</span>
          </div>
        </div>

        <div style={{ display: 'flex', gap: '10px' }}>
          <button style={{ background: 'transparent', border: '1px solid var(--border-color)', color: 'var(--text-main)', padding: '8px 15px', borderRadius: '8px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
            <Download size={16} color="var(--accent-green)" /> تصدير Excel
          </button>
          <button style={{ background: 'var(--accent-red)', border: 'none', color: '#fff', padding: '8px 15px', borderRadius: '8px', fontSize: '0.85rem', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '5px', fontWeight: 'bold' }}>
            <Download size={16} /> تصدير PDF
          </button>
        </div>
      </div>

      {/* Tabs */}
      <div style={{ display: 'flex', gap: '10px', background: 'var(--bg-card)', padding: '10px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
        <TabButton id="financial" label="الأداء المالي (Financial)" icon={DollarSign} />
        <TabButton id="operational" label="الأداء التشغيلي (Operational)" icon={Activity} />
        <TabButton id="medical" label="الإحصائيات الطبية (Medical)" icon={PieIcon} />
      </div>

      {/* Tab Content */}
      <AnimatePresence mode="wait">
        
        {/* FINANCIAL TAB */}
        {activeTab === 'financial' && (
          <motion.div key="financial" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(250px, 1fr))', gap: '15px' }}>
              <div style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '5px' }}>إجمالي الإيرادات (المبيعات)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)' }}>245,000 ج.م</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-green)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '5px' }}><TrendingUp size={12}/> +12.5% عن الشهر الماضي</div>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '10px', border: '1px solid var(--border-color)' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '5px' }}>إجمالي المصروفات والمستهلكات</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--text-main)' }}>85,400 ج.م</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--accent-red)', display: 'flex', alignItems: 'center', gap: '3px', marginTop: '5px' }}><TrendingUp size={12}/> +4.2% عن الشهر الماضي</div>
              </div>
              <div style={{ background: 'var(--bg-card)', padding: '20px', borderRadius: '10px', border: '1px solid var(--accent-blue)' }}>
                <div style={{ color: 'var(--text-muted)', fontSize: '0.85rem', marginBottom: '5px' }}>صافي الأرباح (Net Profit)</div>
                <div style={{ fontSize: '1.8rem', fontWeight: 'bold', color: 'var(--accent-blue)' }}>159,600 ج.م</div>
                <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '5px' }}>تم خصم التكاليف آلياً</div>
              </div>
            </div>

            <Card title="إجمالي الإيرادات والتحصيل (Cash Flow)" icon={TrendingUp}>
              <div style={{ height: '300px', width: '100%' }}>
                <ResponsiveContainer width="100%" height="100%">
                  <AreaChart data={financialData} margin={{ top: 10, right: 30, left: 0, bottom: 0 }}>
                    <defs>
                      <linearGradient id="colorCash" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-green)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent-green)" stopOpacity={0}/>
                      </linearGradient>
                      <linearGradient id="colorVisa" x1="0" y1="0" x2="0" y2="1">
                        <stop offset="5%" stopColor="var(--accent-blue)" stopOpacity={0.3}/>
                        <stop offset="95%" stopColor="var(--accent-blue)" stopOpacity={0}/>
                      </linearGradient>
                    </defs>
                    <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                    <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} tickMargin={10} />
                    <YAxis stroke="var(--text-muted)" fontSize={12} tickFormatter={(value) => `${value/1000}k`} />
                    <RechartsTooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)' }} />
                    <Legend />
                    <Area type="monotone" dataKey="cash" name="نقدي (Cash)" stroke="var(--accent-green)" fillOpacity={1} fill="url(#colorCash)" />
                    <Area type="monotone" dataKey="visa" name="شبكة (Visa)" stroke="var(--accent-blue)" fillOpacity={1} fill="url(#colorVisa)" />
                    <Area type="monotone" dataKey="credit" name="آجل (الشركات)" stroke="var(--accent-orange)" fill="transparent" strokeDasharray="5 5" />
                  </AreaChart>
                </ResponsiveContainer>
              </div>
            </Card>

            <Card title="تقرير المديونيات للشركات وتنبيهات حد الائتمان" icon={AlertCircle} color="var(--accent-red)">
              <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
                <thead>
                  <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}>
                    <th style={{ padding: '10px' }}>الشركة (التعاقد)</th>
                    <th style={{ padding: '10px' }}>إجمالي الفواتير</th>
                    <th style={{ padding: '10px' }}>المسدد</th>
                    <th style={{ padding: '10px' }}>المتبقي (المديونية)</th>
                    <th style={{ padding: '10px' }}>حد الائتمان</th>
                    <th style={{ padding: '10px' }}>الحالة</th>
                  </tr>
                </thead>
                <tbody>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>نقابة المهندسين</td>
                    <td style={{ padding: '10px', color: 'var(--text-main)' }}>45,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--accent-green)' }}>20,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--accent-red)', fontWeight: 'bold' }}>25,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--text-muted)' }}>20,000 ج.م</td>
                    <td style={{ padding: '10px' }}><span style={{ background: 'var(--accent-red)', color: '#fff', padding: '3px 8px', borderRadius: '15px', fontSize: '0.7rem' }}>تخطى الحد</span></td>
                  </tr>
                  <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                    <td style={{ padding: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>شركة بوبا (Bupa)</td>
                    <td style={{ padding: '10px', color: 'var(--text-main)' }}>80,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--accent-green)' }}>70,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--accent-orange)', fontWeight: 'bold' }}>10,000 ج.م</td>
                    <td style={{ padding: '10px', color: 'var(--text-muted)' }}>50,000 ج.م</td>
                    <td style={{ padding: '10px' }}><span style={{ background: 'var(--accent-green)', color: '#fff', padding: '3px 8px', borderRadius: '15px', fontSize: '0.7rem' }}>آمن</span></td>
                  </tr>
                </tbody>
              </table>
            </Card>
          </motion.div>
        )}

        {/* OPERATIONAL TAB */}
        {activeTab === 'operational' && (
          <motion.div key="operational" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <Card title="معدل وقت إنجاز التحليل (TAT)" icon={Clock} color="var(--accent-orange)">
                <div style={{ height: '250px', width: '100%' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <BarChart data={operationalData} margin={{ top: 10, right: 10, left: -20, bottom: 0 }}>
                      <CartesianGrid strokeDasharray="3 3" stroke="var(--border-color)" vertical={false} />
                      <XAxis dataKey="name" stroke="var(--text-muted)" fontSize={12} />
                      <YAxis stroke="var(--text-muted)" fontSize={12} />
                      <RechartsTooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)' }} />
                      <Legend />
                      <Bar dataKey="tat" name="الوقت الفعلي (دقيقة)" fill="var(--accent-blue)" radius={[4, 4, 0, 0]} />
                      <Bar dataKey="target" name="الوقت القياسي" fill="var(--accent-green)" radius={[4, 4, 0, 0]} />
                    </BarChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title="إنتاجية الموظفين (Staff Productivity)" icon={Users} color="var(--accent-blue)">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '10px' }}>الموظف</th>
                      <th style={{ padding: '10px' }}>الدور</th>
                      <th style={{ padding: '10px' }}>عينات مسحوبة</th>
                      <th style={{ padding: '10px' }}>نتائج معتمدة</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>د. محمد صالح</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>كيميائي</td>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>-</td>
                      <td style={{ padding: '10px', color: 'var(--accent-green)', fontWeight: 'bold' }}>145</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-main)', fontWeight: 'bold' }}>أحمد سعيد</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>استقبال وسحب</td>
                      <td style={{ padding: '10px', color: 'var(--accent-blue)', fontWeight: 'bold' }}>82</td>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>-</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </motion.div>
        )}

        {/* MEDICAL TAB */}
        {activeTab === 'medical' && (
          <motion.div key="medical" initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }} style={{ display: 'flex', flexDirection: 'column', gap: '20px' }}>
             <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '20px' }}>
              <Card title="التحاليل الأكثر طلباً (Top Requested Tests)" icon={PieIcon} color="var(--accent-green)">
                <div style={{ height: '300px', width: '100%', position: 'relative' }}>
                  <ResponsiveContainer width="100%" height="100%">
                    <PieChart>
                      <Pie
                        data={medicalData}
                        cx="50%"
                        cy="50%"
                        innerRadius={80}
                        outerRadius={110}
                        paddingAngle={5}
                        dataKey="value"
                      >
                        {medicalData.map((entry, index) => (
                          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                        ))}
                      </Pie>
                      <RechartsTooltip contentStyle={{ background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '8px', color: 'var(--text-main)' }} />
                      <Legend />
                    </PieChart>
                  </ResponsiveContainer>
                </div>
              </Card>

              <Card title="تقرير الحالات الحرجة (Critical Value Alerts)" icon={AlertCircle} color="var(--accent-red)">
                <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.85rem' }}>
                  <thead>
                    <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}>
                      <th style={{ padding: '10px' }}>المريض</th>
                      <th style={{ padding: '10px' }}>التحليل</th>
                      <th style={{ padding: '10px' }}>النتيجة</th>
                      <th style={{ padding: '10px' }}>إجراء النظام</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>ياسين محمود</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Potassium (K)</td>
                      <td style={{ padding: '10px', color: 'var(--accent-red)', fontWeight: 'bold' }}>6.8 mEq/L (High)</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>إرسال SMS للطبيب</td>
                    </tr>
                    <tr style={{ borderBottom: '1px solid var(--border-color)' }}>
                      <td style={{ padding: '10px', color: 'var(--text-main)' }}>سعاد السيد</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>Hemoglobin</td>
                      <td style={{ padding: '10px', color: 'var(--accent-red)', fontWeight: 'bold' }}>6.1 g/dL (Low)</td>
                      <td style={{ padding: '10px', color: 'var(--text-muted)' }}>تنبيه بملف المريض</td>
                    </tr>
                  </tbody>
                </table>
              </Card>
            </div>
          </motion.div>
        )}
      </AnimatePresence>

    </motion.div>
  );
}
