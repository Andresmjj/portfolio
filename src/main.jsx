import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { SpeedInsights } from '@vercel/speed-insights/react'
import { Analytics } from '@vercel/analytics/react'
import './index.css'
import App from './App.jsx'

// Habilita el reveal progresivo solo cuando React puede marcar los elementos.
document.documentElement.classList.add('js')

// Los scripts de Vercel solo existen en el dominio desplegado; en local dan 404.
const isLocal = ['localhost', '127.0.0.1'].includes(window.location.hostname)
const analyticsEnabled = import.meta.env.PROD && !isLocal

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
    {analyticsEnabled && (
      <>
        <SpeedInsights />
        <Analytics />
      </>
    )}
  </StrictMode>,
)
