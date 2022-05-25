import {BrowserRouter, Routes, Route } from 'react-router-dom';
import Header from './components/header';

import Home from './pages/Home';
import Sobre from './pages/Sobre';
import Error from './pages/error';
import Produto from './pages/produto';

function RouteApp(){
 return(
     <BrowserRouter>
      <Header/>
       <Routes>
           <Route path="/" element={<Home/>} />  
           <Route path="/sobre" element={<Sobre/>} />  
           <Route path="/produto/:id" element={<Produto/>} />  
           <Route path="*" element={<Error/>} />  
       </Routes>
     </BrowserRouter>
 )
}

export default RouteApp;