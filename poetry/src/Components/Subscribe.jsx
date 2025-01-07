import React, { useState } from 'react';
import emailjs from "emailjs-com";

function Subscribe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = (e) => {
        e.preventDefault();
        
        // Set your EmailJS credentials here
        const serviceId = "service_reid616"; 
        const templateId = "template_4uf3l0s"; 
        const userId = "lh5bUkZiLpOPPWKzY"; 

        const templateParams = {
            email: email,  
        };

        emailjs.send(serviceId, templateId, templateParams, userId)
            .then((result) => {
                console.log(result.text);
                setMessage('Thank you for subscribing! A confirmation email has been sent to your inbox.');
            }, (error) => {
                console.log(error.text);
                setMessage('There was an error sending your email. Please try again.');
            });
      
        setEmail('');
    };

    return (
        <section className='h-[50vh] bg-texture shadow-2xl bg-opacity-80 flex justify-center items-center'>
            <div className='rounded-3xl h-auto shadow-2xl bg-[#2c1c13] p-8 lg:p-20 bg-opacity-60'>

                <h1 className='text-center text-white text-2xl sm:text-xl py-3'>SUBSCRIBE</h1>
                <div className="grid place-content-center">
                    <hr className="border-[3px] w-16 sm:w-12 flex border-white" />
                </div>
                <div className='text-center pt-5 text-white text-lg'>
    <h1 className="hidden sm:block">Keep me Updated</h1>
    <h1 className="hidden sm:block">Keep pace with SecureCloud advancements! Join our mailing list for selective, noteworthy updates.</h1>
</div>
                <form onSubmit={handleSubmit} className="grid grid-flow-col gap-0 place-content-center mt-5">
                    <label htmlFor="email-address" className="sr-only">Email address</label>
                    <input 
                        id="email-address" 
                        name="email" 
                        type="email" 
                        autoComplete="email" 
                        required 
                        value={email}
                        onChange={(e) => setEmail(e.target.value)}
                        className="w-72 sm:w-64 md:w-[400px] rounded-l-xl border-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-xs sm:leading-5" 
                        placeholder="Enter your email" 
                    />
                    <button 
                        type="submit" 
                        className="rounded-r-xl bg-[#99725a] px-3 py-2 text-sm text-white shadow-sm hover:bg-[#3f2a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Notify me
                    </button>
                </form>
                {message && <p className="text-center text-white mt-4 text-xs sm:text-sm">{message}</p>}
            </div>
        </section>
    );
}

export default Subscribe;
