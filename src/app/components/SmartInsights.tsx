import { Zap, TrendingDown, Shield, CheckCircle2 } from 'lucide-react';
import { motion } from 'motion/react';

const insights = [
  {
    icon: TrendingDown,
    title: 'Снижение нагрузки на облако',
    description: 'Использование VPS упало на 23% за неделю',
    action: 'Оптимизировать тариф',
    impact: 'Экономия ₽45K/мес',
    color: 'text-blue-600 bg-blue-50 border-blue-200',
    type: 'optimization'
  },
  {
    icon: Shield,
    title: 'Активность DDoS-защиты',
    description: '12 атак отражено за последние 24 часа',
    action: 'Посмотреть отчет',
    impact: 'Критическая инфраструктура защищена',
    color: 'text-red-600 bg-red-50 border-red-200',
    type: 'security'
  },
  {
    icon: CheckCircle2,
    title: 'Успешная миграция',
    description: '247 IoT-устройств перенесены на новую платформу',
    action: 'Проверить статус',
    impact: 'Latency снижена на 34%',
    color: 'text-green-600 bg-green-50 border-green-200',
    type: 'success'
  }
];

export function SmartInsights() {
  return (
    <div className="rounded-2xl bg-gradient-to-br from-primary/5 via-blue-500/5 to-purple-500/5 border border-primary/20 p-6">
      <div className="flex items-center gap-2 mb-4">
        <Zap className="w-5 h-5 text-primary" />
        <h3 className="text-lg font-semibold">Smart Insights</h3>
        <span className="ml-auto text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
          Live
        </span>
      </div>

      <div className="space-y-3">
        {insights.map((insight, idx) => {
          const Icon = insight.icon;
          return (
            <motion.div
              key={insight.title}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.15 }}
              className={`p-4 rounded-xl border ${insight.color}`}
            >
              <div className="flex items-start gap-3 mb-3">
                <Icon className="w-5 h-5 flex-shrink-0 mt-0.5" />
                <div className="flex-1 min-w-0">
                  <h4 className="font-medium mb-1">{insight.title}</h4>
                  <p className="text-sm opacity-80">{insight.description}</p>
                </div>
              </div>

              <div className="flex items-center justify-between">
                <span className="text-xs font-medium opacity-70">{insight.impact}</span>
                <button className="text-xs font-medium hover:underline">
                  {insight.action} →
                </button>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
