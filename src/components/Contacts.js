
function Contacts({values,deleteContact,favouriteContacts}) {
  console.log(values);
  
  return (

  <div className='col-sm-4' style={{display:'flex',justifyContent:'start', alignSelf:'start'}}>
     <div className="card mb-5" style={{display:'flex'}}>
  <div className="card-header">
    <div className='row'>
    
    <div className='col-6' style={{display:'flex',alignItems:'center'}}>
   <b>ID:</b> {values.id}
   </div>
   <div className='col-6' style={{textAlign:'center'}}>
     <button type='button' onClick={()=>{deleteContact(values.id)}} className='bi bi-trash border-0 bg-0' style={{fontSize:'30px',marginLeft:'30px'}}></button>
   <i onClick={()=>{favouriteContacts(values.id)}} className={values.fav? "fas fa-star text-warning":"far fa-star text-warning"} style={{fontSize:'30px',marginLeft:'20px'}}></i>
   </div>
  </div>
  </div>
  <ul className="list-group list-group-flush">
    <li className="list-group-item"><b>Name:</b> {values.name}</li>
    <li className="list-group-item"><b>Email:</b> {values.email}</li>
    <li className="list-group-item"><b>Mobile:</b> {values.mobile}</li>
  </ul>
</div>
</div>
      
  
  )
}

export default Contacts
