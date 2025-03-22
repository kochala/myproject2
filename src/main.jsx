import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App.jsx'
import IsDarkProvider from "@/context/IsDarkProvider.jsx"

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <BrowserRouter basename='/'>
    <IsDarkProvider>
    <App />
    </IsDarkProvider>
    </BrowserRouter>
  </StrictMode>,
)




