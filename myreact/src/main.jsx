import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLink from './allpages/home/main'
import AboutLink from './allpages/about/main'
import ContactLink from './allpages/contact/main'
import MenuLink from './allpages/menu/main'
import PagesLink from './allpages/pages/main'
import RouterComponent from './components/router'
import { BrowserRouter } from 'react-router-dom'


createRoot(document.getElementById('root')).render(
  <BrowserRouter>
  <RouterComponent />
  </BrowserRouter>,
)
