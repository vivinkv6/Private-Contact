
import { useForm } from "react-hook-form";

function Form({formSubmition}) {
    const { register, handleSubmit, reset} = useForm();
    const onsubmit=(data)=>{
        data.id=Date.now();
        data.fav=false;
       formSubmition(data);
        reset();
    }
    
    return (


        <form onSubmit={handleSubmit(onsubmit)} className="p-4 rounded row col-sm-4 my-5 mt-5 " style={{ display: 'flex', flexDirection: 'column',boxShadow:'0px 0px 20px black' }}>
            <h1 className='text-secondary text-center mt-3 mb-4'>Add Contacts</h1>
            <div className="col-md-10">
                <div className='mb-3'>
                    <label htmlFor="name" className="form-label">Name</label>
                    <input type="text" name='name' {...register("name", { required: "Name Required" })}  className="form-control" id="validationServer01" required />

                </div>
            </div>

            <div className="col-md-10">
                <div className='mb-3'>
                    <label htmlFor="validationServer02" className="form-label">Email</label>
                    <input type="email" name='email' {...register("email", { required: true })} className="form-control " id="validationServer02" required />
                </div>
            </div>
            <div className="col-md-10">
                <div className='mb-3'>
                    <label htmlFor="validationServerUsername" className="form-label">Mobile</label>
                    <div className="input-group has-validation">

                        <input type="number" name='mobile' {...register("mobile", { required: true })}  className="form-control " id="validationServerMobile" aria-describedby="inputGroupPrepend3 validationServerMobileFeedback" required />

                    </div>
                </div>
            </div>

            <div className="col-12 mb-3" style={{ display: 'flex', justifyContent: 'center' }}>
                <button className="btn btn-primary px-3 py-2" type="submit">Submit</button>
            </div>

        </form>


    )
}

export default Form
