import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import HomeLink from './allpages/home/main'
import AboutLink from './allpages/about/main'
import ContactLink from './allpages/contact/main'
import MenuLink from './allpages/menu/main'
import PagesLink from './allpages/pages/main'


createRoot(document.getElementById('root')).render(
  <StrictMode>
  <HomeLink />
  <AboutLink />
  <ContactLink />
  <MenuLink />
  <PagesLink />
  </StrictMode>,
)
