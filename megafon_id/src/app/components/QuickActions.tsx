import { Plus, Download, FileText, Zap } from 'lucide-react';

const actions = [
  { icon: Plus, label: 'Новый продукт', color: 'from-[#00B956] to-[#00D164]' },
  { icon: Download, label: 'Отчеты', color: 'from-blue-500 to-cyan-500' },
  { icon: FileText, label: 'Счета', color: 'from-purple-500 to-pink-500' },
  { icon: Zap, label: 'API Ключи', color: 'from-orange-500 to-red-500' },
];

export function QuickActions() {
  return (
    <div className="grid grid-cols-2 gap-3">
      {actions.map((action, index) => {
        const Icon = action.icon;
        return (
          <button
            key={action.label}
            className="group relative overflow-hidden rounded-xl bg-card border border-border p-4 hover:border-primary/50 hover:shadow-md transition-all"
          >
            <div className={`absolute inset-0 bg-gradient-to-br ${action.color} opacity-0 group-hover:opacity-5 transition-opacity`} />
            <div className="relative flex items-center gap-3">
              <div className={`p-2 rounded-lg bg-gradient-to-br ${action.color}`}>
                <Icon className="w-5 h-5 text-white" />
              </div>
              <span className="text-sm font-medium">{action.label}</span>
            </div>
          </button>
        );
      })}
    </div>
  );
}
