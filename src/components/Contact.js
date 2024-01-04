import React, {useEffect, useState} from 'react'

const Contact = () => {

  const [userData, setUserData] = useState({name:"", email:"", phone:"", message:""});

  const userContact = async () => {
    try{
      const res = await fetch('/getdata', {
        method: "GET",
        headers: {
          "Content-Type" : "application/json"
        },
      });

      const data = await res.json();
      console.log(data);
      setUserData({...userData, name: data.name, email: data.email, phone: data.phone});

      if(!(await res).status === 200){
        const error = new Error(res.error);
        throw error;
      }

    } catch (err) {
      console.log(err);
    }
  }

  useEffect(() => {
    userContact();
  }, []);


  // we are storing data in states 

  const handleInputs = (e) => {
    const name = e.target.name;
    const value = e.target.value;

    setUserData({...userData, [name]: value});
  }

// send the data to backend

  const contactForm = async (e) => {
    e.preventDefault();

    const {name, email, phone, message} = userData;

    const res = await fetch('/contact', {
      method: "POST",
      headers: {
        "Content-Type" : "application/json"
      },
      body: JSON.stringify({
        name, email, phone, message
      })
    })
    const data = await res.json();

    if(!data){
      console.log("Message not send");
    }
    else{
      alert("Message Send");
      setUserData({...userData, message: ""});
    }
  }


  return (
    <>
      <div className='contact_info'>
        <div className='container-fluid'>
          <div className='row'>
            <div className='flex justify-around mt-4 py-4 shadow-inner'>
      {/* phone section */}
              <div className=' flex justify-center items-center text-md font-semibold'>
                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone' width={'50px'} />
                <div className='contact_info_content'>
                  <div className='contact_info_title'>Phone</div>
                  <div className='contact_info_text'>+91 6202 831 563</div>
                </div>
              </div>
      {/* email section  */}
              <div className=' flex justify-center items-center text-md font-semibold'>
                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'  width={'50px'}/>
                <div className='contact_info_content'>
                  <div className='contact_info_title'>Email</div>
                  <div className='contact_info_text'>karn03.ugec20@iiitranchi.ac.in</div>
                </div>
              </div>
      {/* address section  */}
              <div className=' flex justify-center items-center text-md font-semibold'>
                <img src='https://img.icons8.com/office/24/000000/iphone.png' alt='phone'  width={'50px'}/>
                <div className='contact_info_content'>
                  <div className='contact_info_title'>Address</div>
                  <div className='contact_info_text'>Patna, Bihar</div>
                </div>
              </div>

            </div>
          </div>
        </div>
      </div>

      {/* contact us form  */}
      
      <div className='contact_form'>
        <div className='container  flex flex-col  py-1 '>
          <div className='row '>
            <div className='col-lg-10 offset-lg-1'>
              <div className='contact_form_container py-5'>
                <div className='contact_form_title text-3xl font-bold text-slate-700 mb-4'>
                  Get in Touch
                </div>
                <form method='POST' id='contact_form'>
                  <div className='flex flex-col gap-3 text-lg'>

                    <input type='text' id='contact_form_name' className='contact_form_name input_field outline-none py-1 px-2  w-[48%]' 
                    name="name"
                    value={userData.name}
                    onChange={handleInputs}                   
                     placeholder='Your Name' required='true' />

                    <input type='email' id='contact_form_email' className='contact_form_email input_field outline-none py-1 px-2  w-[48%]' 
                    name="email"
                    value={userData.email} 
                    onChange={handleInputs}
                    placeholder='Your Email' required='true' />
                    
                    <input type='text' id='contact_form_phone' className='contact_form_phone input_field outline-none py-1 px-2 w-[48%]'
     
                    name="phone"
                    value={userData.phone} 
                    onChange={handleInputs}
                    placeholder='Your Phone Number' required='true' />

                  </div>

                  <div className='contact_form_text mt-3'>
                    <textarea className='text_field contact_form_message text-lg outline-none bg-slate-100 p-2 '
                    name="message"                   
                     value={userData.message}
                     onChange={handleInputs}
                     placeholder='Message' cols='50' rows='3'></textarea>
                  </div>

                  <div className='contact_form_button'>
                    <button type='submit' className='bg-blue-600 p-1 px-2 rounded-lg font-bold text-white mt-2'
                    onClick={contactForm}>Send Message</button>
                  </div>

                </form>
              </div>
            </div>
          </div>
        </div>
      </div>

    </>
    
  )
}

export default Contact