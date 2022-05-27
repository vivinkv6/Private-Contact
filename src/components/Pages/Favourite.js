import React from 'react'
import Contacts from '../Contacts';

function Favourite({contacts,deleteContact,favouriteContacts}) {
  return (
    <>
    <div className='ms-5 mt-5'>
       {contacts.map((value)=>{
         return value.fav && <Contacts key={value.id} values={value} deleteContact={deleteContact} favouriteContacts={favouriteContacts}/> 
       })}

       {contacts.filter(value=>value.fav).length === 0 && <h2>No More Favourite Contact</h2>}
    </div>

    </>
  )
}


export default Favourite;
