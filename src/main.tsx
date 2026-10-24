import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { LangProvider } from './i18n/LangContext'
import { RouterProvider } from './router'
import App from './App'
import './styles.css'
import './case.css'
import './theme-light.css'

createRoot(document.getElementById('root')!).render(
  <StrictMode>
    <LangProvider>
      <RouterProvider>
        <App />
      </RouterProvider>
    </LangProvider>
  </StrictMode>,
)
