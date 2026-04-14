import { Search, Command } from 'lucide-react';
import { useState, useEffect } from 'react';

export function CommandBar() {
  const [isOpen, setIsOpen] = useState(false);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsOpen(true);
      }
      if (e.key === 'Escape') {
        setIsOpen(false);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  return (
    <>
      <button
        onClick={() => setIsOpen(true)}
        className="flex items-center gap-3 px-4 py-2 rounded-lg bg-secondary/50 hover:bg-secondary transition-colors border border-border w-80"
      >
        <Search className="w-4 h-4 text-muted-foreground" />
        <span className="text-sm text-muted-foreground flex-1 text-left">Быстрый поиск...</span>
        <div className="flex items-center gap-1">
          <kbd className="px-2 py-0.5 text-xs bg-white border border-border rounded">⌘</kbd>
          <kbd className="px-2 py-0.5 text-xs bg-white border border-border rounded">K</kbd>
        </div>
      </button>

      {isOpen && (
        <div className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-start justify-center pt-32">
          <div className="w-full max-w-2xl bg-card rounded-2xl shadow-2xl border border-border overflow-hidden">
            <div className="p-4 border-b border-border">
              <div className="flex items-center gap-3">
                <Command className="w-5 h-5 text-muted-foreground" />
                <input
                  autoFocus
                  type="text"
                  placeholder="Поиск продуктов, команд, документов..."
                  className="flex-1 bg-transparent outline-none text-sm"
                />
              </div>
            </div>

            <div className="p-2 max-h-96 overflow-y-auto">
              <div className="mb-3">
                <p className="text-xs text-muted-foreground px-3 py-2">Быстрые действия</p>
                {[
                  'Создать новый продукт',
                  'Скачать отчеты',
                  'Оплатить счет',
                  'Открыть обращение'
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>

              <div>
                <p className="text-xs text-muted-foreground px-3 py-2">Продукты</p>
                {[
                  'DDoS Защита Pro',
                  'Cloud VPS Standard',
                  'IoT Platform Enterprise',
                  'Таргетированная реклама'
                ].map((item) => (
                  <button
                    key={item}
                    className="w-full text-left px-3 py-2 rounded-lg hover:bg-secondary/50 text-sm"
                  >
                    {item}
                  </button>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
}
