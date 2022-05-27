import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import Favourite from "./components/Pages/Favourite";
import NotFound from "./components/Pages/NotFound";
import { useState } from "react";
function App() {
  const[contacts,setContacts]=useState([]);

  const formSubmition=(data)=>{
    setContacts([...contacts,data])
  }
 
  const deleteContact=(id)=>{
    let removedata = contacts.filter((v)=>{
return v.id !== id
    });
    setContacts(removedata);
  }
  
  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route path="/" element={ <Home formSubmition={formSubmition} contacts={contacts} deleteContact={deleteContact}/> }/>
     <Route path="/favourite" element={<Favourite/>} />  
     <Route path="*" element={<NotFound/>} />  
   </Routes>
   </BrowserRouter>
  
    </>
  );
}

export default App;
