import { CreditCard, Download, AlertCircle, CheckCircle2, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface BillingItem {
  stream: string;
  amount: number;
  status: 'paid' | 'pending' | 'overdue';
  dueDate: string;
}

const billingItems: BillingItem[] = [
  { stream: 'Кибербезопасность', amount: 127500, status: 'pending', dueDate: '20 апр' },
  { stream: 'Облачные решения', amount: 185000, status: 'pending', dueDate: '20 апр' },
  { stream: 'M2M & IoT', amount: 67800, status: 'pending', dueDate: '20 апр' },
  { stream: 'Реклама', amount: 29700, status: 'pending', dueDate: '20 апр' },
];

export function UnifiedBilling() {
  const totalAmount = billingItems.reduce((sum, item) => sum + item.amount, 0);
  const pendingCount = billingItems.filter(i => i.status === 'pending').length;

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
      className="rounded-2xl bg-card border border-border overflow-hidden"
    >
      <div className="bg-gradient-to-r from-primary/5 to-blue-500/5 p-6 border-b border-border">
        <div className="flex items-start justify-between mb-4">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <CreditCard className="w-5 h-5 text-primary" />
              <h3 className="text-lg font-semibold">Единый счет на оплату</h3>
            </div>
            <p className="text-sm text-muted-foreground">
              Консолидированный счет по всем продуктовым направлениям
            </p>
          </div>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 text-xs font-medium">
            {pendingCount} к оплате
          </span>
        </div>

        <div className="bg-white rounded-xl p-4 shadow-sm">
          <div className="flex items-baseline gap-2 mb-1">
            <span className="text-3xl font-bold">₽{totalAmount.toLocaleString('ru-RU')}</span>
            <span className="text-sm text-muted-foreground">за апрель 2026</span>
          </div>
          <p className="text-sm text-muted-foreground mb-4">Срок оплаты: до 20 апреля 2026</p>

          <div className="flex gap-3">
            <button className="flex-1 px-4 py-2.5 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors font-medium">
              Оплатить единым счетом
            </button>
            <button className="px-4 py-2.5 rounded-lg border border-border hover:bg-secondary transition-colors">
              <Download className="w-4 h-4" />
            </button>
          </div>
        </div>
      </div>

      <div className="p-6">
        <div className="flex items-center justify-between mb-4">
          <h4 className="font-medium">Детализация по направлениям</h4>
          <button className="text-sm text-primary hover:underline">
            Полная детализация →
          </button>
        </div>

        <div className="space-y-3">
          {billingItems.map((item, idx) => (
            <motion.div
              key={item.stream}
              initial={{ opacity: 0, x: -10 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                {item.status === 'pending' && <AlertCircle className="w-4 h-4 text-yellow-500" />}
                {item.status === 'paid' && <CheckCircle2 className="w-4 h-4 text-green-500" />}
                <div>
                  <p className="text-sm font-medium">{item.stream}</p>
                  <p className="text-xs text-muted-foreground">Срок: {item.dueDate}</p>
                </div>
              </div>
              <span className="text-sm font-semibold">₽{item.amount.toLocaleString('ru-RU')}</span>
            </motion.div>
          ))}
        </div>

        <div className="mt-4 p-4 rounded-lg bg-blue-50 border border-blue-200">
          <div className="flex items-start gap-3">
            <TrendingUp className="w-5 h-5 text-blue-600 flex-shrink-0 mt-0.5" />
            <div>
              <h5 className="text-sm font-medium text-blue-900 mb-1">
                Прогноз расходов
              </h5>
              <p className="text-sm text-blue-700">
                На основе анализа за последние 3 месяца прогнозируем расходы на май в размере <strong>₽438,000</strong> (+7%).
                Рекомендуем резервировать бюджет заранее.
              </p>
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
