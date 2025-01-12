import { createRoot } from 'react-dom/client'
import './index.css'
import RouterComponent from './components/router'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RouterComponent />
  </BrowserRouter>,
)
