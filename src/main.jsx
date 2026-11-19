import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

// Habilita el reveal progresivo solo cuando React puede marcar los elementos.
document.documentElement.classList.add('js')

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {import.meta.env.PROD && (
      <>
        <SpeedInsights />
        <Analytics />
      </>
    )}
  </StrictMode>,
)
