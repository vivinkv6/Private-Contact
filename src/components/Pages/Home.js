import React from 'react'
import Contacts from '../Contacts';
import Form from '../Form';

function Home({formSubmition,contacts,deleteContact,favouriteContacts}) {

  return (

     <div className='container'>
     <fieldset style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
 <Form formSubmition={formSubmition} />
     </fieldset>
     <div style={{display:'flex',marginBottom:'10px',flexWrap:'wrap'}}>
    {contacts.map((value)=>{
      return <Contacts key={value.id} values={value} deleteContact={deleteContact} favouriteContacts={favouriteContacts}/>
    })}
    {contacts.length === 0 && <h3>No More Contacts</h3>}
    </div>
     
   
     
  </div>
    
  )
}

export default Home;
