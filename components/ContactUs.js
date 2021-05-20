import React from 'react';

const ContactUs = () => {

  const sendContactForm = async event =>{
    event.preventDefault();
  
    const contactDetails ={
      fullname: event.target.fullname.value,
      email:event.target.email.value,
      phone:event.target.phone.value,
      message:event.target.message.value, 
    }
    event.target.reset();
  
    try{
      const res = await axios.post('http://localhost:8000/api/contact-us', {
        contactDetails,
      
    })
    console.log(res.data)
  
    }catch(error){
      console.log(error);
    } 
  }

    return (
        <div>
            <form onSubmit={sendContactForm}>
                <div className="form-row">
                  <div className="form-group col-md-6">
                    <input type="text" className="form-control" placeholder="Name" />
                    <input type="email" className="form-control" placeholder="Email" />
                    <input type="text" className="form-control" placeholder="Phone Number" />
                  </div>
                  <div className="form-group col-md-6">
                    <textarea className="form-control" rows="4" placeholder="Message"></textarea>
                  </div>
                  <div className="col-md-12 text-right">
                    <button type="button" className="btn hvr-fade">Submit</button>
                  </div>
                </div>
              </form>
        </div>
    );
};

export default ContactUs;