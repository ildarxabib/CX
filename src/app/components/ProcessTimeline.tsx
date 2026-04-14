import { CheckCircle2, Clock, AlertCircle, ArrowRight } from 'lucide-react';
import { motion } from 'motion/react';

interface ProcessStep {
  id: string;
  title: string;
  description: string;
  status: 'completed' | 'in-progress' | 'pending' | 'error';
  timestamp?: string;
}

const processes: ProcessStep[] = [
  {
    id: '1',
    title: 'Миграция IoT-устройств',
    description: '247 из 247 устройств перенесены на новую платформу',
    status: 'completed',
    timestamp: '14 апр, 10:23'
  },
  {
    id: '2',
    title: 'Настройка DDoS защиты',
    description: 'Конфигурация правил для нового сервиса',
    status: 'in-progress',
    timestamp: '14 апр, 14:45'
  },
  {
    id: '3',
    title: 'Формирование единого счета',
    description: 'Консолидация всех направлений за апрель',
    status: 'pending',
    timestamp: 'Запланировано на 16 апр'
  }
];

export function ProcessTimeline() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h3 className="text-lg font-semibold">Активные процессы</h3>
          <p className="text-sm text-muted-foreground">Отслеживание ключевых операций в реальном времени</p>
        </div>
        <button className="text-sm text-primary hover:underline">
          Все процессы →
        </button>
      </div>

      <div className="space-y-4">
        {processes.map((process, idx) => {
          const statusConfig = {
            completed: { icon: CheckCircle2, color: 'text-green-600 bg-green-50 border-green-200' },
            'in-progress': { icon: Clock, color: 'text-blue-600 bg-blue-50 border-blue-200' },
            pending: { icon: Clock, color: 'text-gray-500 bg-gray-50 border-gray-200' },
            error: { icon: AlertCircle, color: 'text-red-600 bg-red-50 border-red-200' }
          };

          const StatusIcon = statusConfig[process.status].icon;

          return (
            <motion.div
              key={process.id}
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="relative"
            >
              <div className="flex gap-4">
                <div className="flex flex-col items-center">
                  <div className={`p-2 rounded-full border ${statusConfig[process.status].color}`}>
                    <StatusIcon className="w-4 h-4" />
                  </div>
                  {idx < processes.length - 1 && (
                    <div className="w-0.5 h-full bg-border mt-2" />
                  )}
                </div>

                <div className="flex-1 pb-6">
                  <div className="flex items-start justify-between mb-1">
                    <h4 className="font-medium">{process.title}</h4>
                    {process.status === 'in-progress' && (
                      <span className="flex items-center gap-1 text-xs text-blue-600">
                        <span className="w-1.5 h-1.5 bg-blue-600 rounded-full animate-pulse" />
                        В процессе
                      </span>
                    )}
                  </div>
                  <p className="text-sm text-muted-foreground mb-1">{process.description}</p>
                  <p className="text-xs text-muted-foreground">{process.timestamp}</p>

                  {process.status === 'in-progress' && (
                    <div className="mt-3">
                      <div className="flex items-center justify-between mb-1">
                        <span className="text-xs text-muted-foreground">Прогресс</span>
                        <span className="text-xs font-medium">67%</span>
                      </div>
                      <div className="w-full h-1.5 bg-gray-100 rounded-full overflow-hidden">
                        <motion.div
                          initial={{ width: 0 }}
                          animate={{ width: '67%' }}
                          transition={{ duration: 1, delay: 0.3 }}
                          className="h-full bg-blue-600 rounded-full"
                        />
                      </div>
                    </div>
                  )}
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}
