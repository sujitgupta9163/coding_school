import Nav from './components/Nav';
import Footer from './components/Footer';
import 'animate.css';
import 'remixicon/fonts/remixicon.css'
import { BrowserRouter , Routes , Route } from 'react-router-dom';
import Home from './components/Home';
import Teachers from './components/Teachers';
import Holidays from './components/Holidays';
import ContactUs from './components/ContactUs';
import TalkToUs from './components/TalkToUs';
import NotFound from './components/NotFound';


const App =()=>{
  return(
  
    <BrowserRouter>
      <Routes>
        <Route path='/' element={<Home/>}/>
        <Route path='/teachers' element ={<Teachers/>}/>
         <Route path='/holidays' element ={<Holidays/>}/>
         <Route path='/contact-us' element ={<ContactUs/>}/>
         <Route path='/talk-to-us' element ={<TalkToUs/>}/>
         <Route path='*' element ={<NotFound/>}/> 
      </Routes>
    </BrowserRouter>

   
  )
}
export default App;

  

 