import React, { useState } from 'react';
import axios from 'axios';

function Subscribe() {
    const [email, setEmail] = useState('');
    const [message, setMessage] = useState('');

    const handleSubmit = async (e) => {
        e.preventDefault();

        // Access the API key from environment variables
        const apiKey = process.env.REACT_APP_INFOBIP_API_KEY;

        // Debugging line to check if the API key is defined
        console.log("API Key:", apiKey);

        try {
            const response = await axios.post('https://api.infobip.com/email/1/send', {
                from: 'tshegofatsononyane009@gmail.com', // Ensure this email is approved in Infobip
                to: email,
                subject: 'Subscription Confirmation',
                text: 'Thank you for subscribing to SecureCloud updates!',
            }, {
                headers: {
                    'Authorization': `App ${apiKey}`, // Use the environment variable here
                    'Content-Type': 'application/json',
                },
            });

            setMessage('Thank you for subscribing! A confirmation email has been sent to your inbox.');
        } catch (error) {
            console.error('Error sending email:', error);
            
            // Handle different error cases
            if (error.response) {
                setMessage('Error sending email: ' + (error.response.data.message || error.response.statusText));
            } else if (error.request) {
                setMessage('Error sending email: No response from the server');
            } else {
                setMessage('Error sending email: ' + error.message);
            }
        }
    };

    return (
        <section className='h-[50vh] bg-[#3f2a1e] bg-texture shadow-2xl bg-opacity-80 flex justify-center items-center'>
            <div className='rounded-3xl h-auto shadow-2xl bg-[#2c1c13] lg:p-20 sm:p-10 bg-opacity-60'>
                <h1 className='text-center text-white text-3xl py-3'>SUBSCRIBE</h1>
                <div className="grid place-content-center">
                    <hr className="border-[3px] w-20 flex border-white" />
                </div>
                <div className='text-center pt-5 text-white text-lg'>
                    <h1>Keep me Updated</h1>
                    <h1>Keep pace with SecureCloud advancements! Join our mailing list for selective, noteworthy updates.</h1>
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
                        className="w-72 rounded-l-xl border-none bg-white/5 px-3.5 py-2 text-white shadow-sm ring-1 ring-inset ring-white/10 focus:ring-2 focus:ring-inset focus:ring-white sm:text-sm sm:leading-6" 
                        placeholder="Enter your email" 
                    />
                    <button 
                        type="submit" 
                        className="rounded-r-xl bg-[#99725a] px-3.5 py-2.5 text-sm text-white shadow-sm hover:bg-[#3f2a1e] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-white"
                    >
                        Notify me
                    </button>
                </form>
                {message && <p className="text-center text-white mt-4">{message}</p>}
            </div>
        </section>
    );
}

export default Subscribe;
