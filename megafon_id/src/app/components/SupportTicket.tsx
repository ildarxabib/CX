import { Clock, CheckCircle2, AlertCircle } from 'lucide-react';

interface SupportTicketProps {
  id: string;
  title: string;
  status: 'pending' | 'in-progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  createdAt: string;
  category: string;
}

export function SupportTicket({ id, title, status, priority, createdAt, category }: SupportTicketProps) {
  const statusConfig = {
    pending: { icon: Clock, label: 'Ожидает', color: 'text-yellow-700 bg-yellow-100' },
    'in-progress': { icon: AlertCircle, label: 'В работе', color: 'text-blue-700 bg-blue-100' },
    resolved: { icon: CheckCircle2, label: 'Решено', color: 'text-green-700 bg-green-100' }
  };

  const priorityColors = {
    low: 'bg-gray-100 text-gray-600',
    medium: 'bg-yellow-100 text-yellow-700',
    high: 'bg-red-100 text-red-700'
  };

  const StatusIcon = statusConfig[status].icon;

  return (
    <div className="flex items-center gap-4 p-4 rounded-xl bg-card border border-border hover:border-primary/30 hover:shadow-sm transition-all">
      <div className={`p-2 rounded-lg ${statusConfig[status].color}`}>
        <StatusIcon className="w-5 h-5" />
      </div>

      <div className="flex-1 min-w-0">
        <div className="flex items-center gap-2 mb-1">
          <span className="text-xs text-muted-foreground">#{id}</span>
          <span className={`text-xs px-2 py-0.5 rounded-full ${priorityColors[priority]}`}>
            {priority === 'high' ? 'Высокий' : priority === 'medium' ? 'Средний' : 'Низкий'}
          </span>
          <span className="text-xs text-muted-foreground">{category}</span>
        </div>
        <h4 className="text-sm font-medium truncate">{title}</h4>
        <p className="text-xs text-muted-foreground mt-1">{createdAt}</p>
      </div>

      <span className={`text-xs px-3 py-1 rounded-full ${statusConfig[status].color}`}>
        {statusConfig[status].label}
      </span>
    </div>
  );
}
