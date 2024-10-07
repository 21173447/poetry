import React from 'react'
import im1 from '../images/pexels-ena-marinkovic-1814213-3713689.jpg'

function About() {
    return (
        <div id="about" className="relative  overflow-hidden mt-16 ">
            <div className="max-w-7xl mx-auto">
                <div className="relative z-10 pb-8 bg-white sm:pb-16 md:pb-20 lg:max-w-2xl lg:w-full lg:pb-28 xl:pb-32">
                    <svg className="hidden lg:block absolute right-0 inset-y-0 h-full w-48 text-white transform translate-x-1/2"
                        fill="currentColor" viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
                        <polygon points="50,0 100,0 50,100 0,100"></polygon>
                    </svg>

                    <div className="pt-1"></div>

                    <main className="mt-10 mx-auto max-w-7xl px-4 sm:mt-12 sm:px-6 md:mt-16 lg:mt-20 lg:px-8 xl:mt-28">
                        <div className="sm:text-center lg:text-left">
                            <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                                About Poety Zone
                            </h2>

                            <p className="text-gray-700">
                            Welcome to Poetry Zone, a space where words come alive and emotions find their voice. Whether you're an aspiring poet, a seasoned wordsmith, or simply a lover of verse, Poetry Zone is designed to celebrate the beauty of poetry in all its forms.
                            </p>

                            <h2 className="my-6 text-2xl tracking-tight font-extrabold text-gray-900 sm:text-3xl md:text-4xl">
                            Our Mission
                            </h2>

                            <p className="text-gray-700">
                            At Poetry Zone, we believe that poetry has the power to transcend boundaries, inspire thought, and evoke deep emotions. Our mission is to create a platform where poets and poetry lovers alike can share, explore, and connect through the written word. We aim to foster a community where creativity flourishes and where every voice, no matter how quiet or loud, is heard and appreciated.
                            </p>
                        </div>
                    </main>
                </div>
            </div>
            <div className="lg:absolute lg:inset-y-0 lg:right-0 lg:w-1/2">
                <img className="h-56 w-full object-cover object-top sm:h-72 md:h-96 lg:w-full lg:h-full" src={im1} alt="About" />
            </div>
        </div>
    )
}

export default About
