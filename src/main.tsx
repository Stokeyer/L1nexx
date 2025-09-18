import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.tsx'
import { initFontOptimization } from './utils/fontOptimization'

// Загружаем CSS асинхронно для улучшения производительности
import('./App.css')

// Инициализируем оптимизацию шрифтов
initFontOptimization()

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <App />
  </StrictMode>,
)
