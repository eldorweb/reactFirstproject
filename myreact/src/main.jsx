import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavTop from './page1/nav_top'
import NavBottom from './page1/nav_bottom'
import Header from './page1/header'
import Browse from './page1/Browse'
import Provide from './page1/Provide'
import Events from './page1/Events'
import Delivery from './page1/delivery'
import Comment from './page1/Comment'
import Blog from './page1/Blog'
import Footer from './page1/Footer'



createRoot(document.getElementById('root')).render(
  <StrictMode>
  <NavTop />
  <NavBottom />
  <Header />
  <Browse />
  <Provide />
  <Events />
  <Delivery />
  <Comment />
  <Blog />
  <Footer />
  </StrictMode>,
)
