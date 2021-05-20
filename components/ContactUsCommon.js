import React from 'react';
import axios from 'axios';

const ContactUsCommon = () => {
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
                    <div className="form-group">
                      <input name="fullname"  type="text" className="form-control" placeholder="Full Name" required />
                    </div>
                    <div className="form-group">
                      <input name="email" type="email" className="form-control" placeholder="Email" required />
                    </div>
                    <div className="form-group">
                      <input name="phone" type="text" className="form-control" placeholder="Phone Number" required />
                    </div>
                    <div className="form-group">
                      <textarea name="message" className="form-control" rows="4" placeholder="Message" required></textarea>
                    </div>
                    <div className="text-right mt-4">
                      <button type="submit" className="btn">Submit</button>
                    </div>
                  </form>
        </div>
    );
};

export default ContactUsCommon;