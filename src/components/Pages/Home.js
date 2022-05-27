import React from 'react'
import Contacts from '../Contacts';
import Form from '../Form';

function Home({formSubmition,contacts,deleteContact}) {

  return (

     <div className='container'>
     <fieldset style={{display:'flex',justifyContent:'center',flexWrap:'wrap'}}>
 <Form formSubmition={formSubmition} />
     </fieldset>
     <div style={{display:'flex',marginBottom:'10px',flexWrap:'wrap'}}>
    {contacts.map((value)=>{
      return <Contacts key={value.id} values={value} deleteContact={deleteContact}/>
    })}
    </div>
     
   
     
  </div>
    
  )
}

export default Home;
