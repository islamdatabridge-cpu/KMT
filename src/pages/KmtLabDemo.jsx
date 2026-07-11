import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { 
  Home, User, FlaskConical, PlusSquare, FileText, PieChart, 
  Receipt, Package, Wallet, Building2, Stethoscope, Users, 
  Settings, ChevronLeft, Search, Menu, Bell, UserCircle2, 
  Activity, ChevronRight, Plus, ShoppingCart, Moon, Sun
} from 'lucide-react';
import { 
  PatientsView, TestsView, NewOrderView, ResultsView,
  SalesView, InventoryView, ExpensesView, CompaniesView, DoctorsView,
  UsersView, SettingsView, PurchasesView
} from '../components/DemoViews';
import ReportsAnalytics from '../components/ReportsAnalytics';

const patients = [
  { id: '1001', name: 'أحمد محمود', age: 34, test: 'CBC, Lipid Profile', status: 'مكتمل', date: '2023-10-25', color: 'var(--accent-green)' },
  { id: '1002', name: 'سارة إبراهيم', age: 28, test: 'Thyroid Panel (TSH, T3, T4)', status: 'قيد العمل', date: '2023-10-25', color: 'var(--accent-orange)' },
  { id: '1003', name: 'محمد علي', age: 45, test: 'HbA1c, Fasting Blood Sugar', status: 'مكتمل', date: '2023-10-25', color: 'var(--accent-green)' },
  { id: '1004', name: 'منى حسن', age: 31, test: 'Vitamin D, B12', status: 'بانتظار العينة', date: '2023-10-25', color: 'var(--accent-red)' },
];

