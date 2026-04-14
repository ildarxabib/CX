import { LineChart, Line, AreaChart, Area, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer } from 'recharts';

const data = [
  { month: 'Янв', usage: 45000, cost: 320000 },
  { month: 'Фев', usage: 52000, cost: 340000 },
  { month: 'Мар', usage: 48000, cost: 335000 },
  { month: 'Апр', usage: 61000, cost: 380000 },
  { month: 'Май', usage: 55000, cost: 360000 },
  { month: 'Июн', usage: 67000, cost: 410000 },
];

export function MetricsChart() {
  return (
    <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
      <div className="mb-6">
        <h3 className="text-lg font-semibold mb-1">Динамика расходов и использования</h3>
        <p className="text-sm text-muted-foreground">За последние 6 месяцев</p>
      </div>

      <ResponsiveContainer width="100%" height={300}>
        <AreaChart data={data}>
          <defs>
            <linearGradient id="colorCost" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#00B956" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#00B956" stopOpacity={0}/>
            </linearGradient>
            <linearGradient id="colorUsage" x1="0" y1="0" x2="0" y2="1">
              <stop offset="5%" stopColor="#3B82F6" stopOpacity={0.3}/>
              <stop offset="95%" stopColor="#3B82F6" stopOpacity={0}/>
            </linearGradient>
          </defs>
          <CartesianGrid strokeDasharray="3 3" stroke="rgba(0,0,0,0.05)" />
          <XAxis
            dataKey="month"
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <YAxis
            stroke="#6B7280"
            tick={{ fill: '#6B7280', fontSize: 12 }}
          />
          <Tooltip
            contentStyle={{
              backgroundColor: 'rgba(255, 255, 255, 0.98)',
              border: '1px solid #E5E7EB',
              borderRadius: '12px',
              color: '#0F1419',
              boxShadow: '0 4px 6px -1px rgb(0 0 0 / 0.1)'
            }}
          />
          <Area
            type="monotone"
            dataKey="cost"
            stroke="#00B956"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorCost)"
          />
          <Area
            type="monotone"
            dataKey="usage"
            stroke="#3B82F6"
            strokeWidth={2}
            fillOpacity={1}
            fill="url(#colorUsage)"
          />
        </AreaChart>
      </ResponsiveContainer>

      <div className="flex items-center justify-center gap-6 mt-4">
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#00B956]" />
          <span className="text-sm text-muted-foreground">Стоимость (₽)</span>
        </div>
        <div className="flex items-center gap-2">
          <div className="w-3 h-3 rounded-full bg-[#3B82F6]" />
          <span className="text-sm text-muted-foreground">Использование (ГБ)</span>
        </div>
      </div>
    </div>
  );
}
