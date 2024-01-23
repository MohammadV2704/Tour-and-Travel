import './App.css';
import Vohrabar from './Component/Vohrabar';
import { Routes , Route} from 'react-router-dom';
import Home from './Component/routes/Home';
import About from './Component/routes/About';
import Contact from './Component/routes/Contact';
import Vohraservices from './Component/routes/Vohraservices';


export default function App() {
  return (
  
  <div className='App'>
  {/* <BrowserRouter> */}
 
 <Routes>

     <Route   path='/' element={<Home/>}/>
     <Route   path='/about' element={<About/>}/>
     <Route  path='/*' element={<Vohraservices/>}/>
     <Route  path='/contact' element={<Contact/>}/>
    
   
 </Routes>

 {/* </BrowserRouter> */}

</div>
  
  
  );
}


