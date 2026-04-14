import { Home, Shield, Cloud, Radio, Megaphone, CreditCard, HeadphonesIcon, Settings, TrendingUp } from 'lucide-react';

const navItems = [
  { icon: Home, label: 'Главная', active: true, badge: null },
  { icon: TrendingUp, label: 'Аналитика', active: false, badge: null },
  { icon: Shield, label: 'Кибербезопасность', active: false, badge: null },
  { icon: Cloud, label: 'Облачные решения', active: false, badge: null },
  { icon: Radio, label: 'M2M & IoT', active: false, badge: null },
  { icon: Megaphone, label: 'Реклама', active: false, badge: null },
  { icon: CreditCard, label: 'Биллинг', active: false, badge: '3' },
  { icon: HeadphonesIcon, label: 'Центр поддержки', active: false, badge: '5' },
  { icon: Settings, label: 'Настройки', active: false, badge: null },
];

export function Sidebar() {
  return (
    <aside className="w-64 h-screen bg-sidebar border-r border-sidebar-border flex flex-col sticky top-0">
      <div className="p-6 border-b border-sidebar-border">
        <div className="flex items-center gap-3">
          <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-[#00B956] to-[#00D164] flex items-center justify-center shadow-md">
            <span className="text-white text-xl font-bold">М</span>
          </div>
          <div>
            <h1 className="font-semibold">МегаФон ID</h1>
            <p className="text-xs text-muted-foreground">Mission Control</p>
          </div>
        </div>
      </div>

      <nav className="flex-1 p-4 space-y-1">
        {navItems.map((item) => {
          const Icon = item.icon;
          return (
            <button
              key={item.label}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all ${
                item.active
                  ? 'bg-sidebar-accent text-sidebar-accent-foreground shadow-sm'
                  : 'text-sidebar-foreground hover:bg-sidebar-accent/50 hover:text-sidebar-accent-foreground'
              }`}
            >
              <Icon className="w-5 h-5" />
              <span className="text-sm flex-1 text-left">{item.label}</span>
              {item.badge && (
                <span className="min-w-[20px] h-5 px-1.5 flex items-center justify-center text-xs font-medium bg-primary text-primary-foreground rounded-full">
                  {item.badge}
                </span>
              )}
            </button>
          );
        })}
      </nav>

      <div className="p-4 border-t border-sidebar-border">
        <div className="flex items-center gap-3 p-3 rounded-lg bg-sidebar-accent/50 hover:bg-sidebar-accent transition-colors cursor-pointer">
          <div className="w-9 h-9 rounded-full bg-gradient-to-br from-purple-500 to-pink-500 flex items-center justify-center shadow-sm">
            <span className="text-white text-sm font-medium">АК</span>
          </div>
          <div className="flex-1 min-w-0">
            <p className="text-sm font-medium truncate">Алексей Коротков</p>
            <p className="text-xs text-muted-foreground truncate">ООО "Техноком"</p>
          </div>
        </div>
      </div>
    </aside>
  );
}
