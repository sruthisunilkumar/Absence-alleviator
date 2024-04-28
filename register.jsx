import {useRef} from 'react'
import emailjs from '@emailjs/browser';



const Contact=()=> {
    const form=useRef()

    const sendEmail = (e) => {
        e.preventDefault();
    
        emailjs.sendForm('service_logdq4e', 'template_6r4h0y8', form.current, {
            publicKey: 'DGXODzfJkLgwgkjQE',
          })
          .then(
            () => {
              console.log('SUCCESS!');
            },
            (error) => {
              console.log('FAILED...', error.text);
            },
          );
          e.target.reset()
      };
    return(
        <section>
          
          <div  className='booking-form-container'>
      <h2>LEAVE FORM</h2>
      <form  ref={form}    onSubmit={sendEmail}  >
      
        <div>
          <label><b>Name:</b></label>
          <input type="text"   name='user_namef' required />
        </div>
        <div>
          <label><b>class:</b></label>
          <input type="text"   name='user_namel' required />
        </div>
        <div>
          <label><b>Email:</b></label>
          <input type="email" name="user_email" require/>
        </div>
        <div>
          <label ><b>Phone Number:</b></label>
          <input type="tel"  name="phoneNumber"  required />
        </div>
        <div>
          <label><b>advisor name:</b></label>
          <input type="text"  name="advisor"  required />
        </div>
        <div>
        <div>
          <label><b>reason:</b></label>
          <input type="text"  name="destination"  required />
        </div>
          <label ><b>from Date:</b></label>
          <input type="date"  name="departureDate"  required />
        </div>
        <div>
          <label><b>to Date:</b></label>
          <input type="date"  name="returnDate"  required />
        </div>
        <button type="submit">SUBMIT</button>
      </form>
    </div>
        
    </section>
  )
}
export default Contact;
