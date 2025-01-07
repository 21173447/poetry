import React from 'react';
import img1 from '../Authors/William-Wordsworth-Portrait-Picture.jpg';
import img2 from '../Authors/Robert-Frost-Portrait-Square.webp';
import img3 from '../Authors/Allen-Ginsberg-Portrait.webp';
import img4 from '../Authors/Thomas-Hardy-Portrait.jpg';
import img5 from '../Authors/Percy-Bysshe-Shelley-Biography-Portrait.webp';
import img6 from '../Authors/Oscar-Wilde-Portrait.jpg';
import img7 from '../Authors/Anne-Sexton-Stylistic-Portrait-e1680618833888.webp';
import img8 from '../Authors/Samuel-Taylor-Coleridge-Portrait.jpg';


const Quotes = () => {
    return (
        <section className="min-h-[50vh] bg-texture sm:min-h-[80vh] lg:min-h-[120vh] pt-10 grid-flow-col place-content-center text-white bg-[#251308] px-4 sm:py-10 sm:px-9 lg:px-44 lg:pt-72 ">
            
            <div className="pt-20 text-3xl sm:text-4xl text-center">
                <h1>Quotes</h1>
                <div className="flex justify-center py-2">
                    <hr className="border-[3px] w-20 flex border-white" />
                </div>
            </div>

            <div className="pt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                <a href="https://poemanalysis.com/william-wordsworth/biography/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img1} alt="William Wordsworth" />
                        </div>
                        <h2 className="text-sm sm:text-base">Poetry is the spontaneous overflow of powerful feelings: it takes its origin from emotion recollected in tranquillity.</h2>
                        <h1 className="text-sm sm:text-base">— William Wordsworth</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/robert-frost/biography/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img2} alt="Robert Frost" />
                        </div>
                        <h2 className="text-sm sm:text-base">A poem begins as a lump in the throat, a sense of wrong, a homesickness, a lovesickness.</h2>
                        <h1 className="text-sm sm:text-base">— Robert Frost</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/allen-ginsberg/poems/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img3} alt="Allen Ginsberg" />
                        </div>
                        <h2 className="text-sm sm:text-base">Poetry is not an expression of the party line. It’s that time of night, lying in bed, thinking what you really think, making the private world public, that’s what the poet does.</h2>
                        <h1 className="text-sm sm:text-base">— Allen Ginsberg</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/thomas-hardy/poems/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img4} alt="Thomas Hardy" />
                        </div>
                        <h2 className="text-sm sm:text-base">Poetry is that time of night, lying in bed, thinking what you really think, making the private world public.</h2>
                        <h1 className="text-sm sm:text-base">— Thomas Hardy</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/percy-bysshe-shelley/poems/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img5} alt="Percy Bysshe Shelley" />
                        </div>
                        <h2 className="text-sm sm:text-base">Poetry lifts the veil from the hidden beauty of the world, and makes familiar objects be as if they were not familiar.</h2>
                        <h1 className="text-sm sm:text-base">— Percy Bysshe Shelley</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/oscar-wilde/biography/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img6} alt="Oscar Wilde" />
                        </div>
                        <h2 className="text-sm sm:text-base">A poet can survive everything but a misprint.</h2>
                        <h1 className="text-sm sm:text-base">— Oscar Wilde</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/anne-sexton/poems/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img7} alt="Anne Sexton" />
                        </div>
                        <h2 className="text-sm sm:text-base">One of my secret instructions to myself as a poet is: ‘Whatever you do, don’t be boring.’</h2>
                        <h1 className="text-sm sm:text-base">— Anne Sexton</h1>
                    </div>
                </a>

                <a href="https://poemanalysis.com/samuel-taylor-coleridge/poems/" target="_blank" rel="noopener noreferrer">
                    <div className="bg-[#3f2a1e] border-white border-[1px] shadow-2xl bg-opacity-60 p-6 sm:p-8 rounded-lg hover:translate-x-1 hover:translate-y-1 transform duration-200 space-y-3 h-full">
                        <div className="grid place-items-center">
                            <img className="w-20 sm:w-24 rounded-full" src={img8} alt="Samuel Taylor Coleridge" />
                        </div>
                        <h2 className="text-sm sm:text-base">Poetry is words in their best order; prose is words in the best order.</h2>
                        <h1 className="text-sm sm:text-base">— Samuel Taylor Coleridge</h1>
                    </div>
                </a>
            </div>
        </section>
    );
};

export default Quotes;