export default function KmtLabDemo() {
  const [sidebarOpen, setSidebarOpen] = useState(true);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [notificationsOpen, setNotificationsOpen] = useState(false);
  const [theme, setTheme] = useState('light');

  useEffect(() => {
    document.title = "KMT Lab Demo | Live LIMS Dashboard";
    document.body.style.overflow = 'hidden';
    return () => {
      document.body.style.overflow = 'auto';
    };
  }, []);

  const SidebarItem = ({ icon: Icon, text, id, hasChevron = true }) => (
    <div 
      onClick={() => setActiveTab(id)}
      style={{
        display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '10px 15px', 
        cursor: 'pointer', borderRadius: '8px', marginBottom: '5px',
        background: activeTab === id ? '#007bff' : 'transparent',
        color: activeTab === id ? 'var(--text-main)' : 'var(--text-muted)',
        transition: 'all 0.3s'
      }}
    >
      <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
        <Icon size={18} />
        {sidebarOpen && <span style={{ fontWeight: '500', fontSize: '0.9rem' }}>{text}</span>}
      </div>
      {sidebarOpen && hasChevron && <ChevronLeft size={14} color={activeTab === id ? '#ffffff' : 'var(--text-muted)'} />}
    </div>
  );

  return (
    <div className={`theme-${theme}`} style={{ display: 'flex', height: '100vh', width: '100vw', background: 'var(--bg-main)', color: 'var(--text-main)', direction: 'rtl', fontFamily: 'Cairo, sans-serif' }}>
      <style>{`
        .theme-light {
          --bg-main: #f8fafc;
          --bg-card: #ffffff;
          --border-color: #e2e8f0;
          --text-main: #0f172a;
          --text-muted: #64748b;
          --accent-blue: #3b82f6;
          --accent-green: #10b981;
          --accent-red: #ef4444;
          --accent-orange: #f59e0b;
        }
        .theme-dark {
          --bg-main: #0b1220;
          --bg-card: #0f172a;
          --border-color: #1e293b;
          --text-main: #ffffff;
          --text-muted: #94a3b8;
          --accent-blue: #60a5fa;
          --accent-green: #10b981;
          --accent-red: #ef4444;
          --accent-orange: #f59e0b;
        }
        input, select { outline: none; }
      `}</style>
      
      <motion.div 
        animate={{ width: sidebarOpen ? '220px' : '60px' }}
        style={{ 
          background: 'var(--bg-card)', borderLeft: '1px solid var(--border-color)', 
          display: 'flex', flexDirection: 'column', padding: '15px 10px',
          fontSize: '0.85rem'
        }}
      >
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: sidebarOpen ? 'space-between' : 'center', marginBottom: '15px', padding: '0 5px' }}>
          {sidebarOpen && (
            <div style={{ display: 'flex', flexDirection: 'column', alignItems: 'center', width: '100%' }}>
              <div style={{ display: 'flex', alignItems: 'center', gap: '8px', color: 'var(--accent-blue)', fontWeight: 'bold', fontSize: '1.2rem' }}>
                <FlaskConical size={20} /> KMTLAB
              </div>
              <div style={{ fontSize: '0.65rem', color: 'var(--text-muted)', marginTop: '3px' }}>إدارة معامل التحاليل الطبية</div>
            </div>
          )}
          {!sidebarOpen && <FlaskConical size={20} color="var(--accent-blue)" />}
        </div>

        <div style={{ flex: 1, overflowY: 'auto', paddingRight: '5px' }}>
          <SidebarItem icon={Home} text="لوحة التحكم" id="dashboard" hasChevron={false} />
          <SidebarItem icon={User} text="المرضى" id="patients" />
          <SidebarItem icon={FlaskConical} text="التحاليل" id="tests" />
          <SidebarItem icon={PlusSquare} text="طلب جديد" id="new_order" />
          <SidebarItem icon={FileText} text="النتائج" id="results" />
          <SidebarItem icon={PieChart} text="التقارير" id="reports" />
          <SidebarItem icon={Receipt} text="المبيعات والفواتير" id="sales" />
          <SidebarItem icon={ShoppingCart} text="المشتريات" id="purchases" />
          <SidebarItem icon={Package} text="المخزون" id="inventory" />
          <SidebarItem icon={Wallet} text="المصروفات" id="expenses" />
          <SidebarItem icon={Building2} text="الشركات" id="companies" />
          <SidebarItem icon={Stethoscope} text="الأطباء" id="doctors" />
          <SidebarItem icon={Users} text="المستخدمين" id="users" />
          <SidebarItem icon={Settings} text="الإعدادات" id="settings" />
        </div>
      </motion.div>

      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden' }}>
        
        <div style={{ 
          height: '50px', borderBottom: '1px solid var(--border-color)', background: 'var(--bg-card)',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between', padding: '0 20px', fontSize: '0.8rem'
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
            <div style={{ textAlign: 'left' }}>
              <div style={{ fontWeight: 'bold', color: 'var(--text-muted)' }}>الثلاثاء 21 مايو 2026</div>
              <div style={{ fontSize: '0.7rem' }}>10:30 AM</div>
            </div>
            <Activity size={18} />
          </div>

          <div style={{ position: 'relative', width: '300px' }}>
            <input 
              type="text" 
              placeholder="البحث هنا..." 
              style={{ 
                width: '100%', padding: '6px 15px 6px 30px', borderRadius: '15px', fontSize: '0.8rem',
                background: 'var(--border-color)', border: '1px solid var(--border-color)', color: 'var(--text-main)', outline: 'none'
              }} 
            />
            <Search size={14} style={{ position: 'absolute', left: '10px', top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)' }} />
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '15px' }}>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', color: 'var(--text-muted)' }}>
              <Menu size={18} style={{ cursor: 'pointer' }} onClick={() => setSidebarOpen(!sidebarOpen)} />
              
              {/* Theme Toggle */}
              <div style={{ cursor: 'pointer' }} onClick={() => setTheme(theme === 'light' ? 'dark' : 'light')}>
                {theme === 'light' ? <Moon size={18} /> : <Sun size={18} />}
              </div>

              <div style={{ position: 'relative', cursor: 'pointer' }}>
                <Bell size={18} onClick={() => setNotificationsOpen(!notificationsOpen)} />
                <span style={{ position: 'absolute', top: '-2px', right: '-2px', background: 'var(--accent-red)', color: 'white', fontSize: '0.5rem', width: '12px', height: '12px', display: 'flex', alignItems: 'center', justifyContent: 'center', borderRadius: '50%' }}>2</span>
                
                <AnimatePresence>
                  {notificationsOpen && (
                    <motion.div initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: 10 }} style={{ position: 'absolute', top: '30px', right: '-10px', width: '250px', background: 'var(--bg-card)', border: '1px solid var(--border-color)', borderRadius: '10px', padding: '10px', zIndex: 50 }}>
                      <div style={{ fontWeight: 'bold', borderBottom: '1px solid var(--border-color)', paddingBottom: '8px', marginBottom: '8px', color: 'var(--text-main)', fontSize: '0.85rem' }}>الإشعارات (2)</div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 0', borderBottom: '1px solid var(--border-color)' }}>
                        <div style={{ background: 'var(--accent-red)20', padding: '5px', borderRadius: '50%' }}><Activity size={14} color="var(--accent-red)" /></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>تحذير: كاشف CBC قارب على النفاذ بالمخزن (متبقي 5).</div>
                      </div>
                      <div style={{ display: 'flex', gap: '10px', alignItems: 'center', padding: '8px 0' }}>
                        <div style={{ background: 'var(--accent-orange)20', padding: '5px', borderRadius: '50%' }}><FileText size={14} color="var(--accent-orange)" /></div>
                        <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>يوجد 12 عينة بانتظار إدخال النتائج.</div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
            <div style={{ display: 'flex', alignItems: 'center', gap: '10px', borderRight: '1px solid var(--border-color)', paddingRight: '15px' }}>
              <div style={{ textAlign: 'left' }}>
                <div style={{ fontWeight: 'bold', fontSize: '0.85rem' }}>أحمد محمد</div>
                <div style={{ fontSize: '0.7rem', color: 'var(--text-muted)' }}>مدير النظام</div>
              </div>
              <div style={{ position: 'relative' }}>
                <UserCircle2 size={28} color="var(--text-muted)" />
                <div style={{ position: 'absolute', bottom: '0', right: '0', width: '8px', height: '8px', borderRadius: '50%', background: 'var(--accent-green)', border: '1px solid var(--bg-card)' }}></div>
              </div>
            </div>
          </div>
        </div>

        <div style={{ flex: 1, padding: '15px', overflowY: 'auto', background: 'var(--bg-main)' }}>
          <AnimatePresence mode="wait">
            {activeTab === 'dashboard' && (
              <motion.div 
                key="dashboard"
                initial={{ opacity: 0, y: 10 }} animate={{ opacity: 1, y: 0 }} exit={{ opacity: 0, y: -10 }}
              >
                <div style={{ display: 'grid', gridTemplateColumns: 'repeat(auto-fit, minmax(180px, 1fr))', gap: '15px', marginBottom: '20px' }}>
                  {[
                    { title: 'أصناف قاربت النفاذ', value: '6', icon: Activity, color: 'var(--accent-red)' },
                    { title: 'إجمالي الإيرادات', value: '18,450', icon: Wallet, color: '#8b5cf6' },
                    { title: 'المرضى اليوم', value: '82', icon: Users, color: 'var(--accent-blue)' },
                    { title: 'التحاليل اليوم', value: '214', icon: FlaskConical, color: 'var(--accent-green)' },
                  ].map((stat, i) => (
                    <motion.div 
                      key={i} whileHover={{ y: -2 }}
                      style={{ 
                        background: 'var(--bg-card)', padding: '15px', borderRadius: '10px', 
                        border: '1px solid var(--border-color)', display: 'flex', alignItems: 'center', gap: '10px'
                      }}
                    >
                      <div style={{ width: '40px', height: '40px', borderRadius: '10px', background: `${stat.color}15`, display: 'flex', alignItems: 'center', justifyContent: 'center' }}>
                        <stat.icon size={20} color={stat.color} />
                      </div>
                      <div>
                        <div style={{ color: 'var(--text-muted)', fontSize: '0.75rem', marginBottom: '2px' }}>{stat.title}</div>
                        <div style={{ fontSize: '1.2rem', fontWeight: 'bold', color: 'var(--text-main)' }}>{stat.value}</div>
                      </div>
                    </motion.div>
                  ))}
                </div>

                <div style={{ background: 'var(--bg-card)', borderRadius: '10px', border: '1px solid var(--border-color)', padding: '15px' }}>
                  <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '10px' }}>
                    <h3 style={{ fontSize: '1rem', margin: 0, fontWeight: 'bold' }}>أحدث المرضى المسجلين</h3>
                    <span style={{ color: 'var(--accent-blue)', cursor: 'pointer', display: 'flex', alignItems: 'center', gap: '3px', fontSize: '0.75rem' }}>عرض الكل <ChevronRight size={12} /></span>
                  </div>
                  
                  <table style={{ width: '100%', borderCollapse: 'collapse', textAlign: 'right', fontSize: '0.8rem' }}>
                    <thead>
                      <tr style={{ color: 'var(--text-muted)', borderBottom: '1px solid var(--border-color)' }}>
                        <th style={{ padding: '8px', fontWeight: 'normal' }}>رقم المريض</th>
                        <th style={{ padding: '8px', fontWeight: 'normal' }}>اسم المريض</th>
                        <th style={{ padding: '8px', fontWeight: 'normal' }}>التحاليل المطلوبة</th>
                        <th style={{ padding: '8px', fontWeight: 'normal' }}>الحالة</th>
                        <th style={{ padding: '8px', fontWeight: 'normal' }}>التاريخ</th>
                      </tr>
                    </thead>
                    <tbody>
                      {patients.map(p => (
                        <tr key={p.id} style={{ borderBottom: '1px solid var(--border-color)' }}>
                          <td style={{ padding: '8px', color: 'var(--text-muted)' }}>#{p.id}</td>
                          <td style={{ padding: '8px', fontWeight: 'bold' }}>{p.name}</td>
                          <td style={{ padding: '8px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{p.test}</td>
                          <td style={{ padding: '8px' }}>
                            <span style={{ background: `${p.color}15`, color: p.color, padding: '3px 8px', borderRadius: '15px', fontSize: '0.7rem', fontWeight: 'bold' }}>
                              {p.status}
                            </span>
                          </td>
                          <td style={{ padding: '8px', color: 'var(--text-muted)', fontSize: '0.75rem' }}>{p.date}</td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </motion.div>
            )}

            {activeTab === 'patients' && <PatientsView />}
            {activeTab === 'tests' && <TestsView />}
            {activeTab === 'new_order' && <NewOrderView />}
            {activeTab === 'results' && <ResultsView />}
            {activeTab === 'reports' && <ReportsAnalytics />}
            {activeTab === 'sales' && <SalesView />}
            {activeTab === 'purchases' && <PurchasesView />}
            {activeTab === 'inventory' && <InventoryView />}
            {activeTab === 'expenses' && <ExpensesView />}
            {activeTab === 'companies' && <CompaniesView />}
            {activeTab === 'doctors' && <DoctorsView />}
            {activeTab === 'users' && <UsersView />}
            {activeTab === 'settings' && <SettingsView />}

          </AnimatePresence>
        </div>

      </div>
    </div>
  );
}
