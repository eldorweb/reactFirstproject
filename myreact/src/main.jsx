import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import NavTop from './components/nav_top'
import NavBottom from './allpages/home/nav_bottom'
import Header from './allpages/home/header'
import Browse from './allpages/home/Browse'
import Provide from './allpages/home/Provide'
import Events from './allpages/home/Events'
import Delivery from './allpages/home/delivery'
import Comment from './allpages/home/Comment'
import Blog from './allpages/home/Blog'
import Footer from "./components/Footer";
import HomeComponent from './lesson/inscDecrement'



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
  <HomeComponent />
  </StrictMode>,
)
