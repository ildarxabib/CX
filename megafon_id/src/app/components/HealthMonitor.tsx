import { Activity, Wifi, Database, Globe } from 'lucide-react';
import { motion } from 'motion/react';

interface ServiceHealth {
  name: string;
  status: 'operational' | 'degraded' | 'down';
  uptime: string;
  latency: string;
  icon: any;
}

const services: ServiceHealth[] = [
  { name: 'API Gateway', status: 'operational', uptime: '99.98%', latency: '124ms', icon: Globe },
  { name: 'База данных', status: 'operational', uptime: '99.99%', latency: '8ms', icon: Database },
  { name: 'IoT Platform', status: 'degraded', uptime: '99.12%', latency: '347ms', icon: Wifi },
  { name: 'CDN', status: 'operational', uptime: '100%', latency: '52ms', icon: Activity }
];

export function HealthMonitor() {
  const statusConfig = {
    operational: { color: 'bg-green-500', label: 'Работает', textColor: 'text-green-700' },
    degraded: { color: 'bg-yellow-500', label: 'Снижена производительность', textColor: 'text-yellow-700' },
    down: { color: 'bg-red-500', label: 'Недоступен', textColor: 'text-red-700' }
  };

  const overallStatus = services.some(s => s.status === 'down') ? 'down' :
                        services.some(s => s.status === 'degraded') ? 'degraded' :
                        'operational';

  return (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div className="flex items-center gap-3">
          <div className="relative">
            <Activity className="w-6 h-6 text-primary" />
            <motion.div
              animate={{ scale: [1, 1.2, 1], opacity: [0.5, 0.2, 0.5] }}
              transition={{ duration: 2, repeat: Infinity }}
              className={`absolute inset-0 ${statusConfig[overallStatus].color} rounded-full blur-md`}
            />
          </div>
          <div>
            <h3 className="text-lg font-semibold">System Health</h3>
            <p className={`text-sm ${statusConfig[overallStatus].textColor}`}>
              {statusConfig[overallStatus].label}
            </p>
          </div>
        </div>
        <div className="text-right">
          <p className="text-xs text-muted-foreground">Обновлено</p>
          <p className="text-sm font-medium">только что</p>
        </div>
      </div>

      <div className="space-y-3">
        {services.map((service, idx) => {
          const Icon = service.icon;
          return (
            <motion.div
              key={service.name}
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: idx * 0.1 }}
              className="flex items-center justify-between p-3 rounded-lg bg-secondary/30 hover:bg-secondary/50 transition-colors"
            >
              <div className="flex items-center gap-3">
                <div className={`w-2 h-2 rounded-full ${statusConfig[service.status].color} ${
                  service.status === 'operational' ? 'animate-pulse' : ''
                }`} />
                <Icon className="w-4 h-4 text-muted-foreground" />
                <span className="text-sm font-medium">{service.name}</span>
              </div>

              <div className="flex items-center gap-4 text-xs text-muted-foreground">
                <div className="text-right">
                  <p className="text-muted-foreground">Uptime</p>
                  <p className="font-medium text-foreground">{service.uptime}</p>
                </div>
                <div className="text-right">
                  <p className="text-muted-foreground">Latency</p>
                  <p className="font-medium text-foreground">{service.latency}</p>
                </div>
              </div>
            </motion.div>
          );
        })}
      </div>

      <div className="mt-4 p-3 rounded-lg bg-green-50 border border-green-200">
        <p className="text-sm text-green-800">
          ✓ Все критические системы работают в штатном режиме
        </p>
      </div>
    </div>
  );
}
