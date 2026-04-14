import { Sidebar } from './components/Sidebar';
import { StatCard } from './components/StatCard';
import { ProductStreamCard } from './components/ProductStreamCard';
import { RecommendationCard } from './components/RecommendationCard';
import { SupportTicket } from './components/SupportTicket';
import { MetricsChart } from './components/MetricsChart';
import { QuickActions } from './components/QuickActions';
import { UnifiedBilling } from './components/UnifiedBilling';
import { SmartInsights } from './components/SmartInsights';
import { CommandBar } from './components/CommandBar';
import { ProcessTimeline } from './components/ProcessTimeline';
import { HealthMonitor } from './components/HealthMonitor';
import { DollarSign, Users, TrendingUp, Zap, Shield, Cloud, Radio, Megaphone, Bell } from 'lucide-react';
import { motion } from 'motion/react';

export default function App() {
  return (
    <div className="min-h-screen flex bg-background text-foreground">
      <Sidebar />

      <main className="flex-1 overflow-y-auto bg-background">
        <header className="sticky top-0 z-10 backdrop-blur-xl bg-white/80 border-b border-border shadow-sm">
          <div className="px-8 py-4 flex items-center justify-between">
            <div>
              <motion.h1
                initial={{ opacity: 0, y: -10 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-2xl font-bold"
              >
                Добро пожаловать в Mission Control
              </motion.h1>
              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.1 }}
                className="text-sm text-muted-foreground mt-1"
              >
                Управление продуктами и бизнес-аналитика в реальном времени
              </motion.p>
            </div>

            <div className="flex items-center gap-4">
              <CommandBar />
              <button className="relative p-2 rounded-lg hover:bg-secondary transition-colors">
                <Bell className="w-5 h-5" />
                <span className="absolute top-1 right-1 w-2 h-2 bg-primary rounded-full animate-pulse" />
              </button>
            </div>
          </div>
        </header>

        <div className="p-8 space-y-8">
          <section>
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.2 }}
              className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6"
            >
              <StatCard
                title="Общие расходы"
                value="₽410K"
                change="+12%"
                trend="up"
                icon={DollarSign}
                delay={0.1}
              />
              <StatCard
                title="Активных пользователей"
                value="1,247"
                change="+8%"
                trend="up"
                icon={Users}
                delay={0.2}
              />
              <StatCard
                title="Использование трафика"
                value="67TB"
                change="+15%"
                trend="up"
                icon={TrendingUp}
                delay={0.3}
              />
              <StatCard
                title="Среднее время отклика"
                value="124ms"
                change="-5%"
                trend="down"
                icon={Zap}
                delay={0.4}
              />
            </motion.div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Продуктовые стримы</h2>
                <p className="text-sm text-muted-foreground mt-1">Управление продуктами по направлениям</p>
              </div>
              <button className="px-4 py-2 rounded-lg bg-primary text-primary-foreground hover:bg-primary/90 transition-colors flex items-center gap-2">
                <span>Все продукты</span>
                <TrendingUp className="w-4 h-4" />
              </button>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
              <ProductStreamCard
                title="Кибербезопасность"
                description="DDoS защита, антивирус, мониторинг угроз"
                icon={Shield}
                gradient="bg-gradient-to-br from-blue-500 to-cyan-500"
                productsCount={5}
                status="active"
                healthScore={94}
                kpis={[
                  { label: 'Отраженных атак', value: '12', trend: 'neutral' },
                  { label: 'Активных правил', value: '127' }
                ]}
                delay={0.1}
              />
              <ProductStreamCard
                title="Облачные решения"
                description="Виртуальные серверы, хранилища, CDN"
                icon={Cloud}
                gradient="bg-gradient-to-br from-purple-500 to-pink-500"
                productsCount={8}
                status="active"
                healthScore={87}
                kpis={[
                  { label: 'Использование CPU', value: '67%', trend: 'down' },
                  { label: 'Объем данных', value: '2.4TB' }
                ]}
                delay={0.2}
              />
              <ProductStreamCard
                title="M2M & IoT"
                description="Подключение устройств, IoT-платформа"
                icon={Radio}
                gradient="bg-gradient-to-br from-orange-500 to-red-500"
                productsCount={12}
                status="warning"
                healthScore={72}
                kpis={[
                  { label: 'Подключенных устройств', value: '247' },
                  { label: 'К оплате счетов', value: '3' }
                ]}
                delay={0.3}
              />
              <ProductStreamCard
                title="Рекламные продукты"
                description="Таргетированная реклама, аналитика"
                icon={Megaphone}
                gradient="bg-gradient-to-br from-green-500 to-emerald-500"
                productsCount={4}
                status="active"
                healthScore={91}
                kpis={[
                  { label: 'Активных кампаний', value: '2' },
                  { label: 'CTR за неделю', value: '4.8%', trend: 'up' }
                ]}
                delay={0.4}
              />
            </div>
          </section>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            <div className="lg:col-span-2 space-y-6">
              <MetricsChart />
              <UnifiedBilling />
            </div>

            <div className="space-y-6">
              <SmartInsights />

              <div className="rounded-2xl bg-card border border-border p-6 shadow-sm">
                <h3 className="text-lg font-semibold mb-4">Быстрые действия</h3>
                <QuickActions />
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <ProcessTimeline />
            <HealthMonitor />
          </div>

          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">AI-рекомендации</h2>
                <p className="text-sm text-muted-foreground mt-1">Персонализированные предложения для вашего бизнеса</p>
              </div>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-2 gap-4">
              <RecommendationCard
                title="Оптимизируйте расходы на облачные сервисы"
                description="Анализ показывает, что 23% ваших виртуальных машин работают с загрузкой менее 20%. Рекомендуем переход на более экономичные тарифы."
                impact="+35% эффективности"
                savings="до 85K ₽/мес"
                category="Оптимизация затрат"
                delay={0.1}
              />
              <RecommendationCard
                title="Усильте защиту от DDoS-атак"
                description="В вашей отрасли зафиксирован рост атак на 47%. Рекомендуем расширить пакет кибербезопасности для критичных сервисов."
                impact="99.9% защиты"
                category="Безопасность"
                delay={0.2}
              />
              <RecommendationCard
                title="Внедрите расширенную аналитику IoT"
                description="У вас подключено 247 устройств M2M. Платформа аналитики поможет снизить эксплуатационные расходы и предсказать неисправности."
                impact="-28% расходов"
                savings="до 45K ₽/мес"
                category="IoT & M2M"
                delay={0.3}
              />
              <RecommendationCard
                title="Запустите таргетированную рекламу"
                description="На основе профиля вашего бизнеса мы подобрали аудиторию в 1.2M пользователей МегаФон с высокой вероятностью конверсии."
                impact="+180% ROI"
                category="Маркетинг"
                delay={0.4}
              />
            </div>
          </section>

          <section>
            <div className="flex items-center justify-between mb-6">
              <div>
                <h2 className="text-xl font-semibold">Последние обращения</h2>
                <p className="text-sm text-muted-foreground mt-1">Отслеживание статуса по заявкам и запросам</p>
              </div>
              <button className="text-sm text-primary hover:underline">
                Все обращения →
              </button>
            </div>

            <div className="space-y-3">
              <SupportTicket
                id="TK-1247"
                title="Настройка DDoS защиты для нового сервиса"
                status="in-progress"
                priority="high"
                createdAt="12 апр, 14:30"
                category="Кибербезопасность"
              />
              <SupportTicket
                id="TK-1243"
                title="Расширение объема облачного хранилища"
                status="resolved"
                priority="medium"
                createdAt="10 апр, 09:15"
                category="Облачные решения"
              />
              <SupportTicket
                id="TK-1239"
                title="Подключение новых IoT устройств"
                status="pending"
                priority="low"
                createdAt="8 апр, 16:45"
                category="M2M & IoT"
              />
              <SupportTicket
                id="TK-1235"
                title="Консультация по API интеграции"
                status="resolved"
                priority="medium"
                createdAt="5 апр, 11:20"
                category="Техподдержка"
              />
            </div>
          </section>
        </div>
      </main>
    </div>
  );
}