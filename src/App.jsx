import Header from "./Components/Header/Header"
import Main from "./Components/Main/Main"
import About from "./Components/About/About"
import Blog from "./Components/Blog/Blog"
import Contact from "./Components/Contact/Contact"
import { Routes , Route } from "react-router-dom"
import Modal from "./Components/Modal/Modal"
export default function App(){

  return(
    <>
     {/* <Modal /> */}
    <Header />
    <Routes>
      <Route path='/' element={<Main />} />
      <Route path='/about' element={<About />} />
      <Route path='/blog' element={<Blog />} />
      <Route path='/contact' element={<Contact />} />
    </Routes>
  
    </>
  )
}