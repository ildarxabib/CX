import { LucideIcon, ArrowRight, Activity } from 'lucide-react';
import { motion } from 'motion/react';

interface KPI {
  label: string;
  value: string;
  trend?: 'up' | 'down' | 'neutral';
}

interface ProductStreamCardProps {
  title: string;
  description: string;
  icon: LucideIcon;
  gradient: string;
  productsCount: number;
  status: 'active' | 'warning' | 'critical';
  healthScore: number;
  kpis: KPI[];
  delay?: number;
}

export function ProductStreamCard({
  title,
  description,
  icon: Icon,
  gradient,
  productsCount,
  status,
  healthScore,
  kpis,
  delay = 0
}: ProductStreamCardProps) {
  const statusColors = {
    active: 'text-green-400',
    warning: 'text-yellow-400',
    critical: 'text-red-400'
  };

  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.4, delay }}
      className="relative overflow-hidden rounded-2xl bg-card border border-border p-6 hover:border-primary/50 hover:shadow-lg transition-all group cursor-pointer"
    >
      <div className={`absolute top-0 right-0 w-40 h-40 ${gradient} opacity-5 rounded-full blur-3xl group-hover:opacity-10 transition-all`} />

      <div className="relative">
        <div className="flex items-start justify-between mb-4">
          <div className={`p-4 rounded-2xl ${gradient} bg-opacity-10`}>
            <Icon className="w-8 h-8 text-white" />
          </div>
          <div className="flex items-center gap-2">
            <Activity className={`w-4 h-4 ${statusColors[status]}`} />
            <span className="text-xs text-muted-foreground">{productsCount} продуктов</span>
          </div>
        </div>

        <h3 className="text-xl font-semibold mb-2">{title}</h3>
        <p className="text-sm text-muted-foreground mb-4">{description}</p>

        <div className="grid grid-cols-2 gap-3 mb-4">
          {kpis.map((kpi, idx) => (
            <div key={idx} className="bg-secondary/30 rounded-lg p-2.5">
              <p className="text-xs text-muted-foreground mb-0.5">{kpi.label}</p>
              <div className="flex items-center gap-1.5">
                <span className="text-sm font-semibold">{kpi.value}</span>
                {kpi.trend && (
                  <span className={`text-xs ${
                    kpi.trend === 'up' ? 'text-green-600' :
                    kpi.trend === 'down' ? 'text-red-600' :
                    'text-gray-500'
                  }`}>
                    {kpi.trend === 'up' ? '↑' : kpi.trend === 'down' ? '↓' : '→'}
                  </span>
                )}
              </div>
            </div>
          ))}
        </div>

        <div className="flex items-center justify-between">
          <div>
            <div className="flex items-center gap-2 mb-1">
              <span className="text-xs text-muted-foreground">Health Score</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-24 h-2 bg-secondary rounded-full overflow-hidden">
                <motion.div
                  initial={{ width: 0 }}
                  animate={{ width: `${healthScore}%` }}
                  transition={{ duration: 1, delay: delay + 0.3 }}
                  className={`h-full ${
                    healthScore >= 80 ? 'bg-green-400' :
                    healthScore >= 60 ? 'bg-yellow-400' :
                    'bg-red-400'
                  }`}
                />
              </div>
              <span className="text-sm font-medium">{healthScore}%</span>
            </div>
          </div>

          <button className="p-2 rounded-lg hover:bg-primary/10 transition-colors text-primary">
            <ArrowRight className="w-5 h-5" />
          </button>
        </div>
      </div>
    </motion.div>
  );
}
