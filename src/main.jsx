import { StrictMode } from 'react'
import './index.css'
import App from './App.jsx'
import { createRoot } from "react-dom/client";
import { AuthProvider } from './contexts/AuthContext.jsx';

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <AuthProvider>
      <App />
    </AuthProvider>
  </StrictMode>,
)
