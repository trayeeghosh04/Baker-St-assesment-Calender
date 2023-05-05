import React from 'react'
import { BrowserRouter, Routes, Route} from 'react-router-dom';
import Calender from './components/Calender'
import Home from './components/Home'
import Homes from './components/Homes'
import Client from './components/Client'


export default function App() {
  return (
    <div>
<BrowserRouter>
<Routes>
<Route path='/Home' element={<Home></Home>}></Route>
<Route path='/Client' element={<Client></Client>}></Route>
<Route path='/Calender' element={<Calender ></Calender>}></Route>
<Route path='/Calender' element={<Homes></Homes>}></Route>
</Routes>
</BrowserRouter>
  
    
    
   
    </div>
  )
}
