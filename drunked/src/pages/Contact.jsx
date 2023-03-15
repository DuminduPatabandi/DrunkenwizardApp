import styles from '../style'
import React, { useRef, useState } from 'react';
import emailjs, { send } from '@emailjs/browser';
import { NavLink, Outlet } from 'react-router-dom';
import { Popup } from '../components'

const Contact = () => {

    // Popup
    const [openPopup, setOpenPopup] = useState(false)

    // Sending mails

    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();

      emailjs.sendForm('service_nky71do', 'template_mqzx1pa', form.current, 'FZKIfp8MpmgZ6mh2T')
        .then((result) => {
            console.log(result.text);
            console.log("message sent")
        }, (error) => {
            console.log(error.text);
        });
    };


  return (

    <div  className="bg-[#f9f9f9]">

        <section id='contact'>
            <div className=" text-center">
                <div className="mx-auto max-w-full py-6 px-20  sm:py-14">
                <h2 className={`${styles.paddingNew} font-shadows text-[#23221f] text-[51px] tracking-[19.2px] mt-10 mb-3 text-center`}>Contact Us</h2>
                <p className='font-montserrat font-thin text-[#23221f] text-[19px]'>We are currently booking new projects for August 2023 April and beyond!</p>
                </div>

            </div>

            {/* contact form */}
            <form ref={form} onSubmit={sendEmail}>
                <div className="">
                    <div className="contact-box mx-3 py-5 ">
                        <div className="px-5 py-5" data-aos="fade-up"  data-aos-duration="1500">
                            <div className="px-md-5  py-5 text-[17px] font-montserrat bg-[#f2ece2] px-[2.8rem] sm:px-[6rem] md:px-[11rem]">
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-[3rem] md:pt-[8rem] ">
                                    <div className="my-3 ">
                                        <label className=" form-label font-medium ">First name</label><br />
                                        <input type="text" name='first_name' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4  mt-2 w-full pl-4  py-4" placeholder="First name" aria-label="First name"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="form-label font-medium">Last name</label><br />
                                        <input type="text" name='last_name' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4 mt-2 w-full pl-4 py-4" placeholder="Last name" aria-label="Last name"/>
                                    </div>
                                </div>
                                <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 pt-5">
                                    <div className="my-3">
                                        <label className="form-label form-label font-medium">Email Address</label><br />
                                        <input type="text" name='user_email' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4 mt-2 w-full pl-4 py-4" placeholder="Email Address" aria-label="Email"/>
                                    </div>
                                    <div className="my-3">
                                        <label className="form-label font-medium">Country</label><br />
                                        <input type="text" name='country' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4 mt-2 w-full pl-4 py-4" placeholder="Country" aria-label="Country"/>
                                    </div>
                                </div>
                                <div className="pt-5 my-3">
                                    <label className="form-label font-medium">How did you find out about Drunken Wizards?</label><br />
                                    <input type="text" name='found_on' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4 mt-2 w-full pl-4 py-4" id="formGroupExampleInput" placeholder="Just say someting :)"/>
                                </div>
                                <div className="mb-3 pt-6 my-5">
                                    <label className="form-label font-medium">What do we need to do for you?</label><br />
                                    <textarea name='message' className="outline-none focus:outline-[#9aa9d2] mb-8 focus:outline-4 mt-2 w-full pl-4 py-4" id="exampleFormControlTextarea1" placeholder="Type your need" rows="3"></textarea>
                                </div>
                                <div className="pt-6 my-6 pb-32 text-center">
                                    <button onClick={() => {setOpenPopup(true)}} type="submit" value={send} className="bg-[#23221f] py-4 px-12 text-white hover:text-[#23221f] hover:bg-white duration-700">SEND</button>

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </form>

        </section>

        <div className="popup">
            <Popup open={openPopup} onClose={() => setOpenPopup(false) } />
        </div>

      
    </div>
  )
}

export default Contact