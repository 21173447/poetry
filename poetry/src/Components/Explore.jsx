import React from 'react'
import { useParams } from 'react-router-dom'
import img1 from '../images/76988900-5fd5-4757-a0b0-e14a16f1bbd0.png'
import img2 from '../images/14efcb65-f401-4362-8eb5-adef80648fa8.png'
import img3 from '../images/132c7a25-bb47-4d21-a694-64acd7331203.png'
import img4 from '../images/I thought I was baf15c4d-23b4-4f17-bae3-80580eb4921c.png'


const poemsData = {
    'skybound-serenity': {
        title: 'Skybound Serenity',
        img: img1,
        content: `
          How far are you? Are you near? If so, then how far out do you stretch? Why do you look different and stay the same wherever I go?
  
          Do tears fall when clouds weep? Does joy rise with the sun’s embrace? Do gusts of wind stir anger?
  
           Still, you remain my unwavering constant. Your form unchanging, yet each day a new tale unfolds. Is it you who changes, or the world around?
  
            You are my timeless solace. Yet, reclining upon your clouds tempts me, to fathom your essence.
  
      `
    },
    'melodic-echoes': {
        title: 'Melodic Echoes',
        img: img2,
        content: `What's this I hear, so calm, so soothing,
A sound so pure, my heart it's moving.
Though faint, it plays, an angel's song,
Melodic tears, they've cried so long.


Hear me now, I'm trying to save,
Not out of sadness, but to be brave.
You were right, when you asked why,
People question God, yet never pray.


Your song reminds me what’s truly key,
Though not a song, your words to me.
They guide my steps, my life’s own track,
A steady course, no turning back.
`
    },

    'writers-club': {
        title: 'Writers Club',
        img: img3,
        content: `I write to rewrite,
 Not just so I could be right.
  I write what I like, but not to be liked.

With hope, these words find their way,
Like Mike's, impacting hearts in their own display.

I write in the realm of the right mind,
But right now, it is the wrongs we may find.
And in these decisions, I seek the light,
Guiding me through with insight.

My writing's essence remains pure,
Not just for the applause, I assure.`
    },
    'Journey Through Dusk and Dawn': {
        title: 'Journey Through Dusk and Dawn',
        img: img4,
        content: `As dusk settles in, winds gust and shear through the night,
ushering your fears to the forefront. Alone, you sit while darkness engulfs the night sky.


There's an underlying beauty, yet the darkness conceals its potential ugliness.
Interestingly, this darkness also ushers in a sense of peace; silence has never been more pronounced.
The world stands at a standstill, yet a flurry of activities unfolds.

With daybreak, the sky transforms, painted with hues of blue, and birds begin their cheerful chirping.
What was once there has now shifted, and a moment arrives for confronting your fears.
A new day dawns, yet much remains unchanged. Amidst this continuity,
there's a potential for fresh experiences and occurrences.`
    }
}


const Explore = () => {
    const { poemId } = useParams()
    const poem = poemsData[poemId]

    if (!poem) {
        return <div className='text-white text-center pt-10'>Poem not found.</div>
    }

    return (
        <section className='h-[95vh]'>
            <div className='grid grid-cols-1  md:grid-cols-2  bg-[#251308] text-white bg-texture'>
                <div>
                    <img src={poem.img} alt={poem.title} className='w-full h-auto rounded-[0px] ' />
                </div>
                <div className='text-center py-8 md:py-20 px-4 md:px-10 grid-flow-col place-content-center'>
                    <h1 className='text-3xl md:text-5xl'>{poem.title}</h1>
                    <div className='flex justify-center pt-6 md:pt-10'>
                        <hr className="border-[3px] w-16 md:w-32 border-white" />
                    </div>


                    <div className='mt-6 md:mt-10 text-justify lg:px-52'>
                        {poem.content.split('\n\n').map((paragraph, index) => (
                            <p key={index} className='mb-4'> 
                                {paragraph}
                            </p>
                        ))}
                        <p>~Ashleigh</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Explore
