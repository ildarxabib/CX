import { Sparkles, TrendingUp } from 'lucide-react';
import { motion } from 'motion/react';

interface RecommendationCardProps {
  title: string;
  description: string;
  impact: string;
  savings?: string;
  category: string;
  delay?: number;
}

export function RecommendationCard({
  title,
  description,
  impact,
  savings,
  category,
  delay = 0
}: RecommendationCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, x: -20 }}
      animate={{ opacity: 1, x: 0 }}
      transition={{ duration: 0.5, delay }}
      className="relative overflow-hidden rounded-xl bg-gradient-to-br from-primary/[0.03] to-purple-500/[0.03] border border-primary/20 p-5 hover:border-primary/40 hover:shadow-md transition-all group"
    >
      <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-primary/10 to-purple-500/10 rounded-full blur-3xl" />

      <div className="relative">
        <div className="flex items-start gap-4">
          <div className="p-2 rounded-lg bg-primary/10 text-primary flex-shrink-0">
            <Sparkles className="w-5 h-5" />
          </div>

          <div className="flex-1 min-w-0">
            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs px-2 py-1 rounded-full bg-primary/10 text-primary">
                {category}
              </span>
              {savings && (
                <span className="text-xs px-2 py-1 rounded-full bg-green-500/10 text-green-400">
                  Экономия {savings}
                </span>
              )}
            </div>

            <h4 className="font-medium mb-1">{title}</h4>
            <p className="text-sm text-muted-foreground mb-3">{description}</p>

            <div className="flex items-center gap-2 text-sm">
              <TrendingUp className="w-4 h-4 text-primary" />
              <span className="text-muted-foreground">Потенциальный эффект: {impact}</span>
            </div>
          </div>
        </div>

        <button className="mt-4 w-full px-4 py-2 rounded-lg bg-primary/10 hover:bg-primary/20 text-primary transition-colors text-sm font-medium">
          Подробнее
        </button>
      </div>
    </motion.div>
  );
}
