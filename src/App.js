import NavBar from "./components/NavBar";
import {BrowserRouter, Routes, Route} from "react-router-dom";
import Home from "./components/Pages/Home";
import Favourite from "./components/Pages/Favourite";
import NotFound from "./components/Pages/NotFound";
import { useState } from "react";
function App() {
  const[contacts,setContacts]=useState([]);

  //push each object to contacts
  const formSubmition=(data)=>{
    setContacts([...contacts,data])
  }
 
  //delete specific contact
  const deleteContact=(id)=>{
    let removedata = contacts.filter((v)=>{
return v.id !== id
    });
    setContacts(removedata);
  }
  
  //favourite contact
  const favouriteContacts=(id)=>{
    let favourite = contacts.map((value)=>{
     return value.id === id ?{...value,fav:!value.fav}:{value};
    })

    setContacts(favourite);
  }
  

  return (
   <>
   <BrowserRouter>
   <NavBar/>
   <Routes>
     <Route path="/" element={ <Home formSubmition={formSubmition}  contacts={contacts} deleteContact={deleteContact} favouriteContacts={favouriteContacts} /> }/>
     <Route path="/favourite" element={<Favourite contacts={contacts} deleteContact={deleteContact} favouriteContacts={favouriteContacts} />} />  
     <Route path="*" element={<NotFound/>} />  
   </Routes>
   </BrowserRouter>
  
    </>
  );
}

export default App;
