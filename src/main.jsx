import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import CustomButton from './components/CustomButton.jsx'
import NavbarIzquierdo from './components/NavBarIzquierdo.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <NavbarIzquierdo />
  </StrictMode>,
)